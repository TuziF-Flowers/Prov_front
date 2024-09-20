import LeaderLine from '../lib/leader-line-min';
export default {
  name: 'Fusion',
  data() {
    return {
      selectedCommissioner: '委办局',
      result: [],
      right_data: [],
      filteredData: [],
      commissioners: [],
      selectedRange: [],
      jobs: []
    }
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
    },
    filterByCommissioner() {
      if (this.selectedCommissioner == 1 || this.selectedCommissioner == '') {
        this.filteredData = this.result;
      } else {
        this.filteredData = this.result.filter(item => item.wbTo === this.selectedCommissioner);
      }
    },
    filterByTimeRange() {
      if (this.selectedRange.length > 0) {
        this.filteredData = this.filteredData.filter(item => {
          const executeTime = new Date(item.push.job.executeTime);
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
    this.axios.get(`${this.$apiBaseUrl}/api/getPush_Jobs`).then(response => {
      this.result = response.data;
      this.filteredData = this.result
      this.right_data = this.result
      this.commissioners = Array.from(new Set(this.filteredData.map(item => item.wbTo)));
      this.$nextTick(() => {
        this.getLine();
      });
    }).catch(error => {
      this.error = error;
    })
    this.axios.get(`${this.$apiBaseUrl}/api/getPushByTime`).then(response => {
      this.jobs = response.data;
    })
  }
}
