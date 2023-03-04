<!--
 * @Author: your name
 * @Date: 2022-03-16 21:38:39
 * @LastEditTime: 2022-04-04 21:26:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \LHZ\vue\src\views\dashboard\sale\index.vue
-->
<template>
  <el-card class="box-card" style="margin: 10px 0px">
    <div slot="header" class="clearfix">
      <!-- v-model="activeName" @tab-click="handleClick" -->
      <!-- 左侧内容 -->
      <el-tabs class="tab" v-model="activeName">
        <el-tab-pane label="销售额" name="sale"></el-tab-pane>
        <el-tab-pane label="访问量" name="visite"></el-tab-pane>
      </el-tabs>
      <!--右侧内容  -->
      <div class="right">
        <span @click="setDay">今日</span>
        <span @click="setWeek">本周</span>
        <span @click="setMonth">本月</span>
        <span @click="setYear">本年</span>
        <!--    v-model="value1" -->
        <el-date-picker
          v-model="date"
          class="date"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
          style="padding-bottom:5px"
        >
        </el-date-picker>
      </div>
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :span="19">
          <div class="charts" ref="charts"></div>
        </el-col>
        <el-col :span="5" class="rank">
          <h3 class="h3">门店{{ title }}排名</h3>
          <ul>
            <li>
              <svg
                t="1647513351422"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3615"
                width="16"
                height="16"
              >
                <path
                  d="M447.74558 863.529215c0 17.662265 14.3181 31.980365 31.980366 31.980366 17.662265 0 31.980365-14.3181 31.980365-31.980366V159.962202c0-17.662265-14.3181-31.980365-31.980365-31.980366-17.662265 0-31.980365 14.3181-31.980366 31.980366v703.567013z"
                  p-id="3616"
                ></path>
              </svg>
              <span class="name">店名1</span>
              <span class="rvalue">123456</span>
            </li>
            <li>
              <svg
                t="1647513426361"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3789"
                width="16"
                height="16"
              >
                <path
                  d="M735.567845 511.745197c17.662265 0 31.980365-14.3181 31.980365-31.980366V159.962202c0-17.662265-14.3181-31.980365-31.980365-31.980366H287.843754c-17.662265 0-31.980365 14.3181-31.980365 31.980366 0 17.662265 14.3181 31.980365 31.980365 31.980365h415.743726v255.842922H287.843754c-17.662265 0-31.980365 14.3181-31.980365 31.980366v383.76336c0 1.104147 0.056282 2.194992 0.164752 3.269463a31.489178 31.489178 0 0 0 0.842181 4.722559c0.26299 1.022283 0.575098 2.0241 0.933255 3.003403a31.995715 31.995715 0 0 0 7.426133 11.617596 32.074509 32.074509 0 0 0 8.748245 6.213515 31.855522 31.855522 0 0 0 13.864776 3.15383H735.566822c17.662265 0 31.980365-14.3181 31.980365-31.980366s-14.3181-31.980365-31.980365-31.980365H319.824119v-319.803653h415.743726z"
                  p-id="3790"
                ></path>
              </svg>
              <span class="name">店名2</span>
              <span class="rvalue">123456</span>
            </li>
            <li>
              <svg
                t="1647513466076"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3963"
                width="16"
                height="16"
              >
                <path
                  d="M735.567845 127.981836H287.843754c-17.662265 0-31.980365 14.3181-31.980365 31.980366 0 17.662265 14.3181 31.980365 31.980365 31.980365h415.743726v255.842922H287.843754c-17.662265 0-31.980365 14.3181-31.980365 31.980366s14.3181 31.980365 31.980365 31.980365h415.743726v319.80263H287.843754c-17.662265 0-31.980365 14.3181-31.980365 31.980365s14.3181 31.980365 31.980365 31.980366h447.724091a31.855522 31.855522 0 0 0 13.864776-3.15383 32.03767 32.03767 0 0 0 8.748244-6.213515 31.995715 31.995715 0 0 0 7.426133-11.617596 31.335682 31.335682 0 0 0 1.29039-4.550642 32.036647 32.036647 0 0 0 0.649799-6.444783V159.962202c0.001023-17.662265-14.317077-31.980365-31.979342-31.980366z"
                  fill=""
                  p-id="3964"
                ></path>
              </svg>
              <span class="name">店名3</span>
              <span class="rvalue">123456</span>
            </li>
            <li>
              <svg
                t="1647513487062"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4137"
                width="16"
                height="16"
              >
                <path
                  d="M735.567845 127.981836c-17.662265 0-31.980365 14.3181-31.980365 31.980365l0 415.743726L319.824119 575.705927 319.824119 159.962202c0-17.662265-14.3181-31.980365-31.980365-31.980365-17.662265 0-31.980365 14.3181-31.980365 31.980365l0 447.724091c0 17.662265 14.3181 31.980365 31.980365 31.980365l415.743726 0 0 223.862557c0 17.662265 14.3181 31.980365 31.980365 31.980365 17.662265 0 31.980365-14.3181 31.980365-31.980365L767.54821 159.962202C767.54821 142.299937 753.23011 127.981836 735.567845 127.981836z"
                  p-id="4138"
                ></path>
              </svg>
              <span class="name">店名4</span>
              <span class="rvalue">123456</span>
            </li>
            <li>
              <svg
                t="1647513500735"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4311"
                width="16"
                height="16"
              >
                <path
                  d="M766.898411 473.320049a32.045857 32.045857 0 0 0-1.290389-4.550643 32.089859 32.089859 0 0 0-16.174378-17.83111 31.855522 31.855522 0 0 0-13.864776-3.15383H319.824119V191.942567h415.743726c17.662265 0 31.980365-14.3181 31.980365-31.980365 0-17.662265-14.3181-31.980365-31.980365-31.980366H287.843754c-17.662265 0-31.980365 14.3181-31.980365 31.980366v319.802629c0 17.662265 14.3181 31.980365 31.980365 31.980366h415.743726v319.80263H287.843754c-17.662265 0-31.980365 14.3181-31.980365 31.980365 0 17.662265 14.3181 31.980365 31.980365 31.980365h447.724091c17.662265 0 31.980365-14.3181 31.980365-31.980365V479.764831c0-1.104147-0.056282-2.194992-0.164752-3.269463s-0.271176-2.134617-0.485047-3.175319z"
                  p-id="4312"
                ></path>
              </svg>
              <span class="name">店名5</span>
              <span class="rvalue">123456</span>
            </li>
            <li>
              <svg
                t="1647513520293"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4485"
                width="16"
                height="16"
              >
                <path
                  d="M766.898411 473.320049c-0.106424-0.520863-0.226151-1.036609-0.357134-1.547239-0.26299-1.022283-0.575098-2.0241-0.933255-3.003404-1.434675-3.918239-3.614317-7.478322-6.367011-10.507308s-6.079462-5.526877-9.807367-7.323802c-4.194532-2.02103-8.897647-3.15383-13.864776-3.15383L319.824119 447.784466 319.824119 191.942567l415.743726 0c17.662265 0 31.980365-14.3181 31.980365-31.980365 0-17.662265-14.3181-31.980365-31.980365-31.980365L287.843754 127.981836c-17.662265 0-31.980365 14.3181-31.980365 31.980365l0 703.567014c0 17.662265 14.3181 31.980365 31.980365 31.980365l447.724091 0c17.662265 0 31.980365-14.3181 31.980365-31.980365L767.54821 479.764831c0-1.104147-0.056282-2.194992-0.164752-3.269463S767.112282 474.360751 766.898411 473.320049zM703.58748 511.745197l0 319.80263L319.824119 831.547827 319.824119 511.745197 703.58748 511.745197z"
                  p-id="4486"
                ></path>
              </svg>
              <span class="name">店名6</span>
              <span class="rvalue">123456</span>
            </li>
            <li>
              <svg
                t="1647513530809"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4695"
                width="16"
                height="16"
              >
                <path
                  d="M767.54821 159.962202c0-17.662265-14.3181-31.980365-31.980365-31.980365L287.843754 127.981836c-17.662265 0-31.980365 14.3181-31.980365 31.980365 0 17.662265 14.3181 31.980365 31.980365 31.980365l404.114874 0L447.74558 863.529215c0 17.662265 14.3181 31.980365 31.980365 31.980365 17.662265 0 31.980365-14.3181 31.980365-31.980365l248.37688-683.036421C764.740258 174.937265 767.54821 167.778214 767.54821 159.962202z"
                  p-id="4696"
                ></path>
              </svg>
              <span class="name">店名7</span>
              <span class="rvalue">123456</span>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";
