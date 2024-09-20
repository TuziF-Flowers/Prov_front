<template>
  <div class="bottom-right bg-color-black">
    <dv-decoration-1 style="width:200px;height:30px;" />
    <div>
      <div class="text">06:33:00 错误姓名.数据推送</div>
      <div class="text">06:30:00
        公安人口姓名清单.数据融合</div>
      <div class="text">06:22:00
        门诊就诊一件事.数据推送</div>
      <div class="text">06:19:00
        门诊就诊一件事.数据融合</div>
      <div class="text">04:30:00 老年人体检报告服务.市归集</div>
      <div class="text">04:29:00
        老人体检信息.数据推送</div>
      <div class="text">04:28:00
        老年人体检信息表.数据融合</div>
      <div class="text">06:33:00 错误姓名.数据推送</div>
      <div class="text">06:33:00 错误姓名.数据推送</div>
    </div>

    <!-- <a-timeline>
      <a-timeline-item>
        <div style="text">06:33:00
          错误姓名.数据推送</div>
      </a-timeline-item>
      <a-timeline-item color="green">06:30:00
        公安人口姓名清单.数据融合</a-timeline-item>
      <a-timeline-item>06:22:00
        门诊就诊一件事.数据推送</a-timeline-item>
      <a-timeline-item color="green">06:19:00
        门诊就诊一件事.数据融合</a-timeline-item>
      <a-timeline-item color="green">04:30:00 老年人体检报告服务.市归集</a-timeline-item>
      <a-timeline-item>04:29:00
        老人体检信息.数据推送</a-timeline-item>
      <a-timeline-item color="green">04:28:00
        老年人体检信息表.数据融合</a-timeline-item>
       <a-timeline-item color="green">04:26:00
        65岁及以上老年人体检报告服务.数据开发</a-timeline-item>
      <a-timeline-item color="green">04:25:00
        老年人体检信息表.建表</a-timeline-item>
      <a-timeline-item color="red">03:26:00
        卫健委门诊一件事抽取</a-timeline-item> -->
    <!-- <a-timeline-item>02:09:00
        健康评估表.数据推送</a-timeline-item>
      <a-timeline-item color="red">02:08:00
        老年人体检数据抽取</a-timeline-item>
      <a-timeline-item color="green">02:03:00
        健康评估表.数据融合</a-timeline-item>
      <a-timeline-item color="red">01:14:00
        卫健委健康评估抽取</a-timeline-item> -->

    <!-- </a-timeline> -->
    <!-- <dv-decoration-12 style="width:50px;height:50px;padding-right:0px" /> -->
  </div>
</template>

<script>
</script>
<style scoped>
.bottom-right {
  padding-left: 30px;
  padding-top: 15px;
  padding-right: 10px;
}
.ant-timeline {
  color: #fff;
  opacity: 0.8;
  text-align: left !important;
}
.ant-timeline-item-head {
  width: 20px !important;
  height: 20px !important;
  background: #03050c !important;
}
.ant-timeline-item-tail {
  top: 20px;
  left: 10px;
}
.ant-timeline-item-content {
  margin-left: 50px !important;
  font-size: 16px;
}

.ant-timeline-item-head-green {
  color: #fcd337 !important;
  border-color: #fcd337 !important;
}

.ant-timeline-item-head-red {
  color: #57c3c2 !important;
  border-color: #57c3c2 !important;
}

.ant-timeline-item-head-blue {
  color: #1a94bc !important;
  border-color: #1a94bc !important;
}
@font-face {
  font-family: smallFont;
  src: url(../../assets/font/DS-SMALL.ttf);
}
.text {
  font-family: smallFont;
  text-align: left;
  line-height: 30px;
  font-size: 16px;
}
</style>