// import LeaderLine from '../lib/leader-line-min';
// import TableColumnsType from 'ant-design-vue';
// export default {
//   name: 'datastream',
//   components: {
//     TableColumnsType
   
//   },
//   data() {
//     return {
//       options: ['外出报告（部门内部）','督查督办','访客报备','用章申请','干部外出报告','办公用品管理',
//         '行政复议','公文管理(区府)','疗休养','重点工作填报','信息化一件事','指标填报','请休假','数据局旗舰店',
//         '账号申请','大兴调查研究','会议管理','信息报送','公文管理(委办局)','运营报告'], 
// //       selectedItems:[],
//       commissioners: ['应用','用户'],
//       levels: ['一级', '二级'],
      // actors: ['丁拥琪',  
      // '丁昕',  
      // '丁鹏程',  
      // '任柳卿',  
      // '伍超',  
      // '何慧敏',  
      // '余俊杰',  
      // '傅颖',  
      // '冯勤勤',  
      // '凡云祥',  
      // '刘佳',  
      // '刘杨',  
      // '刘盛蕾',  
      // '刘苏',  
      // '刘虹蔚',  
      // '卞玉祥',  
      // '叶毅',  
      // '叶琳',  
      // '叶辰',  
      // '吕升昂',  
      // '吴双励',  
      // '吴咏枫',  
      // '吴天玺',  
      // '吴灏',  
      // '吴鋆澄',  
      // '周克',  
      // '周勇燕',  
      // '周川',  
      // '周蕾',  
      // '周金禄',  
      // '周雯青',  
      // '唐珊',  
      // '夏天',  
      // '夏腾龙',  
      // '姜潇斐', // 注意：这里重复了，可能需要去重  
      // '姜潇斐',  
      // '孙亚婷',  
      // '孙亦杨',  
      // '尤佳嘉',  
      // '应琳',  
      // '康颖',  
      // '张临俊',  
      // '张妍',  
      // '张宏',  
      // '张康桥',  
      // '张志豪',  
      // '张晗昀',  
      // '张智霖',  
      // '张泽民',  
      // '张磊',  
      // '张韶春',  
      // '徐小栋',  
      // '徐立春',  
      // '徐锋',  
      // '戴贤俊',  
      // '戴超',  
      // '施浥淳',  
      // '曹振宇',  
      // '曹梁',  
      // '曹静',  
      // '未修峰',  
      // '朱佳',  
      // '朱懿清',  
      // '朱文虎',  
      // '朱梦恬',  
      // '朱琦桦',  
      // '朱震东',  
      // '李东骏',  
      // '李佳钰',  
      // '李妍',  
      // '李婳',  
      // '李晓娇',  
      // '李琛',  
      // '李琳',  
      // '李益鹏',  
      // '李艳',  
      // '杨培',  
      // '林俐迪',  
      // '武宗燕',  
      // '汤宇帆',  
      // '沈瑜',  
      // '沈璟鹤',  
      // '淳钰',  
      // '潘浩',  
      // '潘风华',  
      // '王亮',  
      // '王伟',  
      // '王敏',  
      // '王杭兴',  
      // '王玲',  
      // '王秋爽',  
      // '王诚祥',  
      // '王贞飞',  
      // '盛佳妮',  
      // '石金质',  
      // '祝斯莹',  
      // '秦月',  
      // '章凡',  
      // '章洁',  
      // '章立群',  
      // '章铭珏',  
      // '管文靓',  
      // '羌瑜瑶',  
      // '芮晓雯',  
      // '蒋龙',  
      // '解仕明',  
      // '解放',  
      // '詹伟',  
      // '詹逸伦',  
      // '许崴',  
      // '许施毅',  
      // '许春辉',  
      // '许磊',  
      // '谢立伟',  
      // '赵云',  
      // '赵宸',  
      // '赵文',  
      // '运维人员', // 注意：这个可能是一个类别名，需要特殊处理或移除  
      // '逯梦凡',  
      // '邓俊',  
      // '邓可玉',  
      // '邬晓亭',  
      // '邱守义',  
      // '邵俊',  
      // '金一峰',  
      // '金岚岚',  
      // '金淑桦',  
      // '金雪莲',  
      // '陆小幽',  
      // '陆李豪',  
      // '陆燕婷',  
      // '陈婷',  
      // '陈志勤',  
      // '陈晨',  
      // '陈沁虹',  
      // '陈漪',  
      // '陈珏仁',  
      // '陈雯洁',  
      // '陈颖',  
      // '陈鸿',  
      // '陶天明',  
      // '麻成飞',  
      // '黄芊芊',  
      // '黄萧炀',  
      // '黄龚',  
      // '龚志伟'  
      // ],
