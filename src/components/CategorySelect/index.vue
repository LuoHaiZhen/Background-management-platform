<!--
 * @Author: your name
 * @Date: 2022-03-04 20:32:15
 * @LastEditTime: 2022-03-04 21:15:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \LHZ\vue\src\components\CategorySelect\index.vue
-->
<template>
  <div>
    <el-form :inline="true" class="demo-form-inline" :model="cForm">
      <el-form-item label="一级分类">
        <el-select placeholder="请选择" v-model="cForm.category1Id" @change="handler1">
          <el-option :label="c1.name" :value="c1.id"
          v-for="c1 in list1" :key="c1.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类" >
        <el-select placeholder="请选择" v-model="cForm.category2Id" @change="handler2">
          <el-option :label="c2.name" :value="c2.id"
          v-for="c2 in list2" :key="c2.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select placeholder="请选择" v-model="cForm.category3Id" @change="handler3">
          <el-option :label="c3.name" :value="c3.id"
          v-for="c3 in list3" :key="c3.id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CategorySelect",
  data() {
    return {
      //一级分类的数据
      list1: [],
      //收集相应的一二三级分类的id
      cForm:{
        category1Id:'',
        category2Id:'',
        category3Id:'',
      },
      //二级分类的数据
      list2: [],
      //三级分类的数据
      list3: [],
    };
  },
  mounted() {
    //获取一级分类数据的方法
    this.getCategory1List();
    
  },
  methods: {
    async getCategory1List() {      
      //获取一级分类数据的请求
      let result = await this.$API.attr.reqCategory1List();
      if (result.code == 200) {
        this.list1 = result.data;
      }
    },
    //选择一级分类后的事件回调
   async handler1(){
     //清除数据
      this.list2=[];
      this.list3=[];
      this.cForm.category2Id='';
      this.cForm.category3Id='';
      //解构出一级分类的id
      const {category1Id}=this.cForm;
      this.$emit('getCategoryId',{categoryId:category1Id ,level:1})
      let result= await this.$API.attr.reqCategory2List(category1Id);
      if (result.code == 200) {
        this.list2 = result.data;
      }
    },
    //选择二级分类后的事件回调
    async handler2(){
      //清除数据
      this.list3=[];
      this.cForm.category3Id='';
      //解构出二级分类的id      
      const {category2Id}=this.cForm;
       this.$emit('getCategoryId',{categoryId:category2Id ,level:2})
      let result= await this.$API.attr.reqCategory3List(category2Id);
      if (result.code == 200) {
        this.list3= result.data;
      }
    },
    //选择三级分类后的事件回调
    handler3(){
      //解构出三级分类的id
       const {category3Id}=this.cForm;

       this.$emit('getCategoryId',{categoryId:category3Id ,level:3})
    }
    
  },
};
</script>

<style>
</style>