<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center" style="display:flex;justify-content:center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColor" />
            <div class="title">
              <span class="title-text">数据溯源可视化平台</span>
              <dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']" />
            </div>
            <dv-decoration-8 class="dv-dec-8" :reverse="true" :color="decorationColor" />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2" style="display:flex;justify-content:space-between">
          <div class="d-flex aside-width" style="display:flex;justify-content:space-between">
            <div class="react-left ml-4" :class="{'bg-color-blue':page===1}" @click="click_all">
              <dv-border-box-2 :color="decorationColor" class="text fw-b"
                id="click_all">全局概览</dv-border-box-2>
            </div>
            <div class="react-left ml-3" :class="{'bg-color-blue':page===2}" @click="click_guiji">
              <dv-border-box-2 :color="decorationColor" class="text"
                id="click_guiji">归集任务分析</dv-border-box-2>
            </div>
            <div class="react-left ml-3" :class="{'bg-color-blue':page===3}"
              @click="click_gongxiang">
              <dv-border-box-2 :color="decorationColor" class="text"
                id="click_gongxiang">共享任务分析</dv-border-box-2>
            </div>
          </div>
          <div class="d-flex aside-width" style="display:flex;">
            <!-- <div class="react-right mr-3 bg-color-black">
              <dv-border-box-2 :color="decorationColor" class="text"> 异常告警</dv-border-box-2>
            </div> -->
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text">{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span>
            </div>
          </div>
        </div>

        <div class="body-box" v-if="page===1">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-12 style="height:370px;">
                <centerLeft1 :item="item" />
              </dv-border-box-12>
              <div class="percent">
                <div class="item">
                  <span style="line-height:50px;">今日任务完成率</span>
                  <!-- dv-water-pond-level -->
                  <dv-water-level-pond class="dv-wa-le-po" :config="water"
                    style="height:140px;width:140px;margin-left:20px;" />
                </div>
                <div class="item bg-color-black">
                  <span style="line-height:50px;">今日任务成功率</span>
                  <dv-decoration-9
                    style="width:140px;height:140px;font-family:titleFont;font-size:20px;margin-left:20px;">{{item.warnPercent}}%</dv-decoration-9>
                </div>
              </div>
            </div>
            <dv-border-box-13 style="height:560px;margin-left:20px;padding:10px;">
              <mainFlowCharts />
            </dv-border-box-13>
            <!-- <div class="up">
              <dv-border-box-10 class="bg-color-black item" v-for="item in titleItem"
                :key="item.title">
                <div class="small-text">{{ item.title }}</div>
                <div class="number">{{item.number}}</div>
              </dv-border-box-10>
            </div> -->
          </div>

          <!-- 第四行数据 -->
          <div class="bottom-box">
            <dv-border-box-13 style="height:360px;">
              <Map />
            </dv-border-box-13>
            <div>
              <center :item="item" />
            </div>
            <div>
              <dv-border-box-13 style="height:360px;">
                <centerRight1 :col="col" />
              </dv-border-box-13>
            </div>
          </div>
        </div>

        <div v-if="page===2" style="height:100%">
          <guiji :itemm="itemm"></guiji>
        </div>
        <div v-if="page===3" style="height:100%">
          <gongxiang :itemm2="itemm2"></gongxiang>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from '../utils/drawMixin';
