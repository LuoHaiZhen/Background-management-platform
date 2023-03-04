
<template>
  <div>
    <el-row :gutter="10">
      <!-- 总销售额 -->
      <el-col :span="6">
        <el-card>
          <Detail title="总销售额" count="￥112921">
            <template slot="charts">
              <span
                >周同比 56.67%
                <svg
                  t="1647410720125"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1586"
                  width="16"
                  height="16"
                >
                  <path
                    d="M960 704L512 256l-448 448z"
                    fill="#d81e06"
                    p-id="1587"
                  ></path></svg
              ></span>
              <br />
              <span
                >日同比 19.96%
                <svg
                  t="1647410899726"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3451"
                  width="16"
                  height="16"
                >
                  <path
                    d="M64 320l448 448 448-448z"
                    fill="#1afa29"
                    p-id="3452"
                  ></path></svg
              ></span>
            </template>
            <template slot="footer">
              <span> 日销售额 ￥12355 </span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <!-- 访问量 -->
      <el-col :span="6">
        <el-card>
          <Detail title="访问量" count="13221">
            <template slot="charts">
                <LineCharts></LineCharts>
            </template>
            <template slot="footer">
              <span> 日访问量 2355 </span>
            </template>
          </Detail>
        </el-card></el-col>
      <!-- 支付笔数 -->
      <el-col :span="6">
        <el-card>
          <Detail title="支付笔数" count="10849">
            <template slot="charts">
             <BarCharts/>
            </template>
            <template slot="footer">
              <span> 转化率 56.87% </span>
            </template>
          </Detail>
        </el-card></el-col>
      <!-- 运营活动效果 -->
      <el-col :span="6">
        <el-card>
          <Detail title="运营活动效果" count="58.7%">
            <template slot="charts">
            <ProgressCharts></ProgressCharts>
            </template>
            <template slot="footer">
              <div class="font">
                 <span
                >周同比 52%
                <svg
                  t="1647410720125"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1586"
                  width="12"
                  height="12"
                >
                  <path
                    d="M960 704L512 256l-448 448z"
                    fill="#d81e06"
                    p-id="1587"
                  ></path></svg
              ></span>
              <span
                >日同比 23%
                <svg
                  t="1647410899726"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3451"
                  width="12"
                  height="12"
                >
                  <path
                    d="M64 320l448 448 448-448z"
                    fill="#1afa29"
                    p-id="3452"
                  ></path></svg
              ></span>
              </div>            
            </template></Detail>
        </el-card></el-col
      >
    </el-row>
  </div>
</template>

<script>
//引入数据可视化组件
import Detail from "./detail";
import LineCharts from "./lineCharts";
import BarCharts from "./barCharts";
import ProgressCharts from "./progressCharts";
export default {
  name: "cart",
  components: {
    Detail,
    LineCharts,
    BarCharts,
    ProgressCharts,
  },
};
</script>

<style>
span{
  font-size: 11px;
}
</style>