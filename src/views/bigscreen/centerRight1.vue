<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div style="text-align:left;font-weight:bold;font-size:18px;">数据量排行</div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="configs" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    col: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      configs: {
        header: ['调度任务', '任务类型', '所属委办', '数据量'],
        data: [],
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: '#021948', //表头
        oddRowBGC: '#06255E', //奇数行
        evenRowBGC: '#021948',
        index: true,
        columnWidth: [50, 200],
        align: ['center'],
      },
      ddata: [],
    };
  },
  methods: {
    updateWaterData() {
      if (this.col != null) {
        this.col.sort((a, b) => parseInt(b.recordCnt) - parseInt(a.recordCnt));
        this.configs.data = this.col.map((item) => {
          var typp = '';
          if (item.prgType === '228') {
            typp = '推送任务';
          } else if (item.prgType === '23') {
            typp = '抽取任务';
          } else {
            typp = '融合任务';
          }

          // 将 typp 存储到 item 对象中
          item.taskType = typp;

          return [
            item.taskName, // 调度任务
            item.taskType, // 任务类型
            item.weiban, // 所属委办
            '⬆' + item.recordCnt + '条', // 数据量
          ];
        });
      }
    },
  },
  mounted() {
    console.log(this.col);
    this.updateWaterData();
  },
};
</script>

<style lang="scss" scoped>
$box-height: 310px;
$box-width: 100%;
#centerRight1 {
  padding: 16px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    border-radius: 10px;
    width: 100%;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-scr-board {
      width: 600px;
      height: 290px;
    }
  }
}
</style>
