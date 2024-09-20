<template>
  <div class="main">
    <!-- 用户端-->
    <div class="user-block">
      <div class="user-style">
        <div class="user-content" v-for="(item, index) in data_json" :key="index">
          <svg @click="handleNodeClick('user')" width="40" height="40">
            <image :xlink:href="require(`@/assets/` + `${getUserIcon(item.status)}`)" width="100%"
              height="100%" />
          </svg>
          <div class="user-text" style="width=80px">{{ item.user }}</div>
          <div class="user-text" style="width=80px">{{item.time}}</div>
        </div>
      </div>
      <div class="arrow-block">
        <svg class="arrow-line">
          <g v-for="(item, index) in data_json" :key="index">
            <line x1="0%" :y1="getArrowBeginY(index, data_json.length)" x2="100%"
              :y2="getArrowBeginY(index, data_json.length)" stroke="black"
              marker-end="url(#arrowhead)" />
            <circle v-if="showDot4 && item.status !==1" :cx="dotPosition + '%'"
              :cy="getArrowBeginY(index, data_json.length)" r="5" fill="#42b983">
              <animate attributeName="cx" values="0%;80%" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9.25" refY="5"
              orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="black" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
    <!-- ip -->
    <div class="ip-block">
      <div class="user-style">
        <div class="user-content" v-for="(item, index) in data_json" :key="index">
          <svg @click="handleNodeClick('user')" width="40" height="40">
            <image :xlink:href="require(`@/assets/` + `${getIPIcon(item.status)}`)" width="100%"
              height="100%" />
          </svg>
          <div class="user-text">{{ item.user_ip }}</div>
        </div>
      </div>
      <div class="arrow-block">
        <svg class="arrow-line">
          <g v-for="(item, index) in data_json" :key="index">
            <line x1="0%" :y1="getArrowBeginY(index, data_json.length)" x2="100%"
              :y2="getArrowEndY(index, data_json.length)" stroke="black"
              marker-end="url(#arrowhead)" />
            <circle v-if="showDot && item.status !== 1" r="5" fill="#42b983">
              <animateMotion dur="2s" repeatCount="indefinite">
                <mpath :href="'#line-path-user-' + index"></mpath>
              </animateMotion>
            </circle>
            <path :id="'line-path-user-' + index"
              :d="generateUserLinePath(index, data_json.length)" />
          </g>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9.25" refY="5"
              orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="black" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
    <!-- 数据库端-->
    <div class="database-block">
      <div class="database-style">
        <svg @click="handleNodeClick('database')" width="150" height="150">
          <image :xlink:href="require(`@/assets/` + `${getDatabaseIcon()}`)" width="150"
            height="150" />
        </svg>
        <div>database:text</div>
      </div>
    </div>
    <!-- 查询部分-->
    <div class="sql-block">
      <div class="arrow-block">
        <svg class="arrow-line">
          <g v-for="(item, index) in data_json" :key="index">
            <line x1="0%" :y1="getArrowEndY(index, data_json.length)" x2="100%"
              :y2="getArrowBeginY(index, data_json.length)" stroke="black"
              marker-end="url(#arrowhead)" />
            <circle v-if="showDot2 && item.status !== 1 && item.status !== 3" r="5" fill="#42b983">
              <animateMotion dur="2s" repeatCount="indefinite">
                <mpath :href="'#line-path-' + index"></mpath>
              </animateMotion>
            </circle>
            <path :id="'line-path-' + index" :d="generateLinePath(index, data_json.length)" />
          </g>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9.25" refY="5"
              orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="black" />
            </marker>
          </defs>
        </svg>
      </div>
      <div class="sql-content">
        <div class="sql-style" v-for="(item, index) in data_json" :key="index"
          :style="{ 'border-color': (item.status === 1 || item.status == 3) ? '#bfbfbf' : '#bfbfbf' }">
          <svg @click="handleNodeClick('sql')" width="40" height="40">
            <image :xlink:href="require(`@/assets/` + `${getSqlIcon(item.status)}`)" width="100%"
              height="100%" />
          </svg>
          <div class="main-text" @mouseover="showDetail_sql(index, $event)"
            @mouseout="hideDetail_sql">
            <div class="text-little-box">
              <div class="text-tip">对象：{{ item.reader.table }}</div>
              <div class="text-tip">操作: {{ item.reader.command.option }}</div>
            </div>
            <div class="text-tip">完整指令：</div>
            <div class="text-tip">{{ item.reader.command.argument }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结果部分-->
    <div class="result-block">
      <div class="arrow-block">
        <svg class="arrow-line">
          <g v-for="(item, index) in data_json" :key="index">
            <line x1="0%" :y1="getArrowBeginY(index, data_json.length)" x2="100%"
              :y2="getArrowBeginY(index, data_json.length)" stroke="black"
              marker-end="url(#arrowhead)" />
            <circle v-if="showDot3 && item.status === 0" :cx="dotPosition + '%'"
              :cy="getArrowBeginY(index, data_json.length)" r="5" fill="#42b983">
              <animate attributeName="cx" values="0%;80%" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9.25" refY="5"
              orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="black" />
            </marker>
          </defs>
        </svg>
      </div>
      <div class="result-content2">
        <div class="result-style" v-for="(item, index) in data_json" :key="index"
          :style="{ 'border-color': (item.status === 1 || item.status == 3) ? '#bfbfbf' : '#bfbfbf' }">
          <svg @click="handleNodeClick('result')" width="40" height="40">
            <image :xlink:href="require(`@/assets/` + `${getResultIcon(item.status)}`)" width="100%"
              height="100%" />
          </svg>
          <div class="main-text" @mouseover="showDetail_result(index, $event)"
            @mouseout="hideDetail_sql">
            <div class="text-little-box">
              <div>id:{{ item.reader.results.result_id }}</div>
              <button type="primary">查看日志</button>
            </div>
            <div class="text-little-box">
              <div class="text-tip">大小：{{ item.reader.results.size }}</div>
              <div class="text-tip">表项：{{ item.reader.results.entryCnt }}</div>
            </div>
            <div class="text-tip">具体信息：{{ item.reader.results.message }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="showPopup" class="popup" :style="{ top: popupTop + 'px', left: popupLeft + 'px' }">
      {{ popupContent }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReaderPage',
  data() {
    return {
      mainSize: 0,
      databaseStatus: 0,
      showDot: false,
      showDot2: false,
      showDot3: false,
      showDot4: false,
      showPopup: false,
      popupContent: '',
      activeIndex: null,
      dotPosition: 0,
      data_json: [
        {
          status: 0,
          user: 'cyx',
          time: '240120 21:17:28',
          user_ip: '192.168.137.2',
          reader: {
            table: 'student',
            command: {
              status: 0,
              option: 'select',
              argument: 'select * from student',
            },
            results: {
              status: 0,
              result_id: '12345678',
              message: 'successfully，数据连通',
              size: '51bytes',
              entryCnt: '3',
            },
          },
        },
        {
          status: 0,
          user: 'cyx',
          time: '240120 21:17:28',
          user_ip: '192.168.137.2',
          reader: {
            table: 'student',
            command: {
              status: 0,
              option: 'select',
              argument: 'select * from student',
            },
            results: {
              status: 0,
              result_id: '12345678',
              message: 'successfully，数据连通',
              size: '51bytes',
              entryCnt: '3',
            },
          },
        },
        {
          status: 0,
          user: 'cyx',
          time: '240120 21:17:28',
          user_ip: '192.168.137.2',
          reader: {
            table: 'student',
            command: {
              status: 0,
              option: 'select',
              argument: 'select * from student',
            },
            results: {
              status: 0,
              result_id: '12345678',
              message: 'successfully，数据连通',
              size: '51bytes',
              entryCnt: '3',
            },
          },
        },
      ],
      popupTop: 0,
      popupLeft: 0,
    };
  },
  mounted() {
    this.showDotsSequentially();
  },
  methods: {
    showDotsSequentially() {
      this.dotCycle();
      setInterval(() => {
        this.dotCycle();
      }, 8000);
    },
    dotCycle() {
      this.showDot4 = true;
      this.showDot = false;
      this.showDot2 = false;
      this.showDot3 = false;
      setTimeout(() => {
        // showDot: false,showDot2:true
        this.showDot4 = false;
        this.showDot = true;
      }, 2000);
      setTimeout(() => {
        // showDot: false,showDot2:true
        this.showDot = false;
        this.showDot2 = true;
      }, 4000);
      setTimeout(() => {
        this.showDot2 = false;
        this.showDot3 = true;
      }, 6000);
    },
    showDetail_sql(index, event) {
      const item = this.data_json[index];
      if (item.status === 2) {
        this.popupContent =
          '用户' + item.user + '连接数据库成功，正在执行指令中';
      } else if (item.status === 0 || item.status === 4 || item.status === 5) {
        this.popupContent =
          '用户' +
          item.user +
          '对数据表' +
          item.reader.table +
          '执行了' +
          item.reader.command.option +
          '操作,具体指令为' +
          item.reader.command.argument;
      } else {
        this.popupContent =
          '用户' + item.user + '操作时出现错误,未执行sql查询，具体信息见结果';
      }
      this.activeIndex = index;
      this.popupTop = event.clientY + window.scrollY; // 获取鼠标纵坐标，并加上滚动的距离
      this.popupLeft = event.clientX + window.scrollX; // 获取鼠标横坐标，并加上滚动的距离
      this.$data.timeoutId = setTimeout(() => {
        this.showPopup = true;
      }, 300);
    },
    showDetail_result(index, event) {
      const item = this.data_json[index];
      if (item.status === 1 || item.status === 3 || item.status === 5) {
        this.popupContent =
          '用户' +
          item.user +
          '此次操作未完成，完整信息：' +
          item.reader.results.message;
      } else if (item.status === 0) {
        this.popupContent =
          '用户' +
          item.user +
          '查询成功，返回结果包大小为' +
          item.reader.results.size +
          '，包含数据表项' +
          item.reader.results.entryCnt +
          '。更多信息：' +
          item.reader.results.message;
      } else {
        this.popupContent =
          '未获取到结果，请检查用户' +
          item.user +
          '的操作是否完成，完整信息：' +
          item.reader.results.message;
      }
      this.activeIndex = index;
      this.popupTop = event.clientY + window.scrollY; // 获取鼠标纵坐标，并加上滚动的距离
      this.popupLeft = event.clientX + window.scrollX; // 获取鼠标横坐标，并加上滚动的距离
      this.$data.timeoutId = setTimeout(() => {
        this.showPopup = true;
      }, 300);
    },
    hideDetail_sql() {
      clearTimeout(this.$data.timeoutId);
      this.showPopup = false;
      this.popupContent = '';
      this.activeIndex = null;
      this.popupLeft = 0;
      this.popupLeft = 0;
    },
    handleNodeClick(nodeType) {},
    // status:0 成功 1-用户 2、3-sql 4 5-res 6-全灰
    getUserIcon(status) {
      if (status === 6) return 'user.svg';
      if (status === 1) {
        return 'user-error.svg';
      } else return 'user-active.svg';
    },
    getIPIcon(status) {
      if (status === 6) return 'desktop.svg';
      if (status === 1) {
        return 'desktop-error.svg';
      } else return 'desktop-active.svg';
    },
    getDatabaseIcon() {
      if (this.databaseStatus === 0) {
        return 'database-active.svg';
      } else return 'database.svg';
    },
    getSqlIcon(status) {
      if (status === 2 || status === 6) return 'sql.svg';
      if (status === 4 || status === 0 || status === 5) {
        return 'sql-active.svg';
      }
      return 'sql-error.svg';
    },
    getResultIcon(status) {
      if (status === 0) return 'result-active.svg';
      if (status === 5 || status === 3 || status === 1) {
        return 'result-error.svg';
      }
      return 'result.svg';
    },
    generateLinePath(index, totalItems) {
      const startY = this.getArrowEndY(index, totalItems);
      const endY = this.getArrowBeginY(index, totalItems);
      return 'M 0,' + startY + 'L 60,' + endY;
    },
    generateUserLinePath(index, totalItems) {
      const endY = this.getArrowEndY(index, totalItems);
      const startY = this.getArrowBeginY(index, totalItems);
      return 'M 0,' + startY + 'L 60,' + endY;
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
.main {
  display: flex;
  margin-left: 100px;
}
.user-block {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.ip-block {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.user-style {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.user-content {
  width: 60px;
  display: flex;
  height: 90px;
  margin-bottom: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.arrow-block {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.arrow-line {
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.database-block {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.sql-block {
  flex: 3;
  display: flex;
  flex-direction: row;
}

.result-block {
  flex: 3;
  display: flex;
  flex-direction: row;
}

.user-text {
  display: flex;
  width: 120px;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
}

.main-text {
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 150px;
  height: 60px;
  margin-left: 5px;
  flex: 1;
}

.text-little-box {
  display: flex;
  flex-direction: row;
}

.text-tip {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: left;
  margin-top: 1px;
}

.database-style {
  object-fit: fill;
}

.sql-style {
  width: 240px;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  border: 2px solid;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  padding-right: 0px;
}

.sql-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.result-content2 {
  /*flex: 2;*/
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-style {
  width: 280px;
  height: 90px;
  display: flex;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  padding-right: 0px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}

.option-block {
  flex: 1;
  width: 100%;
}

.option-style {
  height: 90px;
  margin-bottom: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  /* 使用 rgba 设置深色背景和透明度 */
  color: #fff;
  /* 设置字体颜色为白色 */
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  max-width: 200px;
  /* 设置最大宽度 */
  width: auto;
  /* 设置宽度自适应内容 */
  word-wrap: break-word;
  /* 自动换行 */
}
</style>