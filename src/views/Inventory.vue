<template>
  <div class="alarm-main">

    <div class="alarm-lower">
      <!-- <a-tabs type="card"> -->
        
          <div class="check-group">
            
            <div class="check-box">
              <div class="check-word">第一维度：</div>
              <a-select  v-model="selectedOption1"  :dropdownRender="dropdownRender" style="width: 200px;height: 30px;"
                placeholder="应用" :default-value="dimensions[0]">
                
                <a-select-option  v-for="(item,index) in dimensions" :key="index" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
            <div class="check-box">
              <div class="check-word">新增维度：</div>
              <a-select  v-model="selectedOption2"  mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;height:30px"
                placeholder="请选择--">
                <a-select-option v-for="(item,index) in filteredNewDimensions " :key="index" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
            <div class="check-box" style="margin-bottom:15px;">
            <a-button  @click="fetchData" type="primary" style="margin-left:45px"><a-icon type="search" />查询</a-button>
            <a-button  @click="resetData" type="danger" style="margin-left:15px"><a-icon type="redo" />重置</a-button>
          </div>
          </div>
          <!-- <div class="check-group" style="margin-bottom:15px;">
            <a-button  @click="fetchData" type="primary" style="margin-left:45px"><a-icon type="search" />查询</a-button>
            <a-button  @click="resetData" type="danger" style="margin-left:15px"><a-icon type="redo" />重置</a-button>
          </div> -->
          <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 500 }" bordered
          style="padding:20px">
          <template #bodyCell="{ column }">
            <template v-if="column.key === 'level'">
              <span>
                <a-tag
                  :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                  {{ record.level}}
                </a-tag>
              </span>
            </template>
          </template>
        </a-table>
         
        
    
     </div>
   
  </div>
</template>
<script>
export default {
data() {
  return {
      dimensions:["应用","用户","活动","设备","数据"],
      newDimensions:["应用","用户","活动","设备","数据"],
      selectedOption1:"应用",
      selectedOption2:[],
      
      columnsApplication:[
              {
                  title: '应用编号',
                  width: 8,
                  dataIndex: 'xapplication',
                  key: 'xapplication',
                  fiexed: 'left'
                  },
                  {
                  title: '应用名称',
                  width: 8,
                  dataIndex: 'xapplicationname',
                  key: 'xapplicationname',
                  fiexed: 'left'
                  },
                  {
                  title: '业务量',
                  width: 8,
                  dataIndex: 'jobnum',
                  key: 'jobnum',
                  fiexed: 'left'
              } 
      
          ],
      columnsUser:[
      {
        title: '用户名',
        width: 10,
        dataIndex: 'name',
        key: 'name',
        fiexed: 'left'
      },
      {
        title: '电话',
        width: 10,
        dataIndex: 'phone',
        key: 'phone',
        fiexed: 'left'
      },
      {
        title: '部门名',
        width: 10,
        dataIndex: 'xunit1',
        key: 'xunit1',
        fiexed: 'left'
      },
      {
        title: '业务量',
        width: 10,
        dataIndex: 'jobnum',
        key: 'jobnum',
        fiexed: 'left'
      }
      
    ],
      columnsApplicationAndUser:[
      {
        title: '应用名称',
        width: 10,
        dataIndex: 'xapplicationname',
        key: 'xapplicationname',
        fiexed: 'left'
      },
      {
        title: '用户名',
        width: 10,
        dataIndex: 'name',
        key: 'name',
        fiexed: 'left'
      },
      {
        title: '电话',
        width: 10,
        dataIndex: 'phone',
        key: 'phone',
        fiexed: 'left'
      },
      {
        title: '部门名',
        width: 10,
        dataIndex: 'xunit1',
        key: 'xunit1',
        fiexed: 'left'
      },
      {
        title: '业务量',
        width: 10,
        dataIndex: 'jobnum',
        key: 'jobnum',
        fiexed: 'left'
      }
      
    ],
    columns:[],
  };
},
components: {
  
},
computed: {
  filteredNewDimensions() {
    return this.newDimensions.filter(item => item !== this.selectedOption1);
  }
},
mounted() {
this.fetchData(); // 自动获取数据
//   this.timeFn();
//   this.cancelLoading();
//   document.body.style.backgroundColor = '#041835'; // 设置为灰色
//   // 其他 axios 请求...
},


beforeDestroy() {
  clearInterval(this.timing);
},
watch: {
  
},
methods: {
  fetchData() {
      let typeMapping = {
    "应用": 1,
    "用户": 2,
    "活动": 3,
    "设备": 4,
    "数据": 5
  };

  // 获取第一个筛选框的值
  let firstValue = typeMapping[this.selectedOption1];

  // 获取第二个筛选框的值，并转换为对应的数字数组
  let secondValues = this.selectedOption2.map(item => typeMapping[item]);
  
  // 合并两个参数
  let params = firstValue + (secondValues.length > 0 ? secondValues.join('') : '');

  // 发起 GET 请求

  this.axios.get(`${this.$apiBaseUrl}/api/asset/jobcount`, { params: { params } })
    .then((response) => {
      this.data = response.data;
      params=params.split('').map(Number) // 将每个字符转换为数字
      .sort((a, b) => a - b) // 按照数字大小排序
      .join(''); // 重新组合成字符串
      console.log(params)

      // 根据 data 的值设置 columns
      switch (params) {
        case '1': // 应用
          this.columns = [
              {
                  title: '应用编号',
                  width: 8,
                  dataIndex: 'xapplication',
                  key: 'xapplication',
                  fiexed: 'left'
                  },
                  {
                  title: '应用名称',
                  width: 8,
                  dataIndex: 'xapplicationname',
                  key: 'xapplicationname',
                  fiexed: 'left'
                  },
                  {
                  title: '业务量',
                  width: 8,
                  dataIndex: 'jobnum',
                  key: 'jobnum',
                  fiexed: 'left'
              } 
      
          ];
          break;
        case '2': // 用户
          this.columns = [
      {
        title: '用户名',
        width: 10,
        dataIndex: 'name',
        key: 'name',
        fiexed: 'left'
      },
      {
        title: '电话',
        width: 10,
        dataIndex: 'phone',
        key: 'phone',
        fiexed: 'left'
      },
      {
        title: '部门名',
        width: 10,
        dataIndex: 'xunit1',
        key: 'xunit1',
        fiexed: 'left'
      },
      {
        title: '业务量',
        width: 10,
        dataIndex: 'jobnum',
        key: 'jobnum',
        fiexed: 'left'
      }
      
    ];
          break;
        case '12':
          this.columns = [
      {
        title: '应用名称',
        width: 10,
        dataIndex: 'xapplicationname',
        key: 'xapplicationname',
        fiexed: 'left'
      },
      {
        title: '用户名',
        width: 10,
        dataIndex: 'name',
        key: 'name',
        fiexed: 'left'
      },
      {
        title: '电话',
        width: 10,
        dataIndex: 'phone',
        key: 'phone',
        fiexed: 'left'
      },
      {
        title: '部门名',
        width: 10,
        dataIndex: 'xunit1',
        key: 'xunit1',
        fiexed: 'left'
      },
      {
        title: '业务量',
        width: 10,
        dataIndex: 'jobnum',
        key: 'jobnum',
        fiexed: 'left'
      }
      
    ];
          break;
        // 其他情况可以继续添加...
        default:
          this.columns = [];
          break;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
}
}


     

</script>
<style scoped>
@import url('../style/alarm.css');
@import url('../style/moneyview.css');
</style>