import { formatTime } from '../utils/index.js';
import centerLeft1 from './bigscreen/centerLeft1.vue';
import centerRight1 from './bigscreen/centerRight1.vue';
import center from './bigscreen/center.vue';
import bottom from './bigscreen/bottom.vue';
import mainFlowCharts from './bigscreen/mainFlowCharts.vue';
import Guiji from '../components/graph6/guiji.vue';
import Gongxiang from '../components/graph6/gongxiang.vue';
import CenterChart from '../components/echarts/center/centerChartRate';
import Map from './map.vue';
export default {
  mixins: [drawMixin],
  data() {
    return {
      page: 1,
      typeH: 'RL',
      typeh: 'LR',
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      decorationColor: ['#568aea', '#568aea'],
      item: {},
      col: [],
      runPercent: 100,
      itemm: {},
      itemm2: {},
      water: {
        data: [60, 100],
        shape: 'round',
        formatter: '{value}%',
        waveNum: 3,
        colors: ['#035F8A', '#038ABE'],
      },
      // 通过率和达标率的组件复用数据
      rate: [
        {
          id: 'centerRate1',
          tips: 60,
          colorData: {
            textStyle: '#3fc0fb',
            series: {
              color: ['#00bcd44a', 'transparent'],
              dataColor: {
                normal: '#03a9f4',
                shadowColor: '#97e2f5',
              },
            },
          },
        },
        {
          id: 'centerRate2',
          tips: 98,
          colorData: {
            textStyle: '#67e0e3',
            series: {
              color: ['#faf3a378', 'transparent'],
              dataColor: {
                normal: '#ff9800',
                shadowColor: '#fcebad',
              },
            },
          },
        },
      ],
    };
  },
  components: {
    centerLeft1,
    centerRight1,
    center,
    bottom,
    mainFlowCharts,
    // MainTree,
    Guiji,
    CenterChart,
    Map,
    Gongxiang,
  },
  mounted() {
    this.timeFn();
    this.cancelLoading();
    document.body.style.backgroundColor = '#041835'; // 设置为灰色
    this.axios.get(`${this.$apiBaseUrl}/api/getItem`).then((response) => {
      this.item = response.data;
    });
    this.updateWaterData();
    this.axios.get(`${this.$apiBaseUrl}/api/calSizeAll`).then((response) => {
      this.col = response.data;
    });
    this.axios.get(`${this.$apiBaseUrl}/api/getItemGuiJi`).then((response) => {
      this.itemm = response.data;
    });
    this.axios
      .get(`${this.$apiBaseUrl}/api/getItemGongXiang`)
      .then((response) => {
        this.itemm2 = response.data;
      });
  },
  beforeDestroy() {
    clearInterval(this.timing);
  },
  watch: {
    item: {
      handler(newVal) {
        this.updateWaterData();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    updateWaterData() {
      this.water.data = [60, this.item.runPercent];
    },
    click_all() {
      this.page = 1;
    },
    click_guiji() {
      this.page = 2;
    },
    click_gongxiang() {
      this.page = 3;
      console.log(this.page);
    },
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss');
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd');
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
};
</script>
<style>
.dv-water-pond-level text {
  font-size: 20px;
  font-family: titleFont;
  fill: #fff;
  stroke: none;
  color: #fff;
}
</style>
<style lang="scss" scoped>
#index {
  color: #d3d6dd;
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  overflow: hidden;
  .bg {
    padding: 16px 16px 0 16px;
    //background-color: ;
    background-image: url('../assets/bg.png');
    background-size: cover;
    background-position: center center;
    height: 100%;
  }
  .host-body {
    .dv-dec-10,
    .dv-dec-10-s {
      width: 33.3%;
      height: 5px;
    }
    .dv-dec-10-s {
      transform: rotateY(180deg);
    }
    .dv-dec-8 {
      width: 200px;
      height: 40px;
    }
    .title {
      position: relative;
      width: 550px;
      text-align: center;
      background-size: cover;
      background-repeat: no-repeat;

      .title-text {
        font-family: titleFont;
        font-size: 30px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        //text-shadow: 0 0 20px #fff;
      }

      .dv-dec-6 {
        position: absolute;
        bottom: -30px;
        left: 50%;
        width: 250px;
        height: 8px;
        transform: translate(-50%);
      }
    }

    // 第二行
    .aside-width {
      width: 40%;
    }
    .react-r-s,
    .react-l-s {
      //background-color: black;
    }

    // 平行四边形
    .react-right {
      &.react-l-s {
        text-align: right;
        width: 500px;
      }
      font-family: titleFont;
      font-size: 20px;
      width: 300px;
      margin-top: 10px;
      line-height: 60px;
      text-align: center;
      //transform: skewX(-45deg);
      //text-shadow: 0 0 20px #fff;

      .react-after {
        position: absolute;
        right: -25px;
        top: 0;
        height: 60px;
        width: 90px;
        //background-color: black;
        transform: skewX(45deg);
      }
    }
    .react-left {
      &.react-l-s {
        width: 500px;
        text-align: left;
      }
      font-size: 18px;
      width: 300px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      //text-shadow: 0 0 20px #fff;
      transform: skewX(45deg);
      margin-top: 10px;
      //background-color: #00113a;

      .react-left {
        position: absolute;
        left: -25px;
        top: 0;
        height: 60px;
        width: 60px;
        //background-color: black;
        transform: skewX(-45deg);
      }

      .text {
        font-family: titleFont;
        font-size: 20px;
        display: inline-block;
        transform: skewX(-45deg);
        width: 200px;
        height: 60px;
      }
    }
    .body-box {
      margin-top: 16px;
      display: flex;
      flex-direction: column;

      //下方区域的布局
      .content-box {
        height: 560px;
        display: grid;
        grid-template-columns: 2fr 8fr;
      }

      // 底部数据
      .bottom-box {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 2fr 3fr 3fr;
        z-index: 1;
        flex: 1;
      }
    }
  }
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .small-text {
      font-family: smallFont;
      margin-top: 16px;
      //text-shadow: 0 0 15px #fff;
    }
    .item {
      border-radius: 6px;
      margin-top: 8px;
      width: 100%;
      height: 80px;
      .dv-dig-flop {
        width: 150px;
        height: 25px;
      }
    }
  }
  .percent {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 50%;
      height: 100px;
      text-align: center;
      span {
        font-size: 16px;
        padding: 10px;
      }
      .dv-wa-le-po {
        height: 100px;
      }
    }
  }
  .dv-water-pond-level text {
    fill: none;
    stroke: none;
  }
  .dv-water-pond-level {
    max-width: 90%;
    width: 200px;
    height: 200px;
    border: 10px solid #19c3eb;
    border-radius: 50%;
    stroke: none;
    ellipse {
      stroke: transparent !important;
    }

    .text {
      font-size: 40px !important;
    }
    text {
      font-size: 40px !important;
    }
  }
  @font-face {
    font-family: electronicFont;
    src: url(../assets/font/DS-DIGIT-4.ttf);
  }
  @font-face {
    font-family: titleFont;
    src: url(../assets/font/DS-DIGIT.ttf);
  }
  @font-face {
    font-family: smallFont;
    src: url(../assets/font/DS-SMALL.ttf);
  }
  .number {
    font-size: 30px;
    color: #0e94ea;
    font-family: electronicFont;
    font-weight: bold;
    //text-shadow: 0 0 10px #0e94eaed, 0 0 40px #0e94ea;
  }
}
</style>
