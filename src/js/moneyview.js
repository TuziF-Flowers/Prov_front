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
      moneyCategories: ['应用','用户','活动','设备','数据'],
      levels: ['一级', '二级'],
      columns: [],
      data: [],
      // columns: [
      //   {
      //     title: '应用编号',
      //     width: 10,
      //     dataIndex: 'xapplication',
      //     key: 'xapplication',
      //     fiexed: 'left'
      //   },
      //   {
      //     title: '应用名称',
      //     width: 10,
      //     dataIndex: 'xapplicationname',
      //     key: 'xapplicationname',
      //     fiexed: 'left'
      //   }
       
      // ],
      // data: [],
    }
  },
  methods: {
      // 根据下拉框选项获取表格数据
      fetchData() {
        if (this.selectedOption1 == '应用' ) { 
          this.axios.get(`${this.$apiBaseUrl}/api/asset/appfirst`).then((response) => {
            this.columns=[
              {
                title: '应用编号',
                width: 10,
                dataIndex: 'xapplication',
                key: 'xapplication',
                fiexed: 'left'
              },
              {
                title: '应用名称',
                width: 10,
                dataIndex: 'xapplicationname',
                key: 'xapplicationname',
                fiexed: 'left'
              }
             
            ];
            this.data = response.data;
          });

        } else if (this.selectedOption1 == '活动' ) {
          this.axios.get(`${this.$apiBaseUrl}/api/asset/activities/manual`).then((response) => {
            this.columns =[
              {
                title: '活动编号',
                width: 10,
                dataIndex: 'activity',
                key: 'activity',
                fiexed: 'left'
              },
              {
                title: '活动名称',
                width: 10,
                dataIndex: 'activityname',
                key: 'activityname',
                fiexed: 'left'
              },
              {
                title: '活动别名',
                width: 10,
                dataIndex: 'activityalias',
                key: 'activityalias',
                fiexed: 'left'
              },
              {
                title: '应用名称',
                width: 10,
                dataIndex: 'xapplicationname',
                key: 'xapplicationname',
                fiexed: 'left'
              }
             
            ],
            this.data = response.data;
          });
        } else if (this.selectedOption1 === '用户' ) {
          this.axios.get(`${this.$apiBaseUrl}/api/asset/name-phone`).then((response) => {
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
              }
            ];
            this.data = response.data;
          });
          
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