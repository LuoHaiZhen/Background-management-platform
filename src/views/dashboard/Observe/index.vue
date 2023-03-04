

<template>
 <el-card>
    <el-row :gutter="30">
        <el-col :span="12">
           
            <Search></Search>
            
        </el-col>
        <el-col :span="12">
             
            <Category></Category>
            
        </el-col>
    </el-row>
 </el-card>
</template>

<script>
import Category from './Category';
import Search from './Search';
export default {
name:'Observe',
components:{
    Category,
    Search,
}
}
</script>

<style>

</style>