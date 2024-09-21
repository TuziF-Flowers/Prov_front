import LeaderLine from '../lib/leader-line-min';
import TableColumnsType from 'ant-design-vue';
export default {
  name: 'moneyview',
  components: {
    TableColumnsType
  },
  data() {
    return {
      selectedOption1: '', // 第一个下拉框的选择
      selectedOption2: '', // 第二个下拉框的选择
      tableData: [], // 表格数据
      tableHeaders: [], // 表格表头
      selectedRange: [],
      commissioners: ['应用','用户'],
      // selected_commissioners: '',
      levels: ['一级', '二级'],
      // scenes: ['任务失败', '任务依赖关系异常', '任务超时', '任务中断', '突发调度量峰值'],
      // statuss: ['待处理', '处理中', '已处理'],
      // columns: [
      //   {
      //     title: '事件时间',
      //     width: 100,
      //     dataIndex: 'executeTime',
      //     key: 'executeTime',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '事件主体',
      //     width: 100,
      //     dataIndex: 'commissioner',
      //     key: 'commissioner',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '操作名称',
      //     width: 100,
      //     dataIndex: 'actionId',
      //     key: 'actionId',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '操作类型',
      //     width: 100,
      //     dataIndex: 'actionType',
      //     key: 'actionId',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '任务名',
      //     width: 100,
      //     dataIndex: 'jobName',
      //     key: 'jobName',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '所在数据库',
      //     width: 100,
      //     dataIndex: 'database',
      //     key: 'database',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '涉及表',
      //     width: 100,
      //     dataIndex: 'tablename',
      //     key: 'tablename',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '告警场景',
      //     width: 100,
      //     dataIndex: 'alarmScene',
      //     key: 'alarmScene',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '风险等级',
      //     width: 100,
      //     dataIndex: 'level',
      //     key: 'level',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '状态',
      //     width: 100,
      //     dataIndex: 'status',
      //     key: 'status',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '处理人',
      //     width: 100,
      //     dataIndex: 'deal',
      //     key: 'deal',
      //     fiexed: 'left'
      //   }
      // ],
      // columns2: [
      //   {
      //     title: '事件时间',
      //     width: 100,
      //     dataIndex: 'executeTime',
      //     key: 'executeTime',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '访问ip',
      //     width: 100,
      //     dataIndex: 'address',
      //     key: 'address',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '数据库',
      //     width: 100,
      //     dataIndex: 'database',
      //     key: 'database',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '对应指令',
      //     width: 250,
      //     dataIndex: 'argument',
      //     key: 'argument',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '访问结果',
      //     width: 100,
      //     dataIndex: 'res',
      //     key: 'res',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '数据流量',
      //     width: 100,
      //     dataIndex: 'stream',
      //     key: 'stream',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '告警场景',
      //     width: 100,
      //     dataIndex: 'scene',
      //     key: 'scene',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '风险等级',
      //     width: 100,
      //     dataIndex: 'level',
      //     key: 'level',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '状态',
      //     width: 100,
      //     dataIndex: 'status',
      //     key: 'status',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '处理人',
      //     width: 100,
      //     dataIndex: 'deal',
      //     key: 'deal',
      //     fiexed: 'left'
      //   }
      // ],
      // data: [
      //   {
      //     key: '1',
      //     executeTime: '2024-02-26T04:26:41',
      //     commissioner: '卫健委',
      //     actionId: '123131',
      //     actionType: 'HDFS:writer',
      //     jobName: '免申即享_老年人体检数据抽取',
      //     database: 'ods',
      //     tablename: 'opps',
      //     alarmScene: '..失败',
      //     level: '中风险',
      //     status: '待处理',
      //     deal: '无'
      //   },
      //   {
      //     key: '2',
      //     executeTime: '2024-02-26T04:26:41',
      //     commissioner: '卫健委',
      //     actionId: '123131',
      //     actionType: 'HDFS:writer',
      //     jobName: '免申即享_老年人体检数据抽取',
      //     database: 'ods',
      //     tablename: 'opps',
      //     alarmScene: '..失败',
      //     level: '中风险',
      //     status: '待处理',
      //     deal: '无'
      //   },
      //   {
      //     key: '3',
      //     executeTime: '2024-02-26T04:26:41',
      //     commissioner: '卫健委',
      //     actionId: '123131',
      //     actionType: 'HDFS:writer',
      //     jobName: '免申即享_老年人体检数据抽取',
      //     database: 'ods',
      //     tablename: 'opps',
      //     alarmScene: '..失败',
      //     level: '中风险',
      //     status: '待处理',
      //     deal: '无'
      //   },
      //   {
      //     key: '4',
      //     executeTime: '2024-02-26T04:26:41',
      //     commissioner: '卫健委',
      //     actionId: '123131',
      //     actionType: 'HDFS:writer',
      //     jobName: '免申即享_老年人体检数据抽取',
      //     database: 'ods',
      //     tablename: 'opps',
      //     alarmScene: '..失败',
      //     level: '中风险',
      //     status: '待处理',
      //     deal: '无'
      //   },
      //   {
      //     key: '5',
      //     executeTime: '2024-02-26T04:26:41',
      //     commissioner: '卫健委',
      //     actionId: '123131',
      //     actionType: 'HDFS:writer',
      //     jobName: '免申即享_老年人体检数据抽取',
      //     database: 'ods',
      //     tablename: 'opps',
      //     alarmScene: '..失败',
      //     level: '中风险',
      //     status: '待处理',
      //     deal: '无'
      //   }
      // ],
      // data2: [{
      //   executeTime: '2024/3/15 12:08',
      //   address: '202.108.23.23',
      //   database: 'db1',
      //   argument: ' SELECT * FROM my_table WHERE id = 123',
      //   res: 'success',
      //   stream: '2535',
      //   scene: '异常 IP访问',
      //   level: '高风险',
      //   status: '待处理',
      //   deal: '未处理'
      // }, {
      //   executeTime: '2024/3/15 12:20',
      //   address: '192.168.1.101',
      //   database: 'db1',
      //   argument: 'select * from sensitive_table ',
      //   res: 'success',
      //   stream: '0',
      //   scene: '用户越级访问',
      //   level: '中风险',
      //   status: '待处理',
      //   deal: '未处理'
      // }, {
      //   executeTime: '2024/3/15 12:28',
      //   address: '192.168.1.200',
      //   database: 'db2',
      //   argument: '-',
      //   res: 'failed',
      //   stream: '0',
      //   scene: '频繁登录尝试',
      //   level: '中风险',
      //   status: '待处理',
      //   deal: '未处理'
      // }

      // ]
    }
  },
  methods: {
      // 根据下拉框选项获取表格数据
      fetchData() {
        console.log("ok")
        console.log(this.selectedOption1,this.selectedOption2)
        if (this.selectedOption1 == '应用' && this.selectedOption2 == '一级') {
          console.log("hhhh")
          this.tableHeaders = ['XAPPLICATION', 'XAPPLICATIONNAME'];
          this.tableData = [
            { XAPPLICATION: 1, XAPPLICATIONNAME: 'Alice'},
            { XAPPLICATION: 2, XAPPLICATIONNAME: 'Bob' }
          ];
          
        } else if (this.selectedOption1 == '应用' && this.selectedOption2 === '二级') {
          this.tableHeaders = ['activity', 'activityalias', 'activityname','XAPPLICATIONNAME'];
          this.tableData = [
            { activity: 1, activityalias: 'Laptop', activityname: '$1000', XAPPLICATIONNAME:1},
            { activity: 2, activityalias: 'Phone', activityname: '$600',XAPPLICATIONNAME:2 }
          ];
        } else if (this.selectedOption1 === '用户' && this.selectedOption2 === '一级') {
          this.tableHeaders = ['XUNIT1'];
          this.tableData = [
            { XUNIT1:1 },
            { XUNIT1:2 }
          ];
        }else if (this.selectedOption1 === '用户' && this.selectedOption2 === '二级') {
          this.tableHeaders = ['name', 'phone'];
          this.tableData = [
            { name: 1, phone: '2131321'},
            { name: 2, phone: '131231232'}
          ];
        }
        else {
          this.tableData = [];
          this.tableHeaders = [];
        }
      },
      // 重置筛选框和表格数据
      resetData() {
        this.selectedOption1 = '';
        this.selectedOption2 = '';
        this.tableData = [];
        this.tableHeaders = [];
      }
  },
  mounted() {
    document.querySelectorAll('.leader-line').forEach(line => line.remove());
  }
}