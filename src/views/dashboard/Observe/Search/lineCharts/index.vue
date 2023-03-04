
<template>
  <div>
    <div class="header">
      <span style="margin: 0px 10px">搜索用户数</span>
      <svg
        t="1647609188947"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1602"
        width="24"
        height="24"
      >
        <path
          d="M509.92 795.84c157.904 0 285.92-128.016 285.92-285.92C795.84 352 667.808 224 509.92 224 352 224 224 352 224 509.92c0 157.904 128 285.92 285.92 285.92z m0 48C325.504 843.84 176 694.32 176 509.92 176 325.504 325.504 176 509.92 176c184.416 0 333.92 149.504 333.92 333.92 0 184.416-149.504 333.92-333.92 333.92z m-2.448-400.704h16a16 16 0 0 1 16 16v201.728a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V459.136a16 16 0 0 1 16-16z m0-100.176h16a16 16 0 0 1 16 16v23.648a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-23.648a16 16 0 0 1 16-16z"
          p-id="1603"
        ></path>
      </svg>
    </div>
    <div class="main">
      <span class="main-title">12306</span>
      <span class="main-content">
        12.9
        <svg
          t="1647609535964"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1589"
          width="16"
          height="16"
        >
          <path
            d="M960 704L512 256l-448 448z"
            fill="#d81e06"
            p-id="1590"
          ></path>
        </svg>
        <svg
          t="1647609579205"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2448"
          width="16"
          height="16"
        >
          <path d="M64 320l448 448 448-448z" fill="#262626" p-id="2449"></path>
        </svg>
      </span>
    </div>
    <div class="footer">
      <div class="charts" ref="charts"></div>
    </div>
  </div>
</template>

<script>
//引入eCharts
import * as echarts from "echarts";
export default {
  name: "lineChart",
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
          data: [10, 17, 33, 12, 28, 37,29,10,44,33,22,28],
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

<style scoped>
.header {
  display: flex;
  align-items: center;
}
.main {
  margin-top: 10px;
}
.main-title {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 20px;
}
.charts {
  width: 100%;
  height: 50px;
}
</style>
