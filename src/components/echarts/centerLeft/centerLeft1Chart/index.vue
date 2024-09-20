<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
  data() {
    return {
      cdata: {
        xData: ['抽取任务', '融合任务', '推送任务'],
        seriesData: [
          { value: 1085, name: '抽取任务' },
          { value: 515, name: '融合任务' },
          { value: 641, name: '推送任务' },
        ],
      },
    };
  },
  components: {
    Chart,
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>