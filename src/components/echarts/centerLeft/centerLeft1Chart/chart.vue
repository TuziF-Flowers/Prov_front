<template>
  <div>
    <Echart :options="options" id="centerLeft1" height="180px" width="400px"></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart';
export default {
  data() {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          color: [
            '#e7bcf3',
            '#37a2da',
            '#9fe6b8',
            '#8378ea',
            '#32c5e9',
            '#fb7293',
            '#ffdb5c',
            '#ff9f7f',
          ],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          toolbox: {
            show: true,
          },
          calculable: true,
          legend: {
            orient: 'horizontal',
            icon: 'circle',
            bottom: 0,
            x: 'center',
            data: newData.xData,
            textStyle: {
              color: '#fff',
            },
          },
          series: [
            {
              name: '通过率统计',
              type: 'pie',
              radius: [10, 50],
              roseType: 'area',
              center: ['50%', '40%'],
              data: newData.seriesData,
            },
          ],
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style scoped>
</style>