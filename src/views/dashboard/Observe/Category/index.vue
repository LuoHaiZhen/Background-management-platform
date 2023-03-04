<!--
 * @Author: your name
 * @Date: 2022-03-18 18:19:13
 * @LastEditTime: 2022-03-19 13:17:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \LHZ\vue\src\views\dashboard\Observe\Category\index.vue
-->

<template>
  <div>
    <el-card>
      <div slot="header">
        <div class="header1">
          <span class="text"> 销售额类别占比</span>

          <el-radio-group v-model="radio3" size="small">
            <el-radio-button label="全部渠道"></el-radio-button>
            <el-radio-button label="线上"></el-radio-button>
            <el-radio-button label="门店"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div>
        <div class="charts" ref="charts"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Category",
  data() {
    return {
      radio3: "全部渠道",
    };
  },
  mounted() {
    //饼图
    let myCharts = echarts.init(this.$refs.charts);
    myCharts.setOption({
      title: {
        text: "视频",
        subtext: 1048,
        left: "center",
        top: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "outside",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: true,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    });
    myCharts.on("mouseover", (params) => {
      //获取鼠标移上去那条数据
      const { name, value } = params.data;
      //重新设置标题
      myCharts.setOption({
        title: {
          text: name,
          subtext: "value",
        },
      });
    });
  },
};
</script>

<style  scoped>
.header1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  padding-top: 9px;
}
.charts {
  width: 100%;
  height: 300px;
}
</style>