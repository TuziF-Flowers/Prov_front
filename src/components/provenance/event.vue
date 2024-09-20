<template>
  <div ref="event_graph" style="margin:10px;height:940px;"></div>
</template>

<script>
import G6 from '@antv/g6';
import insertCss from 'insert-css';
export default {
  mounted() {
    this.initGraph();
  },
  methods: {
    initGraph() {
      const colors = {
        D: '#C6E5FF',
        H: '#cdedd5',
        M: '#ced2e8',
      };
      const strides = {
        D: '#5B8FF9',
        H: '#2aa515',
        M: '#594d9c',
      };
      const data = {
        nodes: [
          {
            id: '964',
            // dataType: 'alps',
            name: 'submit',
            conf: {
              jobid: '9026143131',
              typeid: '0',
              tasktype: '23',
              time: '2024-05-29 03:40:05',
            },
            status: 'D',
          },
          {
            id: '977',
            // dataType: 'feature_extractor',
            name: 'start',
            conf: {
              jobid: '9026143131',
              typeid: '1',
              tasktype: '23',
              time: '2024-05-29 03:40:06',
            },
            status: 'D',
          },
          {
            id: '965',
            // dataType: 'alps',
            name: 'prepare',
            conf: {
              jobid: '9026143131',
              typeid: '2',
              tasktype: '23',
              time: '2024-05-29 03:40:08.685',
            },
            status: 'D',
          },
          {
            id: '966',
            // dataType: 'sql',
            name: 'connect_read',
            conf: {
              jobid: '9026143131',
              typeid: '3',
              tasktype: '23',
              time: '2024-05-29 03:40:08.686',
            },
            status: 'D',
          },
          {
            id: '967',
            // dataType: 'sql',
            name: 'connect_write',
            conf: {
              jobid: '9026143131',
              typeid: '4',
              tasktype: '23',
              time: '2024-05-29 03:40:08.686',
            },
            status: 'D',
          },
          {
            id: '968',
            // dataType: 'feature_etl',
            name: 'run',
            conf: {
              jobid: '9026143131',
              typeid: '5',
              tasktype: '23',
              time: '2024-05-29 03:40:08.825',
            },
            status: 'D',
          },
          {
            id: '969',
            // dataType: 'feature_extractor',
            name: 'createThread_read',
            conf: {
              jobid: '9026143131',
              typeid: '6',
              tasktype: '23',
              time: '2024-05-29 03:40:08.881',
            },
            status: 'D',
          },
          {
            id: '970',
            // dataType: 'feature_extractor',
            name: 'createThread_write',
            conf: {
              jobid: '9026143131',
              typeid: '7',
              tasktype: '23',
              time: '2024-05-29 03:40:08.881',
            },
            status: 'D',
          },
          {
            id: '9731',
            // dataType: 'feature_extractor',
            name: 'start_read',
            conf: {
              jobid: '9026143131',
              typeid: '10',
              tasktype: '23',
              time: '2024-05-29 03:41:09.014',
            },
            status: 'D',
          },
          {
            id: '9742',
            // dataType: 'feature_extractor',
            name: 'start_write',
            conf: {
              jobid: '9026143131',
              typeid: '11',
              tasktype: '23',
              time: '2024-05-29 03:41:09.739',
            },
            status: 'D',
          },
          {
            id: '973',
            // dataType: 'feature_extractor',
            name: 'end_write',
            conf: {
              jobid: '9026143131',
              typeid: '10',
              tasktype: '23',
              time: '2024-05-29 03:41:09.014',
            },
            status: 'D',
          },
          {
            id: '974',
            // dataType: 'feature_extractor',
            name: 'end_read',
            conf: {
              jobid: '9026143131',
              typeid: '11',
              tasktype: '23',
              time: '2024-05-29 03:41:09.739',
            },
            status: 'D',
          },
          {
            id: '975',
            // dataType: 'feature_extractor',
            name: 'destroy',
            conf: {
              jobid: '9026143131',
              typeid: '12',
              tasktype: '23',
              time: '2024-05-29 03:41:09.740',
            },
            status: 'D',
          },
          {
            id: '982',
            // dataType: 'feature_extractor',
            name: 'connect_hive',
            conf: {
              jobid: '9026143131',
              typeid: '1',
              tasktype: '23',
              time: '2024-05-29 03:40:06',
            },
            status: 'H',
          },
          {
            id: '983',
            // dataType: 'feature_extractor',
            name: 'query_hive',
            conf: {
              jobid: '9026143131',
              typeid: '1',
              tasktype: '23',
              time: '2024-05-29 03:40:06',
            },
            status: 'H',
          },

          {
            id: '980',
            // dataType: 'feature_extractor',
            name: 'connect_mysql',
            conf: {
              jobid: '9026143131',
              typeid: '1',
              tasktype: '23',
              time: '2024-05-29 03:40:06',
            },
            status: 'M',
          },
          {
            id: '981',
            // dataType: 'feature_extractor',
            name: 'query_mysql',
            conf: {
              jobid: '9026143131',
              typeid: '1',
              tasktype: '23',
              time: '2024-05-29 03:40:06',
            },
            status: 'M',
          },
          {
            id: '990',
            // dataType: 'feature_extractor',
            name: 'finish',
            conf: {
              jobid: '9026143131',
              typeid: '1',
              tasktype: '23',
              time: '2024-05-29 03:40:06',
            },
            status: 'D',
          },
        ],
        edges: [
          {
            source: '966',
            target: '980',
          },
          {
            source: '980',
            target: '981',
          },
          {
            source: '964',
            target: '977',
          },
          {
            source: '977',
            target: '965',
          },
          {
            source: '965',
            target: '966',
          },
          {
            source: '965',
            target: '967',
          },
          {
            source: '966',
            target: '968',
          },
          {
            source: '967',
            target: '968',
          },
          {
            source: '968',
            target: '969',
          },
          {
            source: '968',
            target: '970',
          },
          {
            source: '973',
            target: '975',
          },
          {
            source: '974',
            target: '975',
          },
          {
            source: '969',
            target: '9731',
          },
          {
            source: '970',
            target: '9742',
          },

          {
            source: '967',
            target: '982',
          },
          {
            source: '982',
            target: '983',
          },
          {
            source: '981',
            target: '974',
          },
          {
            source: '983',
            target: '973',
          },
          //9731 974
          //9742 973
          {
            source: '9731',
            target: '981',
          },
          {
            source: '9742',
            target: '983',
          },
          {
            source: '975',
            target: '990',
          },
        ],
      };

      G6.registerNode(
        'sql',
        {
          drawShape(cfg, group) {
            const {
              name = '',
              conf: { jobid, typeid, tasktype, time },
              status,
            } = cfg;
            const rect = group.addShape('rect', {
              attrs: {
                x: -75,
                y: -25,
                width: 150,
                height: 50,
                radius: 10,
                stroke: strides[status],
                fill: colors[status],
                lineWidth: 3,
              },
              name: 'rect-shape',
            });
            if (cfg.name) {
              group.addShape('text', {
                attrs: {
                  text: cfg.name,
                  x: 0,
                  y: 0,
                  fill: '#00287E',
                  fontSize: 14,
                  textAlign: 'center',
                  textBaseline: 'middle',
                  fontWeight: 'bold',
                },
                name: 'text-shape',
              });
            }
            return rect;
          },
        },
        'single-node'
      );

      const container = this.$refs.event_graph;
      // const container = document.getElementById('event_graph');
      const width = container.scrollWidth;
      const height = container.scrollHeight || 700;
      const graph = new G6.Graph({
        container,
        width,
        height,
        layout: {
          type: 'dagre',
          nodesepFunc: (d) => {
            if (d.id === '3') {
              return 500;
            }
            return 50;
          },
          ranksep: 30,
          controlPoints: true,
          sortByCombo: true,
        },
        defaultNode: {
          type: 'sql',
        },
        defaultEdge: {
          type: 'polyline',
          style: {
            radius: 20,
            offset: 25,
            endArrow: true,
            lineWidth: 2,
            stroke: '#C2C8D5',
          },
        },
        nodeStateStyles: {
          selected: {
            stroke: '#e0620d',
            fill: '#fbd6b2',
          },
        },
        modes: {
          default: [
            'drag-canvas',
            'zoom-canvas',
            'click-select',
            {
              type: 'tooltip',
              formatText(model) {
                // const cfg = model.conf;
                console.log(model);
                const text = [];
                text.push('time:' + model.conf.time + '<br>');

                // cfg.forEach((row) => {
                //   text.push('time:' + row.time + '<br>');
                // });
                return text.join('\n');
              },
              offset: 30,
            },
          ],
        },
        fitView: true,
      });
      graph.data(data);
      graph.render();

      if (typeof window !== 'undefined')
        window.onresize = () => {
          if (!graph || graph.get('destroyed')) return;
          if (!container || !container.scrollWidth || !container.scrollHeight)
            return;
          graph.changeSize(container.scrollWidth, container.scrollHeight);
        };
    },
  },
};
</script>
