<template>
  <div style="margin:10px;height:100%;">
    <!-- <dv-decoration-6 style="width:200px;height:20px;margin-left:50px" /> -->
    <div style="text-align:left;font-weight:bold;font-size:18px;">数据溯源图</div>
    <div id="container"></div>
    <main-tree v-if="mockData" :graphData="mockData" :type="typeH"></main-tree>
  </div>
</template>

<script>
// import G6 from '@antv/g6';
import mainTree from '../../components/graph6/mainTree.vue';
export default {
  components: { mainTree },
  data() {
    return {
      typeH: 'H',
      mockData: null,
    };
  },
  mounted() {
    // var apiBaseUrl = this.$apiBaseUrl;
    this.axios
      .get(`${this.$apiBaseUrl}/api/bigscreen`)
      .then((response) => {
        this.mockData = response.data;
      })
      .catch((error) => {
        this.error = error;
      });
  },
  methods: {},
};
</script>
