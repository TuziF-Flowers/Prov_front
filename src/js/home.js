import { Steps, Step, Button } from 'ant-design-vue'
export default {
  name: 'Home',
  components: {
    Steps,
    Step,
    Button
  },
  data() {
    return {
      current: 4,
      data_json: {
        username: 'cyx',
        startTime: '20210131 13:52',
        userip: '192.168.137.2',
        dataSourse: {
          status: 0,
          databaseName: 'MySQL:text1',
          tableName: 'student',
          command: 'QUERY',
          arguments: 'SELECT * FROM student',
          result: {
            result_id: 12345678,
            message: 'successfully,查询成功',
            size: '51bytes',
            entryCnt: '3',
          },
        },
        dataPool: {
          status: 0,
          databaseName: 'HIVE:test2',
          partition: 'BUTTER',
          command: 'LOAD',
          arguments: '*******',
          result: {
            result_id: 87654321,
            message: 'successfully,装载成功',
            size: '51bytes',
            entryCnt: '3',
            WithTime: '31 seconds',
          },
        },
      },
      showDot0: false,
      showDot1: false,
      showDot2: false,
      showDot3: false,
      showDot4: false,
      showDot5: false,
      showDot6: false,
      showDot7: false,
      showDot8: false
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
      }, 12000);
    },
    dotCycle() {
      //0 1s
      this.showDot0 = true;
      this.showDot8 = false;
      setTimeout(() => {
        //1 1s
        this.showDot0 = false;
        this.showDot1 = true;
      }, 1000);
      setTimeout(() => {
        //2 1s
        this.showDot1 = false;
        this.showDot2 = true;
      }, 2000);
      setTimeout(() => {
        //3 1s
        this.showDot2 = false;
        this.showDot3 = true;
      }, 3000);
      setTimeout(() => {
        //4 2s
        this.showDot3 = false;
        this.showDot4 = true;
      }, 4000);
      setTimeout(() => {
        //5 2s
        this.showDot4 = false;
        this.showDot5 = true;
      }, 6000);
      setTimeout(() => {
        //6 1s
        this.showDot5 = false;
        this.showDot6 = true;
      }, 8000);
      setTimeout(() => {
        //7 1s
        this.showDot6 = false;
        this.showDot7 = true;
      }, 9000);
      setTimeout(() => {
        //8 2s
        this.showDot7 = false;
        this.showDot8 = true;
      }, 10000);
      setTimeout(() => {
        //8 2s
        this.showDot7 = false;
        this.showDot8 = false;
      }, 12000);
    },
  }
};