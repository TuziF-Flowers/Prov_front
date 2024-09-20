<template>
  <div id="centerLeft1">
    <div class="bg-color-black">
      <div style="text-align:left;font-weight:bold;font-size:18px;">各类型任务分布情况</div>
      <!-- <dv-decoration-3 class="dv-dec-3" /> -->
      <div class="d-flex jc-center" style="display:flex;justify-content:center">
        <Chart :cdata="cdata" />
      </div>
      <!-- 4个主要的数据 -->
      <div class="bottom-data">
        <div class="item-box mt-2" v-for="(item, index) in numberData" :key="index">
          <div class="d-flex" style="display:flex;margin-left:30px;">
            <dv-digital-flop class="dv-digital-flop" :config="item.number" />
          </div>
          <p class="text" style="text-align: center;">
            {{ item.text }}
            <span class="colorYellow">(个)</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from '../../components/echarts/centerLeft/centerLeft1Chart/chart.vue';
import CenterLeft1Chart from '../../components/echarts/centerLeft/centerLeft1Chart';
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      cdata: {
        xData: ['抽取任务', '融合任务', '推送任务'],
        seriesData: [
          { value: this.item.guiJiCnt, name: '抽取任务' },
          { value: this.item.rongHe, name: '融合任务' },
          { value: this.item.tuiSong, name: '推送任务' },
        ],
      },
      numberData: [
        {
          number: {
            number: [this.item.guiJiCnt],
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24,
              fill: '#038ABE',
            },
          },
          text: '完成归集数量',
        },
        {
          number: {
            number: [this.item.alreadyRunCnt],
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24,
              fill: '#038ABE',
            },
          },
          text: '今日任务总量',
        },
        {
          number: {
            number: [this.item.warnCnt],
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24,
              fill: '#038ABE',
            },
          },
          text: '异常数量',
        },
        {
          number: {
            number: [this.item.gongXiangCnt],
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24,
              fill: '#038ABE',
            },
          },
          text: '完成共享数量',
        },
      ],
    };
  },
  components: {
    CenterLeft1Chart,
    Chart,
  },

  Chartmounted() {
    this.changeTiming();
  },
  methods: {
    changeTiming() {
      setInterval(() => {
        // this.changeNumber();
      }, 3000);
    },
    changeNumber() {
      this.numberData.forEach((item, index) => {
        item.number.number[0] += ++index;
        item.number = { ...item.number };
      });
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
$box-width: 400px;
$box-height: 300px;
#centerLeft1 {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }

  .bottom-data {
    .item-box {
      & > div {
        padding-right: 5px;
      }
      font-size: 14px;
      float: right;
      position: relative;
      width: 50%;
      color: #d3d6dd;
      .dv-digital-flop {
        width: 120px;
        height: 30px;
        color: #ffc107 !important;
      }
      // 金币
      .coin {
        position: relative;
        top: 6px;
        font-size: 20px;
        color: #ffc107;
      }
      .colorYellow {
        color: yellowgreen;
        //color: #038ABE;
      }
      p {
        text-align: center;
      }
    }
  }
}
</style>
