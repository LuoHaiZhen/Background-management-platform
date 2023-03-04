<!--
 * @Author: your name
 * @Date: 2022-03-16 14:29:00
 * @LastEditTime: 2022-03-16 15:17:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \LHZ\vue\src\views\dashboard\cart\lineCharts\index.vue
-->

<template>
  <div class="charts" ref="charts"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "",
  mounted() {
    //初始化eCharts实例
    let lineCharts = echarts.init(this.$refs.charts); //配置数据
    lineCharts.setOption({
      yAxis: {
        //隐藏y轴
        show: false,
      },
      xAxis: {
        //隐藏x轴
        show: false,
        type: "category",
      },
      //系列
      series: [
        {
          type: "line",
          data: [10, 7, 33, 12, 48, 9,29,10,44,33,22,8],
          smooth: true, //平滑
          //拐点样式的设置
          itemStyle: {
            opacity: 0.618,
            color: "#0095B6",
          },
          lineStyle: {
            color: "#0095B6",
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#0095B6", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#fff", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        },
      ],
      //布局
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

<style>
.charts {
  width: 100%;
  height: 100%;
}
</style>