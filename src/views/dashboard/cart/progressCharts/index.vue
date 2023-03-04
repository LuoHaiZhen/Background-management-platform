<!--
 * @Author: your name
 * @Date: 2022-03-16 15:40:41
 * @LastEditTime: 2022-03-16 15:51:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \LHZ\vue\src\views\dashboard\cart\progressCharts\index.vue
-->
<template>
  <!-- 容器 -->
  <div class="charts" ref="charts"></div>
</template>

<script>
//引入echarts
import * as echarts from "echarts";
export default {
  name: "ProgressCharts",
  mounted() {
    //初始化echarts实例
    let lineCharts = echarts.init(this.$refs.charts);
    //配置数据
    lineCharts.setOption({
      xAxis: {
        //隐藏x轴
        show: false,
        //最小值与最大值的设置
        min: 0,
        max: 100,
      },
      yAxis: {
        //隐藏y轴
        show: false,
        //均分
        type: "category",
      },
      //系列
      series: [
        {
          //图标形式-柱状图
          type: "bar",
          data: [58.7],
          color: "cyan",
          //柱状图的宽度
          barWidth: 10,
          color: "yellowgreen",
          //背景颜色设置
          showBackground: true,
          //设置背景颜色
          backgroundStyle: {
            color: "#eee",
          },
          //文本标签
          label:{
             show:true,
             //改变文本内容
             formatter:'|',
             //文本标签位置调试
             position:'right'
          }
        },
      ],
      //布局调试
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
    });
  },
};
</script>

<style scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>

