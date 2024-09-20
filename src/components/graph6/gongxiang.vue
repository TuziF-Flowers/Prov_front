<template>
  <div id="guiji">
    <div class="upper-box">
      <div class="left">
        <div class="first">
          <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
            <p>{{ item.title }}</p>
            <div style="display:flex;justify-content:center">
              <dv-digital-flop class="dv-dig-flop ml-1 mt-2 pl-3" :config="item.number" />
            </div>
          </div>
        </div>
        <div class="second">
          <dv-border-box-12 class="bg-color-black" style="height:700px">
            <div class="grapp" style="margin-left:90px;height:700px">
              <div id="container">
                <mainTree v-if="mockData2" :graphData="mockData2" :type="typeH">
                </mainTree>
              </div>
            </div>
          </dv-border-box-12>
        </div>
      </div>
      <div class="right">
        <div class="first">
          <dv-border-box-13>
            <!-- <CenterLeft2 /> -->
            <Map />
          </dv-border-box-13>
        </div>
        <div class="second">
          <dv-border-box-13 style="height:360px;width:100%">
            <CenterRight1 v-if="col.length>0" :col="col" />
          </dv-border-box-13>
        </div>
        <div class="third">
          <div class="item bg-color-black">
            <span>今日任务完成率</span>
            <CenterChart :id="rate[0].id" :tips="rate[0].tips" :colorObj="rate[0].colorData" />
          </div>
          <div class="item bg-color-black">
            <span>今日任务成功率</span>
            <CenterChart :id="rate[1].id" :tips="rate[1].tips" :colorObj="rate[1].colorData" />
          </div>
          <div class="water">
            <dv-water-level-pond class="dv-wa-le-po" :config="water" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CenterRight1 from '../../views/bigscreen/centerRight1.vue';
import mainTree from './mainTree.vue';
import CenterChart from '../../components/echarts/center/centerChartRate';
// import CenterLeft2 from '../../views/centerLeft2.vue';
import Map from '../../views/map.vue';
export default {
  components: { mainTree, CenterRight1, CenterChart, Map },
  props: {
    itemm2: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      water: {
        data: [60, 100],
        shape: 'roundRect',
        formatter: '{value}%',
        waveNum: 3,
      },
      // 通过率和达标率的组件复用数据
      rate: [
        {
          id: 'centerRate1',
          tips: 100,
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
          tips: 100,
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
      titleItem: [
        {
          title: '今日共享任务数',
          number: {
            number: [this.itemm2.gongXiangCnt],
            textAlign: 'center',
            content: '{nt}',
            style: {
              fontSize: 26,
              fill: '#3fc0fb',
              fontWeight: 600,
            },
          },
        },
        {
          title: '今日成功执行任务数',
          number: {
            number: [this.itemm2.alreadyRunCnt],
            textAlign: 'center',
            content: '{nt}',
            style: {
              fontSize: 26,
              fill: '#3fc0fb',
              fontWeight: 600,
            },
          },
        },
        {
          title: '今日待执行任务数',
          number: {
            number: [this.itemm2.waitRunCnt],
            textAlign: 'center',
            content: '{nt}',
            style: {
              fontSize: 26,
              fill: '#3fc0fb',
              fontWeight: 600,
            },
          },
        },
        {
          title: '今日异常推送次数',
          number: {
            number: [this.itemm2.warnCnt],
            textAlign: 'center',
            content: '{nt}',
            style: {
              fontSize: 26,
              fill: '#3fc0fb',
              fontWeight: 600,
            },
          },
        },
        {
          title: '涉及委办局数量',
          number: {
            number: [this.itemm2.weiBanCnt],
            textAlign: 'center',
            content: '{nt}',
            style: {
              fontSize: 26,
              fill: '#3fc0fb',
              fontWeight: 600,
            },
          },
        },
        {
          title: '今日推送数据量',
          number: {
            number: [this.itemm2.runRecord],
            textAlign: 'center',
            content: '{nt}',
            style: {
              fontSize: 26,
              fill: '#3fc0fb',
              fontWeight: 600,
            },
          },
        },
      ],
      typeH: 'LR',
      mockData2: null,
      col: [],
    };
  },
  mounted() {
    this.axios
      .get(`${this.$apiBaseUrl}/api/calSizeGongXiang`)
      .then((response) => {
        this.col = response.data;
      });
    this.axios
      .get(`${this.$apiBaseUrl}/api/bigscreen-gongxiang`)
      .then((response) => {
        this.mockData2 = response.data;
      })
      .catch((error) => {
        this.error = error;
      });
  },
};
</script>
<style scoped lang="scss">
#guiji {
  display: flex;
  flex-direction: column;

  .upper-box {
    display: grid;
    grid-template-columns: 5fr 3fr;
    .left {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 20px;
      align-items: center;
      .first {
        width: 100%;
        height: 20%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 20px;
        .item {
          border-radius: 6px;
          text-align: center;
          padding-top: 8px;
          margin-top: 8px;
          width: 32%;
          height: 90px;
          .dv-dig-flop {
            width: 150px;
            text-align: center;
            height: 30px;
          }
        }
      }
      .second {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        .grapp {
          height: 100%;
        }
      }
    }
    .right {
      .first {
        height: 45%;
      }
      .second {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .third {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 150px;
        justify-content: center;
        align-items: center;
        text-align: center;
        .item {
          flex: 1;
          display: flex;
          flex-direction: column;
          height: 150px;
          width: 100%;
          align-items: center;
          justify-content: center;
          span {
            width: 100%;
            margin-top: 8px;
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .water {
          width: 300px;
        }
      }
    }
  }
}
</style>