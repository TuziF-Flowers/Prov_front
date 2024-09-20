<template>
  <div class="reverse-main">
    <div>Reverse</div>
    <div class="content-box">
      <div class="left-box">
        <svg width="60" height="60" style="margin:5px">
          <image :xlink:href="require(`@/assets/weiban-active.svg`)" width="100%" height="100%" />
        </svg>
        <div style="font-size: 18px;">目的委办局数据库:</div>
        <div style="font-size: 18px;" id="wbTo">{{result.wbTo}}</div>
        <!-- 推送任务 -->
        <a-card size="small" :title="result.push.task.taskName" id="push"
          style="margin-top:40px;width: 250px;text-align:left" :hoverable="true">
          <div class="utext">执行时间：{{result.push.job.executeTime}}</div>
          <div class="utext">完成时间：{{result.push.result.endTime}}</div>
          <div class="utext">任务类型：{{result.push.task.type}}</div>
          <div class="utext">调度周期：{{result.push.task.rate}}</div>
          <div class="utext" style="color:#597ef7">工程名: {{result.push.task.project }}</div>
          <a slot="extra" href="#">more</a>
        </a-card>
        <!-- 融合任务 -->
        <a-card size="small" :title="item.task.taskName" :id="'fusion'+index"
          style="margin-top:50px;width: 250px;text-align:left" :hoverable="true"
          v-for="(item, index) in result.fusion.slice().reverse()" :key="index">
          <div class="utext">执行时间：{{item.job.executeTime}}</div>
          <div class="utext">完成时间：{{item.result.endTime}}</div>
          <div class="utext">任务类型：{{item.task.type}}</div>
          <div class="utext">调度周期：{{item.task.rate}}</div>
          <div class="utext" style="color:#597ef7">工程名: {{item.task.project }}</div>
          <a slot="extra" href="#">more</a>
        </a-card>
      </div>
      <div class="right-box">
        <!-- 结果展示 -->
        <a-card size="small" title="结果展示" class="result-box" style="text-align:left;"
          :hoverable="true">
          <div class="utext">该推送任务 detail...</div>
        </a-card>
        <div class="extract-box" style="margin-top:40px;margin-left:80px">
          <a-card size="small" title="2月1日抽取" id="push-1"
            style="width: 250px;text-align:left;height:140px;margin-left:20px" :hoverable="true">
            <div class="utext">开始时间：{{result.extract.result.startTime}}</div>
            <div class="utext">结束时间：{{result.extract.result.endTime}}</div>
            <div class="utext" style="color:#597ef7">抽取表格：ods_qwjw_peis_older_di</div>
            <div class="utext">数据量：{{result.extract.result.size}}</div>
            <a slot="extra" href="#">more</a>
          </a-card>
          <a-card size="small" title="2月2日抽取" id="push-2"
            style="width: 250px;text-align:left;height:140px;margin-left:20px" :hoverable="true">
            <div class="utext">开始时间：{{result.extract.result.startTime}}</div>
            <div class="utext">结束时间：{{result.extract.result.endTime}}</div>
            <div class="utext">抽取表格：ods_qwjw_peis_older_di</div>
            <div class="utext">数据量：{{result.extract.result.size}}</div>
            <a slot="extra" href="#">more</a>
          </a-card>
        </div>
        <div class="middle-box" style="margin-top:20px;">
          <div style="margin-left:50px;margin-top:17px;">
            <svg width="80" height="80" id="hive3">
              <image :xlink:href="require(`@/assets/hive-active.svg`)" width="100%" height="100%" />
            </svg>
            <div style="font-size: 18px;">数据湖</div>
          </div>
          <a-card size="small" :title="result.extract.task.taskName" id="extract"
            style="width: 250px;text-align:left;height:120px;margin-left:100px" :hoverable="true">
            <div class="utext">任务类型：{{result.extract.task.type}}</div>
            <div class="utext">调度周期：{{result.extract.task.rate}}</div>
            <div class="utext" style="color:#597ef7">工程名: {{result.extract.task.project }}</div>
            <a slot="extra" href="#">more</a>
          </a-card>
          <div style="margin-left:80px;margin-top:17px;">
            <svg width="90" height="90" id="mysql3">
              <image :xlink:href="require(`@/assets/database-active.svg`)" width="100%"
                height="100%" />
            </svg>
            <div style="font-size: 18px;">源委办局数据库: </div>
            <div style="font-size: 18px;">{{ result.wbFrom }} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import reverse from '../js/reverse';
export default reverse;
</script>
  

<style scoped>
@import url('../style/reverse.css');
</style>