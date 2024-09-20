<template>
  <div>
    <div class="main-block">
      <div class="hive-block">
        <div class="arrow-block"></div>
        <div class="hive-style">
          <svg @click="handleNodeClick('result')" width="130" height="130">
            <image :xlink:href="require(`@/assets/` + `${getHiveIcon()}`)" width="100%"
              height="100%" />
          </svg>
          <div>hive:text</div>
        </div>
      </div>
      <div class="fenqu-block">
        <div class="arrow-block">
        </div>
        <div class="fenqu-content">
          <div class="fenqu-style" v-for="(item, index) in data_json" :key="index"
            :style="{ 'border-color': (item.status === 1 || item.status == 3) ? '#bfbfbf' : '#bfbfbf' }">
            <svg width="40" height="40">
              <image :xlink:href="require(`@/assets/` + `${getfenquIcon(item.status)}`)"
                width="100%" height="100%" />
            </svg>
            <div class="fenqu-text">
              <div>{{ item.hive_config.partition }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="execute-block">execute-block</div>
      <div class="result-block">result-block</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoadPage',
  data() {
    return {
      hiveStatus: 0,
      data_json: [
        {
          id: '12345678',
          request_id: '12345678',
          hive_config: {
            name: 'hive-load',
            partition: '分区1',
          },
          results: {
            status: 0,
            result_id: '5678',
            message: 'successfully，装载成功',
            size: '51bytes',
            entryCnt: '3',
          },
        },
        {
          id: '12345678',
          request_id: '12345678',
          hive_config: {
            name: 'hive-load',
            partition: '分区1',
          },
          results: {
            status: 0,
            result_id: '5678',
            message: 'successfully，装载成功',
            size: '51bytes',
            entryCnt: '3',
          },
        },
        {
          id: '12345678',
          request_id: '12345678',
          hive_config: {
            name: 'hive-load',
            partition: '分区1',
          },
          results: {
            status: 0,
            result_id: '5678',
            message: 'successfully，装载成功',
            size: '51bytes',
            entryCnt: '3',
          },
        },
      ],
    };
  },
  methods: {
    getHiveIcon() {
      if (this.hiveStatus === 0) {
        return 'hive-active.svg';
      } else return 'hive.svg';
    },
    getfenquIcon() {
      return 'fenqu-active.svg';
    },
  },
  computed: {
    getArrowBeginY: function () {
      return function (index, len) {
        // const begin = len * 80 / 2 - 10
        if (len === 1) return '90';
        return index * 100 + 45 + '';
      };
    },
    getArrowEndY: function () {
      return function (index, len) {
        const begin = 0.45 * len * 100;
        if (len === 1) return '90';
        return index * 6 + begin + '';
      };
    },
  },
};
</script>
<style scoped>
.main-block {
  display: flex;
  border: 2 px solid #bfbfbf;
  width: 100%;
  height: 100%;
  margin: 30px;
}
.hive-block {
  width: 150px;
  display: flex;
  flex-direction: row;
  height: 300px;
}
.hive-style {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.fenqu-block {
  width: 120px;
  display: flex;
  flex-direction: row;
}
.fenqu-content {
  width: 60px;
}
.fenqu-style {
  height: 90px;
  margin-bottom: 10px;
}
.execute-block {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.result-block {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.text-little-box {
  display: flex;
  flex-direction: row;
}

.text-tip {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: left;
  margin-top: 1px;
}
.fenqu-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>