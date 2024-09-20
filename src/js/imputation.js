import LeaderLine from '../lib/leader-line-min';
export default {
  name: 'imputation',
  data() {
    return {
      selectedCommissioner: '委办局',
      result: [],
      filteredData: [],
      selectedRange: [],
      commissioners: [],
    }
  },
  computed: {

  },
  methods: {
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
      for (let i = 0; i < this.filteredData.length; i++) {
        const startElement = document.getElementById(`mysql-${i}`);
        const endElement = document.getElementById(`desktop-${i}`);
        if (startElement && endElement) {
          this.createLine(startElement, endElement)
        }
      }
      for (let i = 0; i < this.filteredData.length; i++) {
        const startElement = document.getElementById(`desktop-${i}`);
        const endElement = document.getElementById(`task-${i}`);
        if (startElement && endElement) {
          this.createLine(startElement, endElement)
        }
      }
      for (let i = 0; i < this.filteredData.length; i++) {
        const startElement = document.getElementById(`task-${i}`);
        const endElement = document.getElementById(`imputationResult-${i}`);
        if (startElement && endElement) {
          this.createLine(startElement, endElement)
        }
      }
      for (let i = 0; i < this.filteredData.length; i++) {
        const startElement = document.getElementById(`imputationResult-${i}`);
        const endElement = document.getElementById('hive');
        if (startElement && endElement) {
          this.createLine(startElement, endElement)
        }
      }
    },
    filterByCommissioner() {
      if (this.selectedCommissioner == 1 || this.selectedCommissioner == '') {
        this.filteredData = this.result;
      } else {
        this.filteredData = this.result.filter(item => item.task.commissioner === this.selectedCommissioner);
      }
    },
    filterByTimeRange() {
      // console.log(selectedRange)
      if (this.selectedRange.length > 0) {
        this.filteredData = this.filteredData.filter(item => {
          const executeTime = new Date(item.job.executeTime);
          const startTime = new Date(this.selectedRange[0]);
          const endTime = new Date(this.selectedRange[1]);
          return executeTime >= startTime && executeTime <= endTime;
        });
      } else {
        this.filteredData = this.result;
        this.filterByCommissioner();
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
  mounted() {
    this.axios.get(`${this.$apiBaseUrl}/api/getExtract_Jobs`).then(response => {
      this.result = response.data;
      this.filteredData = this.result
      console.log(this.filteredData)
      this.commissioners = Array.from(new Set(this.filteredData.map(item => item.task.commissioner)));
      console.log(this.commissioners)
      this.$nextTick(() => {
        this.getLine();
      });
    })
  }
}