//       scenes: ['任务失败', '任务依赖关系异常', '任务超时', '任务中断', '突发调度量峰值'],
//       statuss: ['待处理', '处理中', '已处理'],
//       columns: [
//         {
//           title: '事件时间',
//           width: 100,
//           dataIndex: 'executeTime',
//           key: 'executeTime',
//           fiexed: 'left'
//         },
//         {
//           title: '事件主体',
//           width: 100,
//           dataIndex: 'commissioner',
//           key: 'commissioner',
//           fiexed: 'left'
//         },
//         {
//           title: '操作名称',
//           width: 100,
//           dataIndex: 'actionId',
//           key: 'actionId',
//           fiexed: 'left'
//         },
//         {
//           title: '操作类型',
//           width: 100,
//           dataIndex: 'actionType',
//           key: 'actionId',
//           fiexed: 'left'
//         },
//         {
//           title: '任务名',
//           width: 100,
//           dataIndex: 'jobName',
//           key: 'jobName',
//           fiexed: 'left'
//         },
//         {
//           title: '所在数据库',
//           width: 100,
//           dataIndex: 'database',
//           key: 'database',
//           fiexed: 'left'
//         },
//         {
//           title: '涉及表',
//           width: 100,
//           dataIndex: 'tablename',
//           key: 'tablename',
//           fiexed: 'left'
//         },
//         {
//           title: '告警场景',
//           width: 100,
//           dataIndex: 'alarmScene',
//           key: 'alarmScene',
//           fiexed: 'left'
//         },
//         {
//           title: '风险等级',
//           width: 100,
//           dataIndex: 'level',
//           key: 'level',
//           fiexed: 'left'
//         },
//         {
//           title: '状态',
//           width: 100,
//           dataIndex: 'status',
//           key: 'status',
//           fiexed: 'left'
//         },
//         {
//           title: '处理人',
//           width: 100,
//           dataIndex: 'deal',
//           key: 'deal',
//           fiexed: 'left'
//         }
//       ],
//       columns2: [
//         {
//           title: '事件时间',
//           width: 100,
//           dataIndex: 'executeTime',
//           key: 'executeTime',
//           fiexed: 'left'
//         },
//         {
//           title: '访问ip',
//           width: 100,
//           dataIndex: 'address',
//           key: 'address',
//           fiexed: 'left'
//         },
//         {
//           title: '数据库',
//           width: 100,
//           dataIndex: 'database',
//           key: 'database',
//           fiexed: 'left'
//         },
//         {
//           title: '对应指令',
//           width: 250,
//           dataIndex: 'argument',
//           key: 'argument',
//           fiexed: 'left'
//         },
//         {
//           title: '访问结果',
//           width: 100,
//           dataIndex: 'res',
//           key: 'res',
//           fiexed: 'left'
//         },
//         {
//           title: '数据流量',
//           width: 100,
//           dataIndex: 'stream',
//           key: 'stream',
//           fiexed: 'left'
//         },
//         {
//           title: '告警场景',
//           width: 100,
//           dataIndex: 'scene',
//           key: 'scene',
//           fiexed: 'left'
//         },
//         {
//           title: '风险等级',
//           width: 100,
//           dataIndex: 'level',
//           key: 'level',
//           fiexed: 'left'
//         },
//         {
//           title: '状态',
//           width: 100,
//           dataIndex: 'status',
//           key: 'status',
//           fiexed: 'left'
//         },
//         {
//           title: '处理人',
//           width: 100,
//           dataIndex: 'deal',
//           key: 'deal',
//           fiexed: 'left'
//         }
//       ],
//       data: [
//         {
//           key: '1',
//           executeTime: '2024-02-26T04:26:41',
//           commissioner: '卫健委',
//           actionId: '123131',
//           actionType: 'HDFS:writer',
//           jobName: '免申即享_老年人体检数据抽取',
//           database: 'ods',
//           tablename: 'opps',
//           alarmScene: '..失败',
//           level: '中风险',
//           status: '待处理',
//           deal: '无'
//         },
//         {
//           key: '2',
//           executeTime: '2024-02-26T04:26:41',
//           commissioner: '卫健委',
//           actionId: '123131',
//           actionType: 'HDFS:writer',
//           jobName: '免申即享_老年人体检数据抽取',
//           database: 'ods',
//           tablename: 'opps',
//           alarmScene: '..失败',
//           level: '中风险',
//           status: '待处理',
//           deal: '无'
//         },
//         {
//           key: '3',
//           executeTime: '2024-02-26T04:26:41',
//           commissioner: '卫健委',
//           actionId: '123131',
//           actionType: 'HDFS:writer',
//           jobName: '免申即享_老年人体检数据抽取',
//           database: 'ods',
//           tablename: 'opps',
//           alarmScene: '..失败',
//           level: '中风险',
//           status: '待处理',
//           deal: '无'
//         },
//         {
//           key: '4',
//           executeTime: '2024-02-26T04:26:41',
//           commissioner: '卫健委',
//           actionId: '123131',
//           actionType: 'HDFS:writer',
//           jobName: '免申即享_老年人体检数据抽取',
//           database: 'ods',
//           tablename: 'opps',
//           alarmScene: '..失败',
//           level: '中风险',
//           status: '待处理',
//           deal: '无'
//         },
//         {
//           key: '5',
//           executeTime: '2024-02-26T04:26:41',
//           commissioner: '卫健委',
//           actionId: '123131',
//           actionType: 'HDFS:writer',
//           jobName: '免申即享_老年人体检数据抽取',
//           database: 'ods',
//           tablename: 'opps',
//           alarmScene: '..失败',
//           level: '中风险',
//           status: '待处理',
//           deal: '无'
//         }
//       ],
//       data2: [{
//         executeTime: '2024/3/15 12:08',
//         address: '202.108.23.23',
//         database: 'db1',
//         argument: ' SELECT * FROM my_table WHERE id = 123',
//         res: 'success',
//         stream: '2535',
//         scene: '异常 IP访问',
//         level: '高风险',
//         status: '待处理',
//         deal: '未处理'
//       }, {
//         executeTime: '2024/3/15 12:20',
//         address: '192.168.1.101',
//         database: 'db1',
//         argument: 'select * from sensitive_table ',
//         res: 'success',
//         stream: '0',
//         scene: '用户越级访问',
//         level: '中风险',
//         status: '待处理',
//         deal: '未处理'
//       }, {
//         executeTime: '2024/3/15 12:28',
//         address: '192.168.1.200',
//         database: 'db2',
//         argument: '-',
//         res: 'failed',
//         stream: '0',
//         scene: '频繁登录尝试',
//         level: '中风险',
//         status: '待处理',
//         deal: '未处理'
//       }

