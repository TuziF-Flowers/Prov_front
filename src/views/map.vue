<template>
  <div id="map" style="padding:16px;">
    <!-- <img src="/map.png" style="width:700px;height:400px" /> -->
    <div style="text-align:left;font-weight:bold;font-size:18px;">委办局空间分布</div>
    <dv-flyline-chart-enhanced :config="config" :dev="true" style="width:600px;height:300px;" />
  </div>
</template>
<script>
import { Points } from '../common/map/points.js';
import { Lines } from '../common/map/lines.js';
export default {
  components: {},
  data() {
    return {
      config: {
        bgImgSrc: '/map.png',
        points: Points,
        lines: Lines,
        line: {
          width: 2,
        },
      },
    };
  },
};
</script>