<!--
 * @Author: your name
 * @Date: 2022-03-08 19:11:48
 * @LastEditTime: 2022-03-11 12:44:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \LHZ\vue\src\views\product\Spu\skuform\index.vue
-->
<template>
  <div>
    <el-form ref="form" label-width="80px" :model="spu">
      <el-form-item label="spu名称">
        <el-input placeholder="请输入SPU名称" v-model="spu.spuName"></el-input>
      </el-form-item>
      <el-form-item label="品牌">
        <el-select placeholder="请选择品牌" value="" v-model="spu.tmId">
          <el-option
            :label="tm.tmName"
            :value="tm.id"
            v-for="tm in TradeMarkList"
            :key="tm.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="SPU描述">
        <el-input
          placeholder="请输入SPU描述"
          type="textarea"
          rows="3"
          v-model="spu.description"
        ></el-input>
      </el-form-item>
      <el-form-item label="SPU图片">
        <el-upload
          action="/dev-api/admin/product/fileUpload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
      <el-form-item label="销售属性">
        <el-select
          value=""
          :placeholder="`还有${unSelectSaleAttr.length}个未选择`"
          v-model="attrIdAndAttrName"
        >
          <!--  - v-for="item in options"
          
           
           -->
          <el-option
            :value="`${unselect.id}:${unselect.name}`"
            :label="unselect.name"
            v-for="unselect in unSelectSaleAttr"
            :key="unselect.id"
          >
          </el-option>
        </el-select>
        <el-button
          type="primary"
          icon="el-icon-plus"
          :disabled="!attrIdAndAttrName"
          @click="addSaleAttr"
          >添加销售属性</el-button
        >
        <el-table
          border
          stripe
          style="width: 100%; margin: 20px 0px"
          :data="spu.spuSaleAttrList"
        >
          <el-table-column type="index" label="序号" width="80px">
          </el-table-column>
          <el-table-column prop="saleAttrName" label="属性名" width="200px">
          </el-table-column>
          <el-table-column prop="prop" label="属性值名称列表" width="width">
            <template slot-scope="{ row }">
              <!--  " -->
              <!-- el-tag:用户展示已有属性值列表的数据的 -->
              <el-tag
                :key="tag.id"
                v-for="(tag, index) in row.spuSaleAttrValueList"
                closable
                :disable-transitions="false"
                @close="row.spuSaleAttrValueList.splice(index, 1)"
                >{{ tag.saleAttrValueName }}</el-tag
              >
              <el-input
                class="input-new-tag"
                v-if="row.inputVisible"
                v-model="row.inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm(row)"
              >
              </el-input>
              <el-button
                v-else
                class="button-new-tag"
                size="small"
                @click="addSaleAttrValue(row)"
                >+ New Tag</el-button
              >
            </template>
          </el-table-column>
          <el-table-column prop="prop" label="操作" width="200px">
            <template slot-scope="{}">
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                @click="spu.spuSaleAttrList.splice($index, 1)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" @click="addOrUpdateSpu">保存</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "spuForm",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      //spu的信息
      spu: {
        //三级分类的id
        category3Id: 0,
        //描述
        description: "",
        //spu名称
        spuName: "",
        //平台的id
        tmId: "",
        //收集SPU图片的信息
        spuImageList: [],
        //平台属性与属性值收集
        spuSaleAttrList: [],
      },
      //品牌信息
      TradeMarkList: [],
      //SPU图片
      spuImageList: [],
      //销售属性
      saleAttrList: [],
      //收集未选择的销售属性的id-----
      attrIdAndAttrName: "",
    };
  },
  computed: {
    unSelectSaleAttr() {
      let result = this.saleAttrList.filter((item) => {
        return this.spu.spuSaleAttrList.every((item1) => {
          return item.name != item1.saleAttrName;
        });
      });
      return result;
    },
  },
  methods: {
    handleRemove(file, fileList) {
      //file代表的是删除的那张图片
      //fileList 删除某一张图片后剩余的图片
      // console.log(file, fileList);
      //收集照片墙图片的数据
      this.spuImageList = fileList;
    },
    handlePictureCardPreview(file) {
      //将图片地址赋值给这个属性
      this.dialogImageUrl = file.url;
      //控制对话框的显示与隐藏
      this.dialogVisible = true;
    },
    //初始化spuForm的数据
    async initSpuData(spu) {
      //获取spu信息
      let spuRes = await this.$API.spu.reqSpu(spu.id);
      if (spuRes.code == 200) {
        //在修改spu的时候 需要向服务器发请求 把返回的数据赋值给spu属性
        this.spu = spuRes.data;
      }
      //获取品牌的信息
      let TradeMarkRes = await this.$API.spu.reqTradeMarkList();
      if (TradeMarkRes.code == 200) {
        this.TradeMarkList = TradeMarkRes.data;
      }
      //获取spu图片
      let spuImageReq = await this.$API.spu.reqSpuImageList(spu.id);
      if (spuImageReq.code == 200) {
        let listArr = spuImageReq.data;
        listArr.forEach((item) => {
          listArr.name = item.imgName;
          listArr.url = item.imgUrl;
        });
      }
      //获取平台的销售属性
      let saleRes = await this.$API.spu.reqBaseSaleAttrList();
      if (saleRes.code == 200) {
        this.saleAttrList = saleRes.data;
      }
    },
    //照片墙上传成功的回调
    handleSuccess(response, file, fileList) {
      //收集SPU图片的信息
      this.spuImageList = fileList;
    },
    //添加新的销售属性
    addSaleAttr() {
      //已经收集需要添加的销售属性的信息
      //把收集到的销售属性数据进行分割
      const [baseSaleAttrId, saleAttrName] = this.attrIdAndAttrName.split(":");
      //向SPU对象的spuSaleAttrList属性里面添加新的销售属性
      let newSaleAttr = {
        baseSaleAttrId,
        saleAttrName,
        spuSaleAttrValueList: [],
      };
      //添加新的销售属性
      this.spu.spuSaleAttrList.push(newSaleAttr);
      //清空数据
      this.attrIdAndAttrName = "";
    },
    //添加按钮的回调
    addSaleAttrValue(row) {
      //点击销售属性值中的添加按钮时 button 变为input 通过inputVisible进行控制
      //响应式数据
      this.$set(row, "inputVisible", true);
      //通过响应式数据inputValue来收集新增的销售属性
      this.$set(row, "inputValue", "");
    },
    //input失去焦点的事件
    handleInputConfirm(row) {
      //解构出销售属性 再收集数据
      const { baseSaleAttrId, inputValue } = row;
      //属性值不能为空
      if (inputValue.trim() == "") {
        this.$message("属性值不能为空");
        return;
      }
      //属性值不能重复,这里也可以用some
      let result = row.spuSaleAttrValueList.every(
        (item) => item.saleAttrValueName != inputValue
      );
      if (!result) {
        this.$message("属性值不能重复");
        return;
      }

      //新增加的销售属性值
      let newSaleAttrValue = { baseSaleAttrId, saleAttrValueName: inputValue };
      //新增
      row.spuSaleAttrValueList.push(newSaleAttrValue);
      //修改inputVisible的值为false
      row.inputVisible = false;
    },
    //保存或修改spu的回调
    async addOrUpdateSpu() {
      //整理参数
      //照片墙 需要携带ImageName和ImageUrl
      this.spu.spuImageList = this.spuImageList.map((item) => {
        return {
          imageName: item.name,
          imageUrl: (item.response && item.response.data) || item.url,
        };
      });
      //发请求
      let result = await this.$API.spu.reqAddOrUpdateSpu(this.spu);

      if (result.code == 200) {
        this.$message({ type: "success", message: "保存成功" });
        //通知父组件 回到scene=0的场景
        this.$emit("changeScene", {
          scene: 0,
          flag: this.spu.id ? "修改" : "添加",
        });
        // 清除数据
         Object.assign(this._data,this.$options.data())
      }
    },
    //点击添加spu按钮时候发送请求获取品牌和销售数据
    async addSpuData(category3Id) {
      //添加spu的时候收集三级分类的id
      this.spu.category3Id=category3Id
      //获取品牌的信息
      let TradeMarkRes = await this.$API.spu.reqTradeMarkList();
      if (TradeMarkRes.code == 200) {
        this.TradeMarkList = TradeMarkRes.data;
      }
      //获取平台的销售属性
      let saleRes = await this.$API.spu.reqBaseSaleAttrList();
      if (saleRes.code == 200) {
        this.saleAttrList = saleRes.data;
      }
    },
    //取消按钮
    cancel(){
      //取消按钮的回调 通知父组件切换场景
      this.$emit('changeScene',{scene:0,flag:""})
      //清除数据
      //Object.assign 是es6中的新增属性 Object.assign(a,b)将b合并给a
      Object.assign(this._data,this.$options.data())
    }

  },
};
</script>

<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>