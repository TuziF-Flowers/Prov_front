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
      selectedRange: ['未完成','已完成'],
      options: ['外出报告（部门内部）','督查督办','访客报备','用章申请','干部外出报告','办公用品管理',
        '行政复议','公文管理(区府)','疗休养','重点工作填报','信息化一件事','指标填报','请休假','数据局旗舰店',
        '账号申请','大兴调查研究','会议管理','信息报送','公文管理(委办局)','运营报告'], 
        actors: ['丁拥琪@ed212108-f6e5-4d95-b18a-0d5895603bcd@I',
        '丁昕@4cd0a2c5-78de-4e22-9eae-9d5644525ff1@I',
        '丁鹏程@6b4abadd-6f37-44e1-a60c-f8b558617499@I',
        '任柳卿@c8042ef3-3746-4b33-bc3e-00b61ba77446@I',
        '伍超@30fe6591-5b9e-4a89-9a61-2cbdea39fab5@I',
        '何慧敏@9fb2b15b-ed0b-460f-a67e-9d8954fb8cb6@I',
        '余俊杰@08687d1e-47c6-4964-9fb5-7ed0290dea08@I',
        '傅颖@14f7b582-f846-4330-93a7-2c971d0fca57@I',
        '冯勤勤@f0e23d6e-845a-44db-a518-76d561fb1d3f@I',
        '凡云祥@f323e3dd-bac3-4fc6-9e34-481a0fe00e96@I',
        '刘佳@bea7b069-96f2-4183-bf19-fba4897650a5@I',
        '刘杨@4ce3b292-8e22-47d5-87b1-d593d5351a66@I',
        '刘盛蕾@30e40eb4-ea66-48d0-8522-c9c31de60a5e@I',
        '刘苏@b525fe25-f1f1-43b5-9d53-92040bd894d5@I',
        '刘虹蔚@ba252e0d-4b5e-436c-898c-a422a589de4d@I',
        '卞玉祥@07faeff5-dc89-4fea-b4e5-2e22a5f60b28@I',
        '叶毅@166ca8f2-87ea-40c3-9cb5-96c4d7674fa8@I',
        '叶琳@3bc3e900-d386-4450-8b30-9a096bea6a13@I',
        '叶辰@888f946a-e415-48e3-8324-58adee5b1cd8@I',
        '吕升昂@aec361ea-73a8-434d-a9ec-a60aee801f85@I',
        '吴双励@271dc77b-7d4c-41dd-b5da-fe663631ec32@I',
        '吴咏枫@fe4c2d92-bfd1-43fc-b7ad-9d3e303903a2@I',
        '吴天玺@9213e68d-5e19-4b23-9c7c-5f487528bbac@I',
        '吴灏@e60d7934-260a-4da9-bf53-ef3c55b94248@I',
        '吴鋆澄@f0a5335d-4f53-4a9d-903c-63055809529d@I',
        '周克@d4a30926-8e78-4b33-897f-4d38057b8c44@I',
        '周勇燕@10ae60f9-70e8-43db-b827-5a57edd84d48@I',
        '周川@ed1a1a73-943d-4d33-8d6f-35238b14eda2@I',
        '周蕾@f32766bd-eb93-44d5-a461-c4b88b31e278@I',
        '周金禄@74f3cb68-2131-4140-8e28-14972b800408@I',
        '周雯青@5a2f140e-447e-400c-9615-27ab1caa746d@I',
        '唐珊@b59f63d8-05be-40a7-aa7d-ed1efb93e434@I',
        '夏天@84decd41-b20a-4c50-a745-04c422ac64d3@I',
        '夏腾龙@b579642b-0bae-4fe3-a5a0-9c0cc353f340@I',
        '姜潇斐@10355fb1-88a8-42b9-a85e-71fdecd69252@I',
        '姜潇斐@390e2879-b66f-4205-8366-a32d79ea8a32@I',
        '孙亚婷@b171f3a6-8b1b-49fe-8334-9fa015ac1a91@I',
        '孙亦杨@9f931cab-958a-47fa-b9b0-68826f911285@I',
        '尤佳嘉@e529b27a-6763-4f98-999b-234c8ae72f0a@I',
        '应琳@7960d469-a045-46be-9787-7d01fc4efc73@I',
        '康颖@f24cd1e9-552c-4eb3-8535-8fd30c5ab7cb@I',
        '张临俊@26514b9a-8931-41d4-bcb0-f27630c4024a@I',
        '张妍@95e136fa-d1c9-496a-8b5e-4de35dba2734@I',
        '张宏@e6a8ba9d-8f3d-4b32-88df-484642b3ca41@I',
        '张康桥@34fb1fca-9ae8-4432-aee8-08ad3734edcd@I',
        '张志豪@c41c28b8-5c62-47f4-b296-f14982bc88e3@I',
        '张晗昀@e309e311-2567-4ed8-aa98-d0755b04965c@I',
        '张智霖@e689cfaf-52fe-4319-a83f-40dab8cbd05e@I',
        '张泽民@f4aa4340-d694-4563-a4ff-db4405727a88@I',
        '张磊@fb4bec36-bf52-43ab-99d0-6da03ff19e0e@I',
        '张韶春@8178b793-b28a-47e8-a138-2bfa9b80773f@I',
        '徐小栋@374713f6-fd67-4197-823b-6d702848abd9@I',
        '徐立春@459a431d-a79b-4b18-9730-12bf64252d64@I',
        '徐锋@93e91258-f2d0-4b17-81f5-dc35fa15c7a0@I',
        '戴贤俊@61dddbe5-b5cc-4f04-b698-4f851bca27c3@I',
        '戴超@bf520d59-5890-45d4-852c-1617566b1808@I',
        '施浥淳@7d42ca45-83ff-4d5b-ab93-4ef872ef3c64@I',
        '曹振宇@3ae4ab31-3222-44a9-afaa-00a940a739c5@I',
        '曹梁@b2a1a002-b3bd-40a7-a15f-866144ab78b3@I',
        '曹静@e408dd2b-7b04-495c-ad4a-41b52910f045@I',
        '未修峰@ea821c62-f559-4de2-abb1-5eeabc4a00aa@I',
        '朱佳@dc53fc03-2093-489e-903c-6567651f98b2@I',
        '朱懿清@2a2d0d2d-fee5-4c81-9161-d4dc79734368@I',
        '朱文虎@123d53a4-227f-4a41-8724-b51aa4ff1399@I',
        '朱梦恬@ae6291e6-e243-4edd-88e8-c6a52f18a8c0@I',
        '朱琦桦@e28c263e-efff-4275-ae9f-3440770b2784@I',
        '朱震东@963f061e-4d40-49b6-afe2-0e32c5831c41@I',
        '李东骏@e1b53daf-1957-4108-9576-9b6a722a0e94@I', 
        '李佳钰@e97bb4bc-4803-4a7d-890b-9e665a365d97@I',
        '李妍@9f2cec40-ccc7-421a-a2d8-39e2bb0e9166@I',
        '李婳@56cbb441-dc37-43dc-8c78-7413624b6c89@I',
        '李晓娇@357658a0-f7f7-4be8-8f29-58e61eaef11b@I',
        '李琛@62cbb642-80a8-420a-960f-fb8eddd125d1@I',
        '李琳@5112246a-9e98-400d-942f-9cf02c7a92c3@I',
        '李益鹏@f9451d9f-f65d-4e4b-98ae-4449bece2310@I',
        '李艳@43c68612-05ee-4ba9-a229-9ad97347a3b2@I',
        '杨培@9cd34cb1-5b07-4ca6-9809-494df2119242@I',
        '林俐迪@a71cdfd9-19a2-4767-bf3e-db7796bfe8fe@I',
        '武宗燕@be0797a6-331b-45ba-86e5-d1589aeb7c3e@I',
        '汤宇帆@8841fe9b-4579-4b4e-a948-cc9e47fb8f89@I',
        '沈瑜@85d12f3a-02ba-4d11-a91b-99702596a73c@I',
        '沈璟鹤@2d9bd7d4-c79c-4f66-9f4d-18fe3dfe768f@I',
        '淳钰@088d1bee-91f6-47a2-9c1f-a5273233d5ac@I',
        '潘浩@45ccd844-0661-4f2b-804f-1cc44ce86275@I',
        '潘风华@d463d642-0985-4198-ad1a-9db281e52830@I',
        '王亮@6c344492-5aca-496e-86fc-79dc34795504@I',
        '王伟@5345d16e-a7db-4388-a410-6a493faf18f6@I',
        '王敏@d4c1921c-49a7-4cb9-a92a-97b8fd23a92d@I',
        '王杭兴@0258d5f6-0515-4737-9348-cc16a0468555@I',
        '王玲@245ccbd5-c34f-4e76-8d68-0eda197a806f@I',
        '王秋爽@9d1254f4-9a5b-4471-abef-d5b67903d163@I',
        '王诚祥@54479486-febf-40f5-9fe4-54b84c15aeab@I',
        '王贞飞@67d4fc1a-d1e9-4ff1-be1e-1445e9b6b4db@I',
        '盛佳妮@102b5830-22b9-4d26-93da-8cf1c06da6c5@I',
        '石金质@166fa242-744c-414a-8984-7f2bc51aad0b@I',
        '祝斯莹@bc6c70b0-56fd-4c41-b0ee-83d2b6bec487@I',
        '秦月@80d614cc-e4c9-49a7-9d44-6532f7e2e54e@I',
        '章凡@09007b7d-368b-46c7-9b34-73f0b3c6a291@I',
        '章洁@15c2294e-ae7b-44b0-9a44-4345e5a56a30@I',
        '章立群@4a291b17-71a7-48ca-9e04-fe1d52951480@I',
        '章铭珏@f739dcce-eabd-42df-8470-de6a548df825@I',
        '管文靓@4fe6513e-004f-4508-af10-b80502ab9421@I',
        '羌瑜瑶@c87cba0f-04a1-4263-937c-9c2ecad96cbd@I',
        '芮晓雯@3a38ee5f-9466-4a4c-b140-48fc94b30f71@I',
        '蒋龙@0cf1b132-8f82-4e91-8591-60bd735b993b@I',
        '解仕明@801d5eae-731a-4844-8c41-0ca188ca1235@I',
        '解放@9786e5b5-175d-4a2e-9060-3a16c72d203f@I',
        '詹伟@d45c8eb1-bb96-4813-ab5a-7bbb0ef11569@I',
        '詹逸伦@04cdae39-53dd-416e-ae12-e5440b11fa32@I',
        '许崴@6a6516f1-9525-41c6-94d5-e05083e967ab@I',
        '许施毅@9799bff0-3675-47f5-b5e1-d50162127558@I',
        '许春辉@c9ca4841-c761-4bd7-92ad-ed7a69eca1d6@I',
        '许磊@0c4d90e2-371b-430a-8f83-0fcb89465e34@I',
        '谢立伟@31c84bee-462a-4033-a706-5d5049b971d8@I',
        '赵云@8f13dae2-e82a-49ee-ac6b-d15b1d44b20f@I',
        '赵宸@45e0bb63-3aa9-468f-8d35-3a668ca4dd46@I',
        '赵文@f417cb30-e2e0-4955-a925-12c9af629c27@I',
        '运维人员@a0701263-9856-4642-b26b-4c50c4b63676@I',
        '逯梦凡@c1c94d61-6630-4fb1-84a0-5b145ce4fc07@I',
        '邓俊@d893c5d6-dcb2-4d7e-8f8b-67e052efcba1@I',
        '邓可玉@31fea199-0408-45d3-a2f4-a89180d81cb9@I',
        '邬晓亭@bf510074-c00c-487d-adf9-b5d24a308bfb@I',
        '邱守义@3663208a-8331-4bd3-939e-c38725ca5a8f@I',
        '邵俊@ace43214-eac2-4528-95c1-8334dbeb22ac@I',
        '金一峰@3c36cd1f-ffba-4125-9eb1-facf0bfc6005@I',
        '金岚岚@acc6aeff-f9f9-4030-a746-b7977aea0292@I',
        '金淑桦@a68bc8c6-2d88-4b5c-a8ac-ac249c756c6e@I',
        '金雪莲@549adafb-b57b-4fbe-b1f1-15de7c5ab7d5@I',
        '陆小幽@c143eb2b-bd2c-4098-bb7b-2c7d3733ff7d@I',
        '陆李豪@ee44f6e1-3141-4768-b6f3-7f67343d5cea@I',
        '陆燕婷@14fc04fd-9e6f-433f-b08f-efd2a0b56d43@I',
        '陈婷@3fdfc9f8-907a-4805-95b7-3710a42c9844@I',
        '陈志勤@d049bde7-01f3-4dd8-a8dd-b7ec5f26d45e@I',
        '陈晨@3ffeb3a2-60e6-432a-92c4-4251eb5fbbfa@I',
        '陈沁虹@27e1635b-79ce-433e-946c-e1f3375d91da@I',
        '陈漪@8cf700e3-f4a0-4f27-9155-6d340978a0d6@I',
        '陈珏仁@95f41470-60b4-4503-a8d2-3b21959d365a@I',
        '陈雯洁@0a762bb8-d90b-43a7-8366-fb31f45b19c8@I',
        '陈颖@dc43ef07-060f-48ef-9b88-e2a66f617f48@I',
        '陈鸿@1336a528-943c-4d26-9337-caa9bbc202ce@I',
        '陶天明@387d2110-da84-4e8e-bd88-008ad1fc48d4@I',
        '麻成飞@29443d29-3dda-471e-b304-57fac1c93c42@I',
        '黄芊芊@d50e98d5-c09d-4413-a262-24cdc6b57bb8@I',
        '黄萧炀@d2d0a32b-83d3-40a7-a9aa-bec3b01c2341@I',
        '黄龚@c6c6426e-b45d-44a1-80f7-ee49e0229549@I',
        '龚志伟@2af912f7-2cea-474d-8f04-a5b8149820c9@I'
          ],
      commissioners: ['应用','用户'],
      selected_commissioners: '',
      levels: ['一级', '二级'],
      scenes: ['任务失败', '任务依赖关系异常', '任务超时', '任务中断', '突发调度量峰值'],
      statuss: ['待处理', '处理中', '已处理'],
      columns: [
        {
          title: 'XJOB',
          width: 100,
          dataIndex: 'XJOB',
          key: 'XJOB',
          fiexed: 'left'
        },
        {
          title: 'XCREATETIME',
          width: 100,
          dataIndex: 'XCREATETIME',
          key: 'XCREATETIME',
          fiexed: 'left'
        },
        {
          title: 'XAPPLICAITON',
          width: 100,
          dataIndex: 'XAPPLICAITON',
          key: 'XAPPLICAITON',
          fiexed: 'left'
        },
        {
          title: 'XCOMPLETED',
          width: 100,
          dataIndex: 'XCOMPLETED',
          key: 'XCOMPLETED',
          fiexed: 'left'
        },
        // {
        //   title: '任务名',
        //   width: 100,
        //   dataIndex: 'jobName',
        //   key: 'jobName',
        //   fiexed: 'left'
        // },
        // {
        //   title: '所在数据库',
        //   width: 100,
        //   dataIndex: 'database',
        //   key: 'database',
        //   fiexed: 'left'
        // },
        // {
        //   title: '涉及表',
        //   width: 100,
        //   dataIndex: 'tablename',
        //   key: 'tablename',
        //   fiexed: 'left'
        // },
        // {
        //   title: '告警场景',
        //   width: 100,
        //   dataIndex: 'alarmScene',
        //   key: 'alarmScene',
        //   fiexed: 'left'
        // },
        // {
        //   title: '风险等级',
        //   width: 100,
        //   dataIndex: 'level',
        //   key: 'level',
        //   fiexed: 'left'
        // },
        // {
        //   title: '状态',
        //   width: 100,
        //   dataIndex: 'status',
        //   key: 'status',
        //   fiexed: 'left'
        // },
        // {
        //   title: '处理人',
        //   width: 100,
        //   dataIndex: 'deal',
        //   key: 'deal',
        //   fiexed: 'left'
        // }
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
          XJOB: '03a6053f-4720-42ef-992e-f6d8e69f4641',
          XCREATETIME: '2024/8/20',
          XAPPLICAITON: 'c79bc7f1-bec8-4373-b8f8-c297fa2ce12d',
          XCOMPLETED: '0',
          // jobName: '免申即享_老年人体检数据抽取',
          // database: 'ods',
          // tablename: 'opps',
          // alarmScene: '..失败',
          // level: '中风险',
          // status: '待处理',
          // deal: '无'
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