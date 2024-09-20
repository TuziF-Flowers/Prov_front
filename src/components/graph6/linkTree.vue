<template>
  <!-- <div id="contain"></div> -->
  <div ref="contain" style="width:100%;height:100%">
  </div>
</template>
<script>
import G6 from '@antv/g6';
export default {
  props: {
    graphData: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      graph: null,
    };
  },
  beforeDestroy() {
    console.log('****');
    if (this.graph) {
      this.graph.destroy();
      this.graph = null;
    }
  },
  watch: {
    graphData() {
      this.initGraph();
    },
  },
  mounted() {
    this.initGraph();
  },
  methods: {
    setTypeBasedOnLevel(data) {
      data.type = 'root';
      if (data.mask === 3) data.type = 'level1node';
      if (data.children && data.children.length > 0) {
        data.children.forEach((child) => this.setTypeBasedOnLevel(child));
      }
    },
    initGraph() {
      const colors = {
        B: '#8076a3',
        R: '#F46649',
        Y: '#3f81c1',
        G: '#29AD78',
        DI: '#A7A7A7',
      };
      G6.registerNode('root', {
        draw: (cfg, group) => {
          const size = [80, 20];
          const keyShape = group.addShape('rect', {
            attrs: {
              width: size[0],
              height: size[1],
              x: -size[0] / 2,
              y: -size[1] / 2,
              fill: 'rgb(19, 33, 92)',
              radius: 5,
            },
            draggable: true,
            name: 'root-keyshape',
          });
          group.addShape('text', {
            attrs: {
              text: `${cfg.name}`,
              fill: 'rgba(255, 255, 255, 0.85)',
              fontSize: 9,
              x: -size[0] / 2 + 10,
              y: 5,
            },
            draggable: true,
            name: 'label-shape',
          });
          // group.addShape('line', {
          //   attrs: {
          //     x1: -6,
          //     x2: 35,
          //     y1: 2,
          //     y2: 2,
          //     stroke: 'rgba(255, 255, 255, 0.85)',
          //     lineWidth: 0.5,
          //   },
          //   draggable: true,
          //   name: 'divider-shape',
          // });
          return keyShape;
        },
      });

      // level1 node
      G6.registerNode(
        'level1node',
        {
          draw: (cfg, group) => {
            var size = [120, 56];
            // if (cfg.table == null) size = [120, 60];
            const keyShape = group.addShape('rect', {
              attrs: {
                width: size[0],
                height: size[1],
                x: -size[0] / 2,
                y: -size[1] / 2,
                fill: 'rgb(213, 225, 247)',
                radius: 5,
              },
              draggable: true,
              name: 'level1node-keyshape',
            });
            //LABEL

            group.addShape('text', {
              attrs: {
                text: `${cfg.variableName}`,
                fill: 'rgba(19, 33, 92, 0.65)',
                fontSize: 6,
                x: -50,
                y: -18,
                textAlign: 'left',
              },
              draggable: true,
              name: 'label-shape',
            });
            //SubLabel
            var name =
              cfg.name.length > 13 ? cfg.name.substr(0, 13) + '...' : cfg.name;
            group.addShape('text', {
              attrs: {
                text: name,
                fill: 'rgba(19, 33, 92, 0.65)',
                fontSize: 8,
                x: -50,
                y: -6,
                fontWeight: 800,
                textAlign: 'left',
              },
              draggable: true,
              name: 'sublabel-shape',
            });
            //百分比
            group.addShape('rect', {
              attrs: {
                x: -25,
                y: -3,
                width: 40,
                height: 12,
                radius: 2,
                fill: colors[cfg.status],
              },
              draggable: true,
              name: 'ratio-box',
            });

            var percentTextContent = cfg.variableValue;
            if (cfg.status === 'B' || cfg.status == 'G') {
              percentTextContent = cfg.variableValue + '条';
            }
            //百分比字
            group.addShape('text', {
              attrs: {
                text: percentTextContent,
                fill: 'rgba(255, 255, 255, 0.85)',
                fontSize: 6,
                x: -20,
                y: 1,
                textAlign: 'left',
                textBaseline: 'top',
              },
              draggable: true,
              name: 'ratio-shape',
            });

            group.addShape('rect', {
              attrs: {
                x: -50,
                y: -3,
                width: 25,
                height: 12,
                radius: 2,
                fill: 'rgb(127, 193, 193)',
              },
            });
            group.addShape('text', {
              attrs: {
                text: `${cfg.label}`,
                fill: 'rgba(255, 255, 255, 0.85)',
                fontSize: 6,
                x: -45,
                y: 1,
                textAlign: 'left',
                textBaseline: 'top',
              },
            });
            group.addShape('rect', {
              attrs: {
                x: 15,
                y: -3,
                width: 40,
                height: 12,
                radius: 2,
                fill: 'rgb(220, 124, 125)',
              },
            });
            group.addShape('text', {
              attrs: {
                text: `${cfg.device}`,
                fill: 'rgba(255, 255, 255, 0.85)',
                fontSize: 6,
                x: 17,
                y: 1,
                textAlign: 'left',
                textBaseline: 'top',
              },
            });
            group.addShape('line', {
              attrs: {
                x1: -50,
                x2: 50,
                y1: 13,
                y2: 13,
                stroke: 'rgb(19, 33, 92)',
                lineWidth: 1,
              },
              draggable: true,
              name: 'divider-shape',
            });
            var str =
              cfg.table && cfg.table.length > 32
                ? cfg.table.substr(0, 32) + '...'
                : cfg.table;
            group.addShape('text', {
              attrs: {
                text: str,
                fill: 'rgba(19, 33, 92, 0.65)',
                fontSize: 6,
                x: -50,
                y: 23,
                textAlign: 'left',
              },
            });
            // edge end
            group.addShape('line', {
              attrs: {
                x1: 0,
                x2: 0,
                y1: -size[1] / 2,
                y2: -size[1] / 2,
                lineWidth: 1,
                stroke: 'rgb(19, 33, 92)',
              },
            });
            group.addShape('circle', {
              attrs: {
                r: 2,
                x: 0,
                y: -size[1] / 2,
                fill: 'rgb(19, 33, 92)',
              },
            });
            return keyShape;
          },
          update: undefined,
        },
        'rect'
      );

      // other node
      G6.registerNode(
        'othernode',
        {
          draw: (cfg, group) => {
            const size = [100, 30];
            const keyShape = group.addShape('rect', {
              attrs: {
                width: size[0],
                height: size[1],
                x: -size[0] / 2,
                y: -size[1] / 2,
                fill: 'rgb(213, 225, 247)',
                radius: 5,
              },
              draggable: true,
              name: 'level1node-keyshape',
            });
            group.addShape('text', {
              attrs: {
                text: `${cfg.label}`,
                fill: 'rgba(19, 33, 92, 0.65)',
                fontSize: 6,
                x: 10 - size[0] / 2,
                y: -2,
                textAlign: 'left',
              },
              draggable: true,
              name: 'label-shape',
            });
            group.addShape('text', {
              attrs: {
                text: `${cfg.subLabel}`,
                fill: 'rgba(19, 33, 92, 0.65)',
                fontSize: 8,
                fontWeight: 800,
                x: 10 - size[0] / 2,
                y: 8,
                textAlign: 'left',
              },
              draggable: true,
              name: 'sublabel-shape',
            });
            group.addShape('rect', {
              attrs: {
                x: 12,
                y: -4,
                width: 25,
                height: 8,
                radius: 4,
                fill: cfg.increase
                  ? 'rgb(127, 193, 193)'
                  : 'rgb(220, 124, 125)',
              },
              draggable: true,
              name: 'ratio-box',
            });
            group.addShape('text', {
              attrs: {
                text: `${cfg.ratio}%`,
                fill: 'rgba(255, 255, 255, 0.85)',
                fontSize: 6,
                x: 18,
                y: -3,
                textAlign: 'left',
                textBaseline: 'top',
              },
              draggable: true,
              name: 'ratio-shape',
            });
            if (cfg.operator) {
              group.addShape('rect', {
                attrs: {
                  x: -8,
                  y: 27,
                  width: 16,
                  height: 16,
                  lineWidth: 1,
                  stroke: '#aaa',
                  lineDash: [2, 1],
                  opacity: 0,
                },
                name: 'operator-box',
              });
              group.addShape('circle', {
                attrs: {
                  r: 6,
                  x: 0,
                  y: 35,
                  fill: 'rgba(240, 90, 109, 0.15)',
                },
                name: 'operator-circle',
              });
              group.addShape('text', {
                attrs: {
                  text: cfg.operator,
                  x: 0,
                  y: 34,
                  fontSize: 12,
                  fill: 'rgba(240, 90, 109, 0.85)',
                  textAlign: 'center',
                  textBaseline: 'middle',
                },
                name: 'operator-symbol',
              });
            }

            // edge end
            group.addShape('line', {
              attrs: {
                x1: -size[0] / 2,
                x2: -size[0] / 2 + 6,
                y1: 0,
                y2: 0,
                lineWidth: 1,
                stroke: 'rgb(19, 33, 92)',
              },
            });
            group.addShape('circle', {
              attrs: {
                r: 2,
                x: -size[0] / 2 + 6,
                y: 0,
                fill: 'rgb(19, 33, 92)',
              },
            });
            return keyShape;
          },
          update: undefined,
        },
        'rect'
      );

      // edge
      G6.registerEdge(
        'round-poly',
        {
          getControlPoints: (cfg) => {
            console.log(cfg);
            const { startPoint, endPoint } = cfg;
            return [
              startPoint,
              {
                x: startPoint.x,
                y: startPoint.y,
              },
              endPoint,
            ];
          },
        },
        'polyline'
      );

      this.setTypeBasedOnLevel(this.graphData);
      // G6.Util.traverseTree(data, (subtree) => {
      //   if (subtree.level === undefined) subtree.level = 0;
      //   subtree.children?.forEach((child) => (child.level = subtree.level + 1));
      //   switch (subtree.level) {
      //     case 0:
      //       subtree.type = 'root';
      //       break;
      //     case 1:
      //       subtree.type = 'level1node';
      //       break;
      //     default:
      //       subtree.type = 'level1node';
      //   }
      // });

      const width = contain.scrollWidth;
      const height = (contain.scrollHeight || 500) + 150;
      this.graph = new G6.TreeGraph({
        pixelRatio: 2,
        container: 'contain',
        width,
        height,
        fitView: true,
        layout: {
          type: 'compactBox',
          direction: 'TB',
          getHGap: function getVGap() {
            return 15;
          },
          getHeight: (node) => {
            if (node.mask !== 3) return 20;
            if (node.children[0].mask !== 3) return 20;
            if (node.children.length > 1) return 70;
            return 40;
          },
          getWidth: (node) => {
            return 120;
          },
        },
        defaultEdge: {
          type: 'polyline',
          style: {
            radius: 8,
            stroke: 'rgb(19, 33, 92)',
          },
        },
        defaultNode: {
          anchorPoints: [
            [0.5, 1],
            [0.5, 0],
          ],
        },
        nodeStateStyles: {
          hover: {
            fill: '#fff',
            shadowBlur: 30,
            shadowColor: '#ddd',
          },
          operatorhover: {
            'operator-box': {
              opacity: 1,
            },
          },
        },
        modes: {
          default: ['zoom-canvas', 'drag-canvas', 'collapse-expand'],
        },
      });

      this.graph.on('node:mouseenter', (e) => {
        if (e.target.get('name')?.includes('operator')) {
          this.graph.setItemState(e.item, 'operatorhover', true);
        } else {
          this.graph.setItemState(e.item, 'hover', true);
        }
      });
      this.graph.on('node:mouseleave', (e) => {
        this.graph.setItemState(e.item, 'operatorhover', false);
        this.graph.setItemState(e.item, 'hover', false);
      });

      this.graph.data(this.graphData);
      this.graph.render();
    },
  },
};
</script>
