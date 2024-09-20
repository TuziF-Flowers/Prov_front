<template>
  <div id="center">
    <dv-border-box13 class="down">
      <div class="ranking bg-color-black">
        <div style="text-align:left;font-weight:bold;font-size:18px;">委办局执行任务数</div>
        <dv-scroll-ranking-board class="dv-scr-rank-board mt-1" :config="ranking" style="">

        </dv-scroll-ranking-board>
        <!-- <div v-for="(item, index) in ranking.data" :key="index" class="rank-item">
          <span>{{ item.name }}: {{ item.value }}{{ ranking.unit }}</span>
          <span class="comment">{{ item.Comment }}</span>
        </div> -->
        <!-- <dv-capsule-chart :config="ranking" style="width:300px;height:200px" /> -->
      </div>
    </dv-border-box13>
  </div>
</template>

<script>
import CenterChart from '../../components/echarts/center/centerChartRate';
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      ranking: {
        data: [],
        carousel: 'single',
        unit: '个',
        rowNum: 7,
        waitTime: 10000,
      },
    };
  },
  components: {
    CenterChart,
  },
  mounted() {
    this.updateRankingData();
  },
  methods: {
    updateRankingData() {
      if (this.item.runWeiBan) {
        this.ranking.data = Object.keys(this.item.runWeiBan).map((key) => {
          var comment = '待完成：' + `${this.item.runWeiBan[key].wait}` + '个';
          return {
            name: `<span style="display:inline-block;width:200px;white-space: nowrap;">${key}</span><span style="display:inline-block;width:280px;white-space: nowrap;">${comment}</span>已完成： `,
            value: this.item.runWeiBan[key].already,
          };
        });
      }
    },
  },
};
</script>
<style>
.dv-scroll-ranking-board .ranking-column .inside-column {
  background-color: #038abe !important;
}

.dv-scroll-ranking-board .ranking-info .rank {
  color: #038abe !important;
}
</style>
<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  .down {
    padding: 6px 4px;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: left;
    .bg-color-black {
      border-radius: 5px;
    }
    .ranking {
      padding: 10px;
      width: 100%;
      .dv-scr-rank-board {
        height: 290px;
        margin-top: 8px;
      }
    }
    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 100px;
        span {
          margin-top: 8px;
          font-size: 14px;
          display: flex;
          justify-content: center;
        }
      }
      .water {
        width: 100%;
        .dv-wa-le-po {
          height: 90px;
        }
      }
    }
  }
}
</style>
