import LeaderLine from '../lib/leader-line-min';

export default {
  name: 'FlowCharts',
  components: {
  },
  data() {
    return {
      desktopUrl: '/desktop-active.svg',
      selectedType: '',
      selectedCommissioner: '',
      commissioners: [],
      commissioners_from: [],
      commissioners_to: [],
      selectedRange: [],
      table_data: [],
      filteredData: [],
      flow_data: [],
      left_data: [],
      right_data: [],
      weiban: [{
        weiban_id: 123,
        name: 'one'
      }, {
        weiban_id: 456,
        name: 'one'
      }, {
        weiban_id: 789,
        name: 'one'
      }],
      columns: [
        {
          title: '序号',
          width: 50,
          dataIndex: 'index',
          key: 'index',
          fiexed: 'center'
        },
        {
          title: '时间',
          width: 100,
          dataIndex: 'startTime',
          key: 'startTime',
          fiexed: 'left'
        },
        {
          title: '事件',
          width: 200,
          dataIndex: 'taskName',
          key: 'taskName',
          fiexed: 'left'
        },
        {
          title: '结束时间',
          width: 100,
          dataIndex: 'endTime',
          key: 'endTime',
          fiexed: 'left'
        },
        {
          title: '执行时长',
          width: 100,
          dataIndex: 'totalTime',
          key: 'totalTime',
          fiexed: 'left'
        },
        {
          title: '读写成功数/条',
          width: 100,
          dataIndex: 'recordCnt',
          key: 'recordCnt',
          fiexed: 'left'
        },
        {
          title: '事件状态',
          width: 100,
          dataIndex: 'status',
          key: 'status',
          fiexed: 'left'
        },
        {
          title: '追踪',
          width: 100,
          key: 'load',
          fiexed: 'left'
        }
      ],
    }
  },
  methods: {
    selectTaskType() {
      if (this.selectedType == 1) {
        this.filteredData = this.flow_data
        //筛选归集
        this.getLine()
        this.commissioners = this.commissioners_from
      } else if (this.selectedType == 2) {
        this.filteredData = this.flow_data
        //筛选融合
        this.commissioners = this.commissioners_to
        this.$nextTick(() => {
          this.getLine();
        });
      } else if (this.selectedType == 3) {
        this.filteredData = this.flow_data
        //筛选推送
        this.commissioners = this.commissioners_to
        this.$nextTick(() => {
          this.getLine();
        });
      } else {
        this.filteredData = this.flow_data
        this.$nextTick(() => {
          this.getLine();
        });
      }
    },
    createLine(element1, element2, options) {
      return new LeaderLine(
        element1, element2,
        Object.assign({
          color: '#8c8c8c',
          start: 'parent',
          end: 'parent',
          size: 2,
          dash: {
            // animation: true
          },
          path: 'straight',
          startSocket: 'right',
          endSocket: 'left',
          startPlug: 'disc',
          endPlug: 'arrow2',
          startPlugSize: 1
          // endPlug: 'hand'
        }, options)
      )
    },
    getLine() {
      document.querySelectorAll('.leader-line').forEach(line => line.remove());
      console.log('getline')
      for (let i = 0; i < this.left_data.length; i++) {
        const startElement = document.getElementById(`mysql-${i}`);
        const endElement = document.getElementById(`desktop-${i}`);
        if (startElement && endElement) {
          this.createLine(startElement, endElement)
        }
      }
      for (let i = 0; i < this.left_data.length; i++) {
        const startElement = document.getElementById(`desktop-${i}`);
        const endElement = document.getElementById(`task-${i}`);
        if (startElement && endElement) {
          this.createLine(startElement, endElement)
        }
      }
      for (let i = 0; i < this.left_data.length; i++) {
        const startElement = document.getElementById(`task-${i}`);
        const endElement = document.getElementById(`imputationResult-${i}`);
        if (startElement && endElement) {
          this.createLine(startElement, endElement)
        }
      }
      for (let i = 0; i < this.left_data.length; i++) {
        const startElement = document.getElementById(`imputationResult-${i}`);
        const endElement = document.getElementById('hive');
        if (startElement && endElement) {
          this.createLine(startElement, endElement)
        }
      }
      for (let i = 0; i < this.right_data.length; i++) {
        const startElement = document.getElementById('hive');
        const endElement = document.getElementById(`r1-${i}`);
        console.log(`r1-${i}`)
        if (startElement && endElement) {
          this.createLine(startElement, endElement)
        }
      }
      var startElement = document.getElementById('r1-0');
      var endElement = document.getElementById('r1-00');
      this.createLine(startElement, endElement)

      startElement = document.getElementById('r1-0');
      endElement = document.getElementById('r1-01');
      this.createLine(startElement, endElement)

      startElement = document.getElementById('r1-1');
      endElement = document.getElementById('r1-10');
      this.createLine(startElement, endElement)

      startElement = document.getElementById('r1-2');
      endElement = document.getElementById('r1-20');
      this.createLine(startElement, endElement)
      startElement = document.getElementById('r1-2');
      endElement = document.getElementById('r1-21');
      this.createLine(startElement, endElement)

      var startElement = document.getElementById('r1-0');
      var endElement = document.getElementById('r1-00');
      this.createLine(startElement, endElement)

      startElement = document.getElementById('r1-0');
      endElement = document.getElementById('r1-01');
      this.createLine(startElement, endElement)

      startElement = document.getElementById('r1-1');
      endElement = document.getElementById('r1-10');
      this.createLine(startElement, endElement)

      startElement = document.getElementById('r1-2');
      endElement = document.getElementById('r1-20');
      this.createLine(startElement, endElement)
      startElement = document.getElementById('r1-2');
      endElement = document.getElementById('r1-21');
      this.createLine(startElement, endElement)

      var startElement = document.getElementById('r1-0');
      var endElement = document.getElementById('r1-00');
      this.createLine(startElement, endElement)

      startElement = document.getElementById('r1-0');
      endElement = document.getElementById('r1-01');
      this.createLine(startElement, endElement)

      startElement = document.getElementById('r1-1');
      endElement = document.getElementById('r1-10');
      this.createLine(startElement, endElement)

      startElement = document.getElementById('r1-2');
      endElement = document.getElementById('r1-20');
      this.createLine(startElement, endElement)
      startElement = document.getElementById('r1-2');
      endElement = document.getElementById('r1-21');
      this.createLine(startElement, endElement)

      var startElement = document.getElementById('r1-00');
      var endElement = document.getElementById('r3-00');
      this.createLine(startElement, endElement)

      startElement = document.getElementById('r1-01');
      endElement = document.getElementById('r3-01');
      this.createLine(startElement, endElement)

      startElement = document.getElementById('r1-10');
      endElement = document.getElementById('r3-10');
      this.createLine(startElement, endElement)

      startElement = document.getElementById('r1-20');
      endElement = document.getElementById('r3-20');
      this.createLine(startElement, endElement)
      startElement = document.getElementById('r1-21');
      endElement = document.getElementById('r3-21');
      this.createLine(startElement, endElement)

      // this.right_data.forEach((item, index) => {
      //   if (item.fusion != null) {
      //     let startElement = document.getElementById('hive');
      //     let endElement = document.getElementById(`r1-${index}0`);
      //     this.createLine(startElement, endElement)
      //     item.fusion.forEach((task, num) => {
      //       startElement = document.getElementById(`r1-${index}${num}`)
      //       if (num < item.fusion.length - 1) {
      //         endElement = document.getElementById(`r1-${index}${num + 1}`)
      //         if (startElement && endElement) {
      //           this.createLine(startElement, endElement)
      //         }
      //       }
      //     })
      //     startElement = document.getElementById(`task3-${index}`);
      //     if (startElement && endElement) {
      //       this.createLine(endElement, startElement)
      //     }
      //   }
      // })
      // for (let i = 0; i < this.right_data.length; i++) {
      //   const startElement = document.getElementById(`task3-${i}`);
      //   const endElement = document.getElementById(`imputationResult2-${i}`);
      //   if (startElement && endElement) {
      //     this.createLine(startElement, endElement)
      //   }
      // }
    },
    handleResize() {
      this.getLine();
    },
    filterByCommissioner() {
      if (this.selectedCommissioner == 1 || this.selectedCommissioner == '') {
        this.filteredData = this.flow_data;
      } else {
        // 否则，只显示选定委办局的任务
        if (this.selectedType == 1) {
          this.filteredData = this.flow_data.filter(item => item.wbFrom === this.selectedCommissioner);
        } else {
          this.filteredData = this.flow_data.filter(item => item.wbTo === this.selectedCommissioner)
        }
      }
    },
    filterByTimeRange() {
      // console.log(selectedRange)
      if (this.selectedRange.length > 0) {
        if (this.selectedType == 1) {
          this.filteredData = this.flow_data.filter(item => {
            const executeTime = new Date(item.extract.job.executeTime);
            const startTime = new Date(this.selectedRange[0]);
            const endTime = new Date(this.selectedRange[1]);
            return executeTime >= startTime && executeTime <= endTime;
          });
        } else {
          this.filteredData = this.flow_data.filter(item => {
            console.log(item)
            if (item.push === null) return null;
            else {
              const executeTime = new Date(item.push.job.executeTime);
              const startTime = new Date(this.selectedRange[0]);
              const endTime = new Date(this.selectedRange[1]);
              return executeTime >= startTime && executeTime <= endTime;
            }
          });
        }
      }
    },
    filterData() {
      this.filterByCommissioner();
      this.filterByTimeRange();
      this.$nextTick(() => {
        this.getLine();
      });
    }
  },
  computed: {
    displayedTaskData() {
      // 如果fusionTask_data的长度大于要展示的条目数量，截取前十条数据；否则返回全部数据
      return this.flow_data.length > 10 ?
        this.flow_data.slice(0, 10) :
        this.flow_data;
    }
  },
  mounted() {
    this.axios.get(`${this.$apiBaseUrl}/api/getExtract_Jobs`)
      .then(response => {
        this.left_data = response.data;
        // console.log(this.left_data)
        this.axios.get(`${this.$apiBaseUrl}/api/getPush_Jobs`)
          .then(response => {
            this.right_data = response.data;
            console.log(this.right_data)
            this.$nextTick(() => {
              this.getLine();
            });
          }).catch(error => {
            this.error = error;
          })
        // this.axios.get(`${this.$apiBaseUrl}/api/getAllByTime`)
        //   .then(response => {
        //     this.table_data = response.data;
        //     this.table_data.forEach((item, index) => {
        //       item.index = index + 1
        //     })
        //   }).catch(error => {
        //     this.error = error;
        //   })
        // this.filteredData = this.flow_data;
        // this.commissioners_from = Array.from(new Set(this.filteredData.map(item => item.wbFrom)));
        // this.commissioners_to = Array.from(new Set(this.filteredData.map(item => item.wbTo)));
        // this.filterData()
        this.$nextTick(() => {
          this.getLine();
        });
      }).catch(error => {
        this.error = error;
      })

    window.addEventListener('resize', this.handleResize); // 监听窗口调整大小事件
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize); // 组件销毁前移除事件监听器
  }
};