import dayjs from "dayjs";
export default {
  name: "Sale",
  data() {
    return {
      activeName: "sale",
      //将eCharts的实例挂载到组件身上
      myCharts: null,
      //收集日历的数据
      date: [],
    };
  },
  mounted() {
    //初始化eCharts实例
    this.myCharts = echarts.init(this.$refs.charts);
    //配置数据
    this.myCharts.setOption({
      title: {
        text: this.title + "趋势",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 334, 390, 330, 220, 110, 520, 20, 134, 30, 430],
        },
      ],
    });
  },
  computed: {
    //计算属性 标题
    title() {
      return this.activeName == "sale" ? "销售额" : "访问量";
    },
  },
  //监听属性
  watch: {
    title() {
      //重新修改图表配置的数据
      this.myCharts.setOption({
        title: {
          text: this.title + "趋势",
        },
      });
    },
  },
  methods: {
    setDay() {
      const day = dayjs().format("YYYY-MM-DD");
      this.date = [day, day];
    },
    //本周
    setWeek() {
      const start = dayjs().day(1).format("YYYY-MM-DD");
      const end = dayjs().day(7).format("YYYY-MM-DD");
      this.date = [start, end];
    },
    //本月
    setMonth() {
      const start = dayjs().startOf("month").format("YYYY-MM-DD");
      const end = dayjs().endOf("month").format("YYYY-MM-DD");
      this.date = [start, end];
    },
    //本年
    setYear() {
      const start = dayjs().startOf("year").format("YYYY-MM-DD");
      const end = dayjs().endOf("year").format("YYYY-MM-DD");
      this.date = [start, end];
    },
  },
};
</script>

<style scoped>
.clearfix {
  display: flex;
  justify-content: space-between;
  position: relative;
 
}
.tab {
  width: 100%;
}
.right {
  position: absolute;
  right: 0px;
}
.date {
  width: 260px;
  margin: 0px 10px;
}
.right span {
  margin: 0px 10px;
}
.charts {
  width: 100%;
  height: 300px;
}
/* .rank {
  padding: 0px;
  margin: 0px;
} */
.h3 {
  margin: 5px;
}
ul {
  list-style: none;
  width: 100%;
  height: 300px;
  padding: 0px;
}
ul li {
  height: 10%;
  margin: 10px 0px;
}
.name {
  padding: 10px;
}
.rvalue {
  float: right;
}
.el-card__header{
  border-bottom:none;
}

</style>