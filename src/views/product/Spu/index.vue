<template>
  <div>
    <el-card>
      <CategorySelect
        @getCategoryId="getCategoryId"
        :show="scene != 0"
      ></CategorySelect>
    </el-card>
    <el-card style="margin: 20px 0px">
      <!-- 展示spu列表的结构 -->
      <div v-show="scene == 0">
        <el-button
          type="primary"
          icon="el-icon-plus"
          :disabled="!category3Id"
          @click="addSpu"
          >添加SPU</el-button
        >
        <el-table style="width: 100%" border stripe :data="records">
          <el-table-column type="index" label="序号" width="80px">
          </el-table-column>
          <el-table-column prop="spuName" label="SPU名称" width="width">
          </el-table-column>
          <el-table-column prop="description" label="SPU描述" width="width">
          </el-table-column>
          <el-table-column prop="prop" label="操作" width="width">
            <template slot-scope="{ row }">
              <hint-button
                @click="addSku(row)"
                type="success"
                icon="el-icon-plus"
                size="mini"
                title="添加sku"
              ></hint-button>
              <el-button
                @click="updateSpu(row)"
                type="warning"
                size="mini"
                icon="el-icon-edit"
                title="修改sku"
              ></el-button>
              <el-button
                type="info"
                size="mini"
                icon="el-icon-info"
                title="查看当前spu的所有sku列表"
                @click="handler(row)"
              ></el-button>

              <el-popconfirm
                title="这是一段内容确定删除吗？"
                @onConfirm="deleteSpu(row)"
              >
                <el-button
                  type="danger"
                  size="mini"
                  icon="el-icon-delete"
                  title="删除sku"
                  slot="reference"
                  style="margin: 10px"
                ></el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
          <!--  
          -->
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="change"
          style="margin-top: 20px; text-align: center"
          :current-page="page"
          :total="total"
          :page-size="limit"
          :pager-count="7"
          :page-sizes="[3, 5, 10]"
          layout="prev, pager, next, jumper,->,sizes,total"
        >
        </el-pagination>
      </div>
      <div>
        <!-- 展示添加或修改spu -->
        <SpuForm v-show="scene == 1" @changeScene="changeScene" ref="spu" />
        <!-- 添加sku -->
        <SkuForm v-show="scene == 2" ref="sku" @changeScenes="changeScenes" />
      </div>
    </el-card>
    <el-dialog
      :title="`${spu.spuName}的sku列表`"
      :visible.sync="dialogTableVisible"
      @close="close(row)"
    >
      <el-table
        :data="skuList"
        style="width: 100%" border
        v-loading='loading'>
        <el-table-column
          prop="skuName"
          label="名称"
          width="width">
        </el-table-column>
         <el-table-column
          prop="price"
          label="价格"
          width="width">
        </el-table-column>
         <el-table-column
          prop="weight"
          label="重量"
          width="width">
        </el-table-column>
         <el-table-column
        
          label="默认图片"
          width="width">
          <template slot-scope="{row}">
           <img :src="row.skuDefaultImg" alt="" style="width: 100px;height:100px">
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import SpuForm from "./spuform";
import SkuForm from "./skuform";
export default {
  name: "Spu",
  data() {
    return {
      //分类的id
      category1Id: "",
      category2Id: "",
      category3Id: "",
      //分页器相关
      //代表的分页器第几页
      page: 1,
      //当前页数展示数据条数
      limit: 3,
      //总共数据条数
      total: 0,
      //spu列表的数据
      records: [],
      //控制场景展示 0代表展示 1 代表添加或修改spu  2 代表添加sku
      scene: 0,
      spu: {},
      //控制对话框的显示与隐藏
      dialogTableVisible: false,
      //sku列表的数据
      skuList:[],
      //加载
      loading:true
    };
  },
  components: {
    SpuForm,
    SkuForm,
  },

  methods: {
    getCategoryId({ categoryId, level }) {
      //获取到相应的id 并判断为几级id
      if (level == 1) {
        this.category1Id = categoryId;
        //清除二三级id
        this.category2Id = "";
        this.category3Id = "";
      } else if (level == 2) {
        this.category2Id = categoryId;
        //清除二级id
        this.category3Id = "";
      } else {
        this.category3Id = categoryId;
        //获取spu列表进行展示
        this.getSpuList();
      }
    },
    //获取spu列表数据
    async getSpuList() {
      //解构出参数
      const { page, limit, category3Id } = this;
      let result = await this.$API.spu.reqSpuList(page, limit, category3Id);
      if (result.code == 200) {
        (this.total = result.data.total), (this.records = result.data.records);
      }
    },
    //点击分页器按钮的回调
    change(page) {
      this.page = page;
      this.getSpuList();
    },
    handleSizeChange(limit) {
      this.limit = limit;
      this.getSpuList();
    },
    //添加SPU按钮的点击事件的回调
    addSpu() {
      this.scene = 1;
      //通知子组件发请求获取品牌和销售属性
      this.$refs.spu.addSpuData(this.category3Id);
    },
    //修改sku按钮点击事件的回调
    updateSpu(row) {
      this.scene = 1;
      //获取子组件spuForm

      this.$refs.spu.initSpuData(row);
      console.log(row);
    },
    //更改场景自定义事件的回调 来自spuForm
    changeScene({ scene, flag }) {
      //切换场景
      this.scene = scene;
      //再次发送请求 并停留在发生修改的那一页
      if (flag == "修改") {
        this.getSpuList(this.page);
      } else {
        //添加时 保存后回到第一页
        this.getSpuList();
      }
    },
    //删除sku
    async deleteSpu(row) {
      let result = await this.$API.spu.reqDeleteSpu(row.id);
      if (result.code == 200) {
        this.$message({ type: "success", message: "删除成功111" });
        //当前页spu个数大于1 删除后停留在当前页 小于1跳转到上一页
        this.getSpuList(this.records.length > 1 ? this.page : this.page - 1);
      }
    },
    //添加sku
    addSku(row) {
      console.log(row);
      //切换场景
      this.scene = 2;
      //让父组件调用子组件的方法 让子组件发请求
      this.$refs.sku.getData(this.category1Id, this.category2Id, row);
    },
    //skuInfo 通知父组件切换场景
    changeScenes(scene) {
      this.scene = scene;
    },
    //查看当前sku列表的回调
    async handler(spu) {
      //点击按钮时
      this.dialogTableVisible = true;
      //保存spu的信息
      this.spu = spu;
      //获取sku列表的数据进行展示
      let result = await this.$API.sku.reqSkuList(spu.id);
      if (result.code == 200) {
        this.skuList=result.data
        this.loading=false
      }
    },
    //关闭对话框的回调
    close(){
      //loading变为true
      this.loading=true
      //清空数据
      this.skuList=[]
    }
  },
  mounted() {},
};
</script>

<style>
</style>