//       ]
//     }
//   },

//   mounted() {
//     document.querySelectorAll('.leader-line').forEach(line => line.remove());
//   },
//   name: 'GoDatePicker',
//   props: {
//     value: {
//       type: Date,
//       default: () => new Date()
//     }
//   },
//   data () {
//     return {
//       visible: false,
//     };
//   },
//   mounted () {
//     document.body.addEventListener('click', this.onClickBody);
//   },
//   beforeDestroy () {
//     document.body.removeEventListener('click', this.onClickBody);
//   },
//   methods: {
//     dropdownRender(menu){
//       return menu;
//     },
//     // onClickBody (e) { // Vue内部会自动帮我们修改this指向
//     //   const { picker} = this.$refs;
//     //   // 过滤掉弹出层和日期选择器内的元素
//     //   if (picker.contains(e.target)) {
//     //     return;
//     //   }
//     //   this.visible = false;
//     // },
//   }
// }



import LeaderLine from '../lib/leader-line-min';
import TableColumnsType from 'ant-design-vue';
export default {
  name: 'datastream',
  components: {
    TableColumnsType
  },
  data() {
    return {
      selectedRange: [],
      options: ['外出报告（部门内部）','督查督办','访客报备','用章申请','干部外出报告','办公用品管理',
        '行政复议','公文管理(区府)','疗休养','重点工作填报','信息化一件事','指标填报','请休假','数据局旗舰店',
        '账号申请','大兴调查研究','会议管理','信息报送','公文管理(委办局)','运营报告'], 
        actors: ['丁拥琪',  
          '丁昕',  
          '丁鹏程',  
          '任柳卿',  
          '伍超',  
          '何慧敏',  
          '余俊杰',  
          '傅颖',  
          '冯勤勤',  
          '凡云祥',  
          '刘佳',  
          '刘杨',  
          '刘盛蕾',  
          '刘苏',  
          '刘虹蔚',  
          '卞玉祥',  
          '叶毅',  
          '叶琳',  
          '叶辰',  
          '吕升昂',  
          '吴双励',  
          '吴咏枫',  
          '吴天玺',  
          '吴灏',  
          '吴鋆澄',  
          '周克',  
          '周勇燕',  
          '周川',  
          '周蕾',  
          '周金禄',  
          '周雯青',  
          '唐珊',  
          '夏天',  
          '夏腾龙',  
          '姜潇斐', // 注意：这里重复了，可能需要去重  
          '姜潇斐',  
          '孙亚婷',  
          '孙亦杨',  
          '尤佳嘉',  
          '应琳',  
          '康颖',  
          '张临俊',  
          '张妍',  
          '张宏',  
          '张康桥',  
          '张志豪',  
          '张晗昀',  
          '张智霖',  
          '张泽民',  
          '张磊',  
          '张韶春',  
          '徐小栋',  
          '徐立春',  
          '徐锋',  
          '戴贤俊',  
          '戴超',  
          '施浥淳',  
          '曹振宇',  
          '曹梁',  
          '曹静',  
          '未修峰',  
          '朱佳',  
          '朱懿清',  
          '朱文虎',  
          '朱梦恬',  
          '朱琦桦',  
          '朱震东',  
          '李东骏',  
          '李佳钰',  
          '李妍',  
          '李婳',  
          '李晓娇',  
          '李琛',  
          '李琳',  
          '李益鹏',  
          '李艳',  
          '杨培',  
          '林俐迪',  
          '武宗燕',  
          '汤宇帆',  
          '沈瑜',  
          '沈璟鹤',  
          '淳钰',  
          '潘浩',  
          '潘风华',  
          '王亮',  
          '王伟',  
          '王敏',  
          '王杭兴',  
          '王玲',  
          '王秋爽',  
          '王诚祥',  
          '王贞飞',  
          '盛佳妮',  
          '石金质',  
          '祝斯莹',  
          '秦月',  
          '章凡',  
          '章洁',  
          '章立群',  
          '章铭珏',  
          '管文靓',  
          '羌瑜瑶',  
          '芮晓雯',  
          '蒋龙',  
          '解仕明',  
          '解放',  
          '詹伟',  
          '詹逸伦',  
          '许崴',  
          '许施毅',  
          '许春辉',  
          '许磊',  
          '谢立伟',  
          '赵云',  
          '赵宸',  
          '赵文',  
          '运维人员', // 注意：这个可能是一个类别名，需要特殊处理或移除  
          '逯梦凡',  
          '邓俊',  
          '邓可玉',  
          '邬晓亭',  
          '邱守义',  
          '邵俊',  
          '金一峰',  
          '金岚岚',  
          '金淑桦',  
          '金雪莲',  
          '陆小幽',  
          '陆李豪',  
          '陆燕婷',  
          '陈婷',  
          '陈志勤',  
          '陈晨',  
          '陈沁虹',  
          '陈漪',  
          '陈珏仁',  
          '陈雯洁',  
          '陈颖',  
          '陈鸿',  
          '陶天明',  
          '麻成飞',  
          '黄芊芊',  
          '黄萧炀',  
          '黄龚',  
          '龚志伟'  
          ],
      commissioners: ['应用','用户'],
      selected_commissioners: '',
      levels: ['一级', '二级'],
      scenes: ['任务失败', '任务依赖关系异常', '任务超时', '任务中断', '突发调度量峰值'],
      statuss: ['待处理', '处理中', '已处理'],
      columns: [
        {
          title: '事件时间',
          width: 100,
          dataIndex: 'executeTime',
          key: 'executeTime',
          fiexed: 'left'
        },
        {
          title: '事件主体',
          width: 100,
          dataIndex: 'commissioner',
          key: 'commissioner',
          fiexed: 'left'
        },
        {
          title: '操作名称',
          width: 100,
          dataIndex: 'actionId',
          key: 'actionId',
          fiexed: 'left'
        },
        {
          title: '操作类型',
          width: 100,
          dataIndex: 'actionType',
          key: 'actionId',
          fiexed: 'left'
        },
        {
          title: '任务名',
          width: 100,
          dataIndex: 'jobName',
          key: 'jobName',
          fiexed: 'left'
        },
        {
          title: '所在数据库',
          width: 100,
          dataIndex: 'database',
          key: 'database',
          fiexed: 'left'
        },
        {
          title: '涉及表',
          width: 100,
          dataIndex: 'tablename',
          key: 'tablename',
          fiexed: 'left'
        },
        {
          title: '告警场景',
          width: 100,
          dataIndex: 'alarmScene',
          key: 'alarmScene',
          fiexed: 'left'
        },
        {
          title: '风险等级',
          width: 100,
          dataIndex: 'level',
          key: 'level',
          fiexed: 'left'
        },
        {
          title: '状态',
          width: 100,
          dataIndex: 'status',
          key: 'status',
          fiexed: 'left'
        },
        {
          title: '处理人',
          width: 100,
          dataIndex: 'deal',
          key: 'deal',
          fiexed: 'left'
        }
      ],
      columns2: [
        {
          title: '事件时间',
          width: 100,
          dataIndex: 'executeTime',
          key: 'executeTime',
          fiexed: 'left'
        },
        {
          title: '访问ip',
          width: 100,
          dataIndex: 'address',
          key: 'address',
          fiexed: 'left'
        },
        {
          title: '数据库',
          width: 100,
          dataIndex: 'database',
          key: 'database',
          fiexed: 'left'
        },
        {
          title: '对应指令',
          width: 250,
          dataIndex: 'argument',
          key: 'argument',
          fiexed: 'left'
        },
        {
          title: '访问结果',
          width: 100,
          dataIndex: 'res',
          key: 'res',
          fiexed: 'left'
        },
        {
          title: '数据流量',
          width: 100,
          dataIndex: 'stream',
          key: 'stream',
          fiexed: 'left'
        },
        {
          title: '告警场景',
          width: 100,
          dataIndex: 'scene',
          key: 'scene',
          fiexed: 'left'
        },
        {
          title: '风险等级',
          width: 100,
          dataIndex: 'level',
          key: 'level',
          fiexed: 'left'
        },
        {
          title: '状态',
          width: 100,
          dataIndex: 'status',
          key: 'status',
          fiexed: 'left'
        },
        {
          title: '处理人',
          width: 100,
          dataIndex: 'deal',
          key: 'deal',
          fiexed: 'left'
        }
      ],
      data: [
        {
          key: '1',
          executeTime: '2024-02-26T04:26:41',
          commissioner: '卫健委',
          actionId: '123131',
          actionType: 'HDFS:writer',
          jobName: '免申即享_老年人体检数据抽取',
          database: 'ods',
          tablename: 'opps',
          alarmScene: '..失败',
          level: '中风险',
          status: '待处理',
          deal: '无'
        },
        {
          key: '2',
          executeTime: '2024-02-26T04:26:41',
          commissioner: '卫健委',
          actionId: '123131',
          actionType: 'HDFS:writer',
          jobName: '免申即享_老年人体检数据抽取',
          database: 'ods',
          tablename: 'opps',
          alarmScene: '..失败',
          level: '中风险',
          status: '待处理',
          deal: '无'
        },
        {
          key: '3',
          executeTime: '2024-02-26T04:26:41',
          commissioner: '卫健委',
          actionId: '123131',
          actionType: 'HDFS:writer',
          jobName: '免申即享_老年人体检数据抽取',
          database: 'ods',
          tablename: 'opps',
          alarmScene: '..失败',
          level: '中风险',
          status: '待处理',
          deal: '无'
        },
        {
          key: '4',
          executeTime: '2024-02-26T04:26:41',
          commissioner: '卫健委',
          actionId: '123131',
          actionType: 'HDFS:writer',
          jobName: '免申即享_老年人体检数据抽取',
          database: 'ods',
          tablename: 'opps',
          alarmScene: '..失败',
          level: '中风险',
          status: '待处理',
          deal: '无'
        },
        {
          key: '5',
          executeTime: '2024-02-26T04:26:41',
          commissioner: '卫健委',
          actionId: '123131',
          actionType: 'HDFS:writer',
          jobName: '免申即享_老年人体检数据抽取',
          database: 'ods',
          tablename: 'opps',
          alarmScene: '..失败',
          level: '中风险',
          status: '待处理',
          deal: '无'
        }
      ],
      data2: [{
        executeTime: '2024/3/15 12:08',
        address: '202.108.23.23',
        database: 'db1',
        argument: ' SELECT * FROM my_table WHERE id = 123',
        res: 'success',
        stream: '2535',
        scene: '异常 IP访问',
        level: '高风险',
        status: '待处理',
        deal: '未处理'
      }, {
        executeTime: '2024/3/15 12:20',
        address: '192.168.1.101',
        database: 'db1',
        argument: 'select * from sensitive_table ',
        res: 'success',
        stream: '0',
        scene: '用户越级访问',
        level: '中风险',
        status: '待处理',
        deal: '未处理'
      }, {
        executeTime: '2024/3/15 12:28',
        address: '192.168.1.200',
        database: 'db2',
        argument: '-',
        res: 'failed',
        stream: '0',
        scene: '频繁登录尝试',
        level: '中风险',
        status: '待处理',
        deal: '未处理'
      }

      ]
    }
  },
  methods: {

  },
  mounted() {
    document.querySelectorAll('.leader-line').forEach(line => line.remove());
  }
}