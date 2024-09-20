<template>
  <div ref="container" style="margin:10px;width:100%;height:95%"></div>
</template>

<script>
import G6 from '@antv/g6';
export default {
  props: {
    graphData: {
      required: true,
      type: Object,
    },
    type: {
      type: String,
    },
  },
  mounted() {
    this.initGraph();
  },
  watch: {
    graphData() {
      this.initGraph();
    },
  },
  methods: {
    setTypeBasedOnLevel(data) {
      data.type = 'flow-rect';
      if (data.mask === 1) data.type = 'iconText';
      if (data.mask === 2) data.type = 'iconText';
      if (data.mask === 4 || data.mask === 5) data.type = 'iconText';
      if (data.children && data.children.length > 0) {
        data.children.forEach((child) => this.setTypeBasedOnLevel(child));
      }
    },
    initGraph() {
      const colors = {
        B: '#8076a3',
        R: '#F46649',
        Y: '#038ABE',
        G: '#29AD78',
        DI: '#A7A7A7',
      };

      //  组件props
      const props = {
        data: this.graphData,
        config: {
          padding: [20, 50],
          defaultLevel: 4,
          defaultZoom: 0.8,
          modes: { default: ['zoom-canvas', 'drag-canvas'] },
        },
      };
      const container = this.$refs.container;
      // const container = document.getElementById('container');
      const width = container.scrollWidth;
      const height = container.scrollHeight || 700;
      // 默认配置
      const defaultConfig = {
        width,
        height,
        pixelRatio: 3,
        modes: {
          default: ['zoom-canvas', 'drag-canvas'],
        },
        fitView: true,
        animate: true,
        defaultNode: {
          type: 'flow-rect',
        },
        defaultEdge: {
          type: 'cubic-horizontal',
          style: {
            stroke: '#CED4D9',
          },
        },
        layout: {
          type: 'compactBox',
          direction: this.type,
          nodeSep: 250,
          rankSep: 100,
          getHeight: () => {
            return 110;
          },
          getWidth: (node) => {
            if (node.mask === 1) return 80;
            if (node.mask === 2) return 150;
            if (node.mask === 4) return 150;
            return 300;
          },
        },
      };
      // const level = 0;
      const registerFn = () => {
        G6.registerNode(
          'flow-rect',
          {
            shapeType: 'flow-rect',
            draw(cfg, group) {
              const {
                name = '',
                variableName,
                variableValue,
                variableUp,
                label,
                table,
                user,
                device,
                collapsed,
                currency,
                status,
              } = cfg;
              const grey = '#CED4D9';
              const rectConfig = {
                width: 300,
                height: 130,
                lineWidth: 1,
                // fontWeight: 900,
                fontSize: 12,
                shadowOffsetX: 5,
                shadowOffsetY: 5,
                shadowColor: colors[status],
                shadowBlur: 10,
                // fill: 'rgb(213, 225, 247)',
                fill: colors[status],
                radius: 10,
                stroke: grey,
                opacity: 0.6,
              };
              const nodeOrigin = {
                x: -rectConfig.width / 2 + 50,
                y: -rectConfig.height / 2,
              };

              const textConfig = {
                textAlign: 'left',
                textBaseline: 'bottom',
              };

              const rect = group.addShape('rect', {
                attrs: {
                  x: nodeOrigin.x,
                  y: nodeOrigin.y,
                  ...rectConfig,
                },
              });

              const rectBBox = rect.getBBox();
              // label title标题
              group.addShape('text', {
                attrs: {
                  ...textConfig,
                  x: 12 + nodeOrigin.x,
                  y: 20 + nodeOrigin.y,
                  text: name.length > 13 ? name.substr(0, 13) + '...' : name,
                  fontSize: 18,
                  opacity: 0.65,
                  textBaseline: 'top',
                  fill: '#fff',
                  lineHeight: 40,
                  cursor: 'pointer',
                },
                name: 'name-shape',
              });
              // device和user行
              const devices = group.addShape('text', {
                attrs: {
                  ...textConfig,
                  x: 12 + nodeOrigin.x,
                  y: 65 + nodeOrigin.y,
                  text: device,
                  fontSize: 15,
                  fill: '#e2e1e4',
                  opacity: 0.85,
                },
              });
              // user
              // group.addShape('text', {
              //   attrs: {
              //     ...textConfig,
              //     x: devices.getBBox().maxX + 5,
              //     y: 65 + nodeOrigin.y,
              //     text: user,
              //     fontSize: 15,
              //     fill: '#e2e1e4',
              //     opacity: 0.85,
              //   },
              // });
              // price
              const price = group.addShape('text', {
                attrs: {
                  ...textConfig,
                  x: 12 + nodeOrigin.x,
                  y: rectBBox.maxY - 40,
                  text: label,
                  fontSize: 16,
                  // fill: colors[status],
                  fill: '#e2e1e4',
                  opacity: 0.85,
                },
              });
              // label currency
              group.addShape('text', {
                attrs: {
                  ...textConfig,
                  x: price.getBBox().maxX + 5,
                  y: rectBBox.maxY - 40,
                  text: currency,
                  fontSize: 12,
                  // fill: '#000',
                  fill: '#fff',
                  opacity: 0.75,
                },
              });

              var percentTextContent = '条';
              if (status === 'Y') {
                percentTextContent = '';
              }
              // percentage
              const percentText = group.addShape('text', {
                attrs: {
                  ...textConfig,
                  x: rectBBox.maxX - 8,
                  y: rectBBox.maxY - 40,
                  text: `${variableValue || 0}${percentTextContent}`,
                  fontSize: 12,
                  textAlign: 'right',
                  // fill: colors[status],
                  fill: '#fff',
                },
              });

              // percentage triangle
              const symbol = variableUp ? 'triangle' : 'triangle-down';
              const triangle = group.addShape('marker', {
                attrs: {
                  ...textConfig,
                  x: percentText.getBBox().minX - 10,
                  y: rectBBox.maxY - 40 - 6,
                  symbol,
                  r: 6,
                  // fill: colors[status],
                  fill: '#fff',
                },
              });
              group.addShape('rect', {
                attrs: {
                  x: nodeOrigin.x,
                  y: rectBBox.maxY - 4,
                  width: rectConfig.width,
                  height: 4,
                  radius: [0, 0, rectConfig.radius, rectConfig.radius],
                  fill: '#E0DFE3',
                },
              });
              // table
              var str = table;
              if (table && table.length > 30) {
                str = table.substr(0, 30) + '...';
              }
              group.addShape('text', {
                attrs: {
                  ...textConfig,
                  x: 12 + nodeOrigin.x,
                  y: rectBBox.maxY - 12,
                  text: str,
                  fontSize: 15,
                  fill: '#fff',
                  opacity: 0.45,
                },
              });
              // bottom percent
              group.addShape('rect', {
                attrs: {
                  x: nodeOrigin.x,
                  y: rectBBox.maxY - 4,
                  width: 1 * rectBBox.width,
                  height: 4,
                  radius: [0, 0, 0, rectConfig.radius],
                  fill: colors[status],
                  // fill: '#fff',
                },
              });
              // variable name浅灰的字——时间
              group.addShape('text', {
                attrs: {
                  ...textConfig,
                  x: triangle.getBBox().minX - 4,
                  y: rectBBox.maxY - 40,
                  text: variableName,
                  fontSize: 12,
                  textAlign: 'right',
                  // fill: '#000',
                  fill: '#fff',
                  opacity: 0.45,
                },
              });
              // collapse rect
              if (cfg.children && cfg.children.length) {
                group.addShape('rect', {
                  attrs: {
                    x: rectConfig.width / 2 + 40,
                    y: -8,
                    width: 16,
                    height: 16,
                    stroke: 'rgba(0, 0, 0, 0.25)',
                    cursor: 'pointer',
                    fill: '#fff',
                  },
                  // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
                  name: 'collapse-back',
                  modelId: cfg.id,
                });

                // collpase text
                group.addShape('text', {
                  attrs: {
                    x: rectConfig.width / 2 + 48,
                    y: -1,
                    textAlign: 'center',
                    textBaseline: 'middle',
                    text: collapsed ? '+' : '-',
                    fontSize: 16,
                    cursor: 'pointer',
                    fill: 'rgba(0, 0, 0, 0.25)',
                  },
                  // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
                  name: 'collapse-text',
                  modelId: cfg.id,
                });
              }
              if (cfg.id === 'g1') {
                // 返回一个透明的矩形作为根节点的占位符
                return group.addShape('rect', {
                  attrs: {
                    x: 0,
                    y: 0,
                    width: 1,
                    height: 0,
                    fill: '#fff', // 透明颜色
                    opacity: 0, // 设置为0使其完全透明
                  },
                });
              }
              this.drawLinkPoints(cfg, group);
              return rect;
            },
            update(cfg, item) {
              const { level, status, name } = cfg;
              const group = item.getContainer();
              let mask = group.find((ele) => ele.get('name') === 'mask-shape');
              let maskLabel = group.find(
                (ele) => ele.get('name') === 'mask-label-shape'
              );
              if (level === 0) {
                group.get('children').forEach((child) => {
                  if (
                    child.get('name') &&
                    child.get('name').includes('collapse')
                  )
                    return;
                  child.hide();
                });
                if (!mask) {
                  mask = group.addShape('rect', {
                    attrs: {
                      x: -105,
                      y: -30,
                      width: 270,
                      height: 60,
                      opacity: 0,
                      fill: colors[status],
                    },
                    name: 'mask-shape',
                  });
                  maskLabel = group.addShape('text', {
                    attrs: {
                      fill: '#fff',
                      fontSize: 18,
                      x: 25,
                      y: 10,
                      text:
                        name.length > 14 ? name.substr(0, 14) + '...' : name,
                      textAlign: 'center',
                      opacity: 0,
                    },
                    name: 'mask-label-shape',
                  });
                  const collapseRect = group.find(
                    (ele) => ele.get('name') === 'collapse-back'
                  );
                  const collapseText = group.find(
                    (ele) => ele.get('name') === 'collapse-text'
                  );
                  collapseRect.toFront();
                  collapseText.toFront();
                } else {
                  mask.show();
                  maskLabel.show();
                }
                mask.animate({ opacity: 1 }, 200);
                maskLabel.animate({ opacity: 1 }, 200);
                return mask;
              } else {
                group.get('children').forEach((child) => {
                  if (
                    child.get('name') &&
                    child.get('name').includes('collapse')
                  )
                    return;
                  child.show();
                });
                mask.animate(
                  { opacity: 0 },
                  {
                    duration: 200,
                    callback: () => mask.hide(),
                  }
                );
                maskLabel.animate(
                  { opacity: 0 },
                  {
                    duration: 200,
                    callback: () => maskLabel.hide(),
                  }
                );
              }
              this.updateLinkPoints(cfg, group);
            },
            setState(name, value, item) {
              if (name === 'collapse') {
                const group = item.getContainer();
                const collapseText = group.find(
                  (e) => e.get('name') === 'collapse-text'
                );
                if (collapseText) {
                  if (!value) {
                    collapseText.attr({
                      text: '-',
                    });
                  } else {
                    collapseText.attr({
                      text: '+',
                    });
                  }
                }
              }
            },
            getAnchorPoints() {
              return [
                [0, 0.5],
                [1, 0.5],
              ];
            },
          },
          'rect'
        );
        G6.registerNode('iconText', {
          draw(cfg, group) {
            const size = [60, 60];
            var icon = '/database.svg';
            if (cfg.mask === 2) {
              icon = '/desktop.svg';
            } else if (cfg.mask === 4) {
              icon = '/hive.svg';
            } else if (cfg.mask === 5) {
              icon = '/weiban.svg';
            }
            // console.log(icon);
            const label = cfg.label;
            // 绘制图标
            group.addShape('image', {
              attrs: {
                x: -size[0] / 2,
                y: -size[1] / 2 - 17,
                width: size[0],
                height: size[1],
                img: icon,
              },
              name: 'node-icon',
            });
            // 绘制文本标签
            group.addShape('text', {
              attrs: {
                x: 0,
                y: size[1] / 2,
                textAlign: 'center',
                textBaseline: 'top',
                text: label,
                fill: '#fff',
                fontSize: 16,
              },
              name: 'node-label',
            });
            // group.addShape('text', {
            //   attrs: {
            //     x: 0,
            //     y: size[1] / 2 + 20,
            //     textAlign: 'center',
            //     textBaseline: 'top',
            //     text: '数据量:',
            //     fill: '#fff',
            //     fontSize: 16,
            //   },
            //   name: 'node-labell',
            // });
            return group;
          },
        });
        G6.registerEdge(
          'flow-cubic',
          {
            draw(cfg, group) {
              if (cfg.source === 'g1') {
                return [];
              }
              const startPoint = cfg.startPoint;
              const endPoint = cfg.endPoint;
              // 动态计算长度，例如简单地将长度减半
              const midPoint = {
                x: (startPoint.x + endPoint.x) / 2,
                y: (startPoint.y + endPoint.y) / 2,
              };
              if (cfg.source.level === 1) {
                midPoint.x = cfg.midPoint.x / 2;
              }
              // 使用计算后的点绘制边
              const path = [
                ['M', startPoint.x, startPoint.y],
                ['L', midPoint.x, midPoint.y],
              ];
              const keyShape = group.addShape('path', {
                attrs: {
                  path: path,
                  stroke: '#333',
                  lineWidth: 2,
                  // 其他样式属性...
                },
              });
              return keyShape;
            },
          },
          'cubic-horizontal'
        );
      };
      registerFn();
      const { data } = props;
      let graph = null;
      this.setTypeBasedOnLevel(this.graphData);
      const initGraph = (data) => {
        if (!data) {
          return;
        }
        const { onInit, config } = props;
        const tooltip = new G6.Tooltip({
          offsetX: 20,
          offsetY: 30,
          // 允许出现 tooltip 的 item 类型
          itemTypes: ['node'],
          // custom the tooltip's content
          getContent: (e) => {
            const outDiv = document.createElement('div');
            const nodeName = e.item.getModel().name;
            let formatedNodeName = '';
            for (let i = 0; i < nodeName.length; i++) {
              formatedNodeName = `${formatedNodeName}${nodeName[i]}`;
              if (i !== 0 && i % 20 === 0)
                formatedNodeName = `${formatedNodeName}<br/>`;
            }
            outDiv.innerHTML = `${formatedNodeName}`;
            return outDiv;
          },
          shouldBegin: (e) => {
            if (
              e.target.get('name') === 'name-shape' ||
              e.target.get('name') === 'mask-label-shape'
            )
              return true;
            return false;
          },
        });
        graph = new G6.TreeGraph({
          container: 'container',
          ...defaultConfig,
          ...config,
          plugins: [tooltip],
        });
        if (typeof onInit === 'function') {
          onInit(graph);
        }
        graph.data(data);
        graph.render();
        const handleCollapse = (e) => {
          const target = e.target;
          const id = target.get('modelId');
          const item = graph.findById(id);
          const nodeModel = item.getModel();
          nodeModel.collapsed = !nodeModel.collapsed;
          graph.layout();
          graph.setItemState(item, 'collapse', nodeModel.collapsed);
        };

        graph.on('collapse-text:click', (e) => {
          handleCollapse(e);
        });
        graph.on('collapse-back:click', (e) => {
          handleCollapse(e);
        });

        // 监听画布缩放，缩小到一定程度，节点显示缩略样式
        let currentLevel = 1;
        const briefZoomThreshold = Math.max(graph.getZoom(), 0.5);
        graph.on('viewportchange', (e) => {
          if (e.action !== 'zoom') return;
          const currentZoom = graph.getZoom();
          let toLevel = currentLevel;
          if (currentZoom < briefZoomThreshold) {
            toLevel = 0;
          } else {
            toLevel = 1;
          }
          if (toLevel !== currentLevel) {
            currentLevel = toLevel;
            graph.getNodes().forEach((node) => {
              graph.updateItem(node, {
                level: toLevel,
              });
            });
          }
        });
      };
      initGraph(data);
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
