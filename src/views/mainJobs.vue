<template>
  <div id="mainJobs">
    <div class="title-box">
      <a-button type="primary" onclick="window.open('/#/bigscreen')">前往可视化面板</a-button>
      <div class="title"><span class="title-detail"></span></div>
    </div>
    <div class="main-box">
      <div class="digit-box">
        <div class="a-liuxiang-box">
          <a-card :hoverable="true" class="alarm-card">
            <div class="alarm-content">
              <div class="alarm-text">累计执行
                <div class="color-text">{{item.alreadyRunCnt}}</div>
              </div>
              <a-divider type="vertical" style="height: 60px;" />
              <div class="alarm-text">累计数据量
                <div class="color-text">{{item.runRecord}}条</div>
              </div>
              <a-divider type="vertical" style="height: 60px;" />
              <div class="alarm-text">累计委办单位
                <div class="color-text">{{item.weiBanCnt}}个</div>
              </div>
            </div>
          </a-card>
        </div>

        <div class="a-liuxiang-box">
          <a-card :hoverable="true" class="alarm-card">
            <div class="alarm-content">
              <div class="alarm-text">待执行任务
                <div class="color-text">{{item.waitRunCnt}}</div>
              </div>
              <a-divider type="vertical" style="height: 60px;" />
              <div class="alarm-text">异常任务数
                <div class="color-text">{{item.warnCnt}}</div>
              </div>
              <a-divider type="vertical" style="height: 60px;" />
              <div class="alarm-text">成功率
                <div class="color-text">{{item.warnPercent}}%</div>
              </div>
            </div>
          </a-card>
        </div>
        <div class="a-liuxiang-box">
          <a-card :hoverable="true" class="alarm-card">
            <div class="alarm-content">
              <div class="alarm-text">归集任务数
                <div class="color-text">{{item.guiJiCnt}}</div>
              </div>
              <a-divider type="vertical" style="height: 60px;" />
              <div class="alarm-text">共享任务数
                <div class="color-text">{{item.gongXiangCnt}}</div>
              </div>
              <a-divider type="vertical" style="height: 60px;" />
              <div class="alarm-text">完成率
                <div class="color-text">{{item.runPercent}}%</div>
              </div>
            </div>
          </a-card>
        </div>
      </div>
      <div class="right-box">
        <a-table :columns="column" :data-source="table_data" :pagination="pagination" bordered
          rowKey="index">
          <span slot="status" slot-scope="status">
            <a-tag color="green" v-if="status === '6'">成功</a-tag>
            <a-tag color="volcano" v-else>失败</a-tag>
          </span>
          <template slot="prgType" slot-scope="prgType">
            <a-tag v-if="prgType === '227'" color="#2aa515">融合
            </a-tag>
            <a-tag v-else-if="prgType === '23'" color="#e0620d">
              抽取
            </a-tag>
            <a-tag v-else color="#a686ba">
              推送
            </a-tag>
          </template>
          <div slot="filterDropdown" slot-scope="{ column }" style="padding: 8px">
            <a-input :placeholder="`按${column.title}查找`" v-model="searchText" ref="searchInput"
              style="width: 188px; margin-bottom: 8px; display: block;"
              @pressEnter="() => handleSearch()" />
            <a-button type="primary" size="small" style="width: 80px; margin-right: 20px"
              @click="() => handleSearch()">
              查找
            </a-button>
            <a-button size="small" style="width: 80px" @click="() => handleReset()">
              重置
            </a-button>
          </div>
          <a-icon slot="filterIcon" slot-scope="filtered" type="search"
            :style="{ color: filtered ? '#108ee9' : undefined }" />
        </a-table>
      </div>
    </div>
    <div ref="mod">
      <a-modal v-model="open" title="溯源路径" width="700px" height="800px" wrap-class-name="full-modal"
        :getContainer='()=>$refs.mod' @ok="handleOk" @cancel="handleOk">
        <template #header>
          <a-button type="text" @click="handleOk">as da </a-button>
        </template>
        <div id="contain">
          <linkTree v-if="mockData" :graphData="mockData" />
        </div>
      </a-modal>
    </div>

  </div>

