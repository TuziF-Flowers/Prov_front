import LeaderLine from '../lib/leader-line-min';
import TableColumnsType from 'ant-design-vue';
import axios from 'axios';
// 发起 GET 请求
axios.get(`http://127.0.0.1:8081/api/asset/applications/jobcount`)
  .then(response => {
    data = response.data
  })
  .catch(error => {
    console.error('Error:', error); // 处理错误
  });
export default {
  name: 'inventory',
  components: {
    TableColumnsType
  },
  data() {
    return {
      
      columns: [
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
      columns2: [
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
      columns3: [
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
      data: [],
      data2: [],
      data3:[]
    }
  },
  methods: {

  },
  mounted() {
    document.querySelectorAll('.leader-line').forEach(line => line.remove());
    this.axios.get(`${this.$apiBaseUrl}/api/asset/applications/jobcount`)
    .then(response => {
      this.data = response.data
    })
    document.querySelectorAll('.leader-line').forEach(line => line.remove());
    this.axios.get(`${this.$apiBaseUrl}/api/asset/users/jobcount`)
    .then(response => {
      this.data2 = response.data
    })
    document.querySelectorAll('.leader-line').forEach(line => line.remove());
    this.axios.get(`${this.$apiBaseUrl}/api/asset/userapplication/jobcount`)
    .then(response => {
      this.data3 = response.data
    })
  }
}