import LeaderLine from '../lib/leader-line-min';
export default {
  props: ['id'],
  name: 'Reverse',
  components: {
  },
  data() {
    return {
      result: {}
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
          size: 3,
          // dash: {
          //   // animation: true
          // },
          path: 'straight',
          // startPlug: 'disc',
          endPlug: 'arrow2',
          startPlugSize: 1,
          // endPlugOutline: true,
          // endPlug: 'hand'
        }, options)
      )
    },
    getLine() {
      document.querySelectorAll('.leader-line').forEach(line => line.remove());
      let startElement = document.getElementById('wbTo');
      let endElement = document.getElementById('push');
      this.createLine(endElement, startElement)
      this.result.fusion.forEach((item, index) => {
        if (index == 0) {
          startElement = document.getElementById('push');
          endElement = document.getElementById(`fusion${index}`);
          this.createLine(endElement, startElement)
        } else {
          startElement = document.getElementById(`fusion${index}`);
          endElement = document.getElementById(`fusion${index - 1}`);
          this.createLine(startElement, endElement)
        }
        if (index == this.result.fusion.length - 1) {
          startElement = document.getElementById(`fusion${index}`);
          endElement = document.getElementById('hive3');
          this.createLine(endElement, startElement)
        }
      })
      startElement = document.getElementById('extract');
      endElement = document.getElementById('hive3');
      this.createLine(startElement, endElement)

      startElement = document.getElementById('extract');
      endElement = document.getElementById('mysql3');
      this.createLine(endElement, startElement)

      startElement = document.getElementById('push-1');
      endElement = document.getElementById('extract');
      this.createLine(startElement, endElement, { startSocket: 'bottom', endSocket: 'top' })

      startElement = document.getElementById('push-2');
      endElement = document.getElementById('extract');
      this.createLine(startElement, endElement, { startSocket: 'bottom', endSocket: 'top' })
    },
    handleResize() {
      this.getLine(); // 窗口调整大小时重新绘制线条
    }
  },
  watch: {
    // 监视路由变化，如果参数发生变化，重新获取数据
    // '$route': 'fetchData'
  },
  mounted() {
    let pushId = this.$route.params.id
    this.axios.get(`${this.$apiBaseUrl}/api/getJobBypushId?pushId=${pushId}`)
      .then(response => {
        this.result = response.data;
        this.$nextTick(() => {
          setTimeout(() => {
            this.getLine();
          }, 100);
        });
      }).catch(error => {
        this.error = error;
      })
    window.addEventListener('resize', this.handleResize); // 监听窗口调整大小事件
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize); // 组件销毁前移除事件监听器
  }
}