</template>
<script>
import { formatTime } from '../utils/index.js';
import { Modal } from 'ant-design-vue';
import Search from './Search.vue';
import linkTree from '../components/graph6/linkTree.vue';
import MainTree from '../components/graph6/mainTree.vue';
export default {
  components: { Search, Modal, linkTree, MainTree },
  data() {
    return {
      open: false,
      dateDay: null,
      searchText: null,
      dateYear: null,
      dateWeek: null,
      content: {},
      mockData: null,
      dd: [],
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      pagination: {
        pageIndex: 1,
        pageSize: 10,
        total: 0,
        pageSizeOptions: ['5', '10', '20'],
        showSizeChanger: true,
        showTotal: (total) => `共 ${total} 条数据`,
      },
      column: [
        {
          title: '',
          width: 10,
          dataIndex: 'index',
          key: 'index',
          fiexed: 'center',
        },
        {
          title: '编号',
          width: 75,
          dataIndex: 'id',
          key: 'id',
          fiexed: 'left',
        },
        {
          title: '任务名称',
          width: 140,
          dataIndex: 'taskName',
          key: 'taskName',
          fiexed: 'left',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.taskName
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
        },
        {
          title: '类型',
          width: 50,
          dataIndex: 'prgType',
          key: 'prgType',
          fiexed: 'left',
          scopedSlots: { customRender: 'prgType' },
          filters: [
            { text: '抽取', value: '23' },
            { text: '融合', value: '227' },
            { text: '推送', value: '228' },
          ],
          onFilter: (value, record) => record.prgType === value,
        },
        {
          title: '执行时间',
          width: 120,
          dataIndex: 'startTime',
          key: 'startTime',
          fiexed: 'left',
          sorter: (a, b) => {
            const aTime = new Date(a.startTime).getTime(); // 需要先转换成时间戳
            const bTime = new Date(b.startTime).getTime();
            return aTime - bTime;
          },
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: '状态',
          width: 50,
          dataIndex: 'status',
          key: 'status',
          fiexed: 'left',
          scopedSlots: { customRender: 'status' },
          filters: [
            { text: '成功', value: '6' },
            { text: '失败', value: '5' },
          ],
          onFilter: (value, record) => record.status === value,
        },
        {
          title: '耗时',
          width: 80,
          dataIndex: 'totalTime',
          key: 'totalTime',
          fiexed: 'left',
          sorter: (a, b) => {
            const aValue = parseFloat(a.totalTime.replace('s', ''));
            const bValue = parseFloat(b.totalTime.replace('s', ''));
            return aValue - bValue;
          },
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: '表名',
          width: 150,
          dataIndex: 'table',
          key: 'table',
          fiexed: 'left',
        },
        {
          title: '流量(条)',
          width: 70,
          dataIndex: 'recordCnt',
          key: 'recordCnt',
          fiexed: 'left',
          sorter: (a, b) => {
            return a.recordCnt - b.recordCnt;
          },
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: '委办单位',
          width: 80,
          dataIndex: 'weiban',
          key: 'weiban',
          fiexed: 'left',
        },
        {
          title: '设备',
          width: 50,
          dataIndex: 'device',
          key: 'device',
          fiexed: 'left',
        },
        {
          title: '操作',
          width: 80,
          dataIndex: 'action',
          align: 'center',
          customRender: (text, record, index) => {
            return (
              <span>
                <a onClick={() => this.actionHandle(record)}>路径</a>&nbsp;
                <router-link to="/general">细粒度</router-link>
              </span>
            );
          },
        },
      ],
      table_data: [],
      item: {},
    };
  },
  mounted() {
    this.timeFn();
    this.axios
      .get(`${this.$apiBaseUrl}/api/getAllByTime`)
      .then((response) => {
        this.table_data = response.data;
        this.dd = response.data;
        this.table_data.forEach((item, index) => {
          item.index = index + 1;
        });
      })
      .catch((error) => {
        this.error = error;
      });
    this.axios.get(`${this.$apiBaseUrl}/api/getItem`).then((response) => {
      this.item = response.data;
    });
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss');
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd');
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    handleSearch() {
      const searchText = this.searchText.toLowerCase();
      this.table_data = this.table_data.filter((item) => {
        return item.taskName.toLowerCase().includes(searchText);
      });
    },
    handleReset() {
      this.searchText = null;
      this.table_data = this.dd;
    },
    actionHandle(record) {
      this.content = record;
      this.open = true;
      this.axios
        .get(`${this.$apiBaseUrl}/api/generateLinkByOne?id=${record.id}`)
        .then((response) => {
          this.mockData = response.data;
        })
        .catch((error) => {
          this.error = error;
        });
    },
    general(record) {},
    handleOk() {
      this.open = false;
      this.$refs.contain = null;
      this.mockData = null;
      console.log(this.$refs.contain);
    },
  },
};
</script>

<style lang="scss" scoped>
#mainJobs {
  height: 750px;
  color: #434343;
  .title-box {
    background-color: #fff;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    .title {
      flex: 1;
      font-size: 25px;
      font-weight: 600;
      letter-spacing: 5px;
      color: #0958d9;
      .title-detail {
        font-size: 25px;
        font-weight: 500;
        color: #434343;
      }
    }
  }
  .main-box {
    height: 400px;
    .digit-box {
      background-color: #fff;
      height: 90px;
      display: flex;
      flex-direction: row;
      .a-liuxiang-box {
        flex: 1;
      }
      .alarm-card {
        text-align: left;
        height: 100%;
      }
      .alarm-content {
        display: flex;
        flex-direction: row;
      }
      .alarm-text {
        flex: 1;
        text-align: center;
        font-weight: 600;
      }
      .color-text {
        font-weight: 600;
        color: royalblue;
        font-size: 20px;
      }
    }
    .right-box {
      padding: 20px;
      margin-top: 15px;
      padding-top: 30px;
      background-color: #fff;
    }
  }
  .ant-card-body {
    padding: 10px !important;
  }
}
</style>

<style lang="scss">
.ant-modal {
  text-align: left;
  top: 5%;
  padding-bottom: 0;
  margin: 0;
  left: 30%;
}
.ant-modal-content {
  display: flex;
  flex-direction: column;
  height: 800px !important;
}
.ant-modal-body {
  flex: 1;
}
</style>
