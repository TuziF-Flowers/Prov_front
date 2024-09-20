<template>
  <div class="main2">
    <div class="left">
      <div class="details">流程图</div>
      <div class="select-box2">
        <a-select style="width: 150px;" class="commissioner-box" v-model="selectedCommissioner"
          @change="filterData">
          <a-select-option value="1">选择委办局</a-select-option>
          <a-select-option v-for="(item,index) in commissioners" :key="index" :value="item">
            {{ item }}
          </a-select-option>
        </a-select>
        <a-range-picker v-model="selectedRange" style="width: 250px;" @change="filterData"
          :placeholder="['开始时间','结束时间']">
        </a-range-picker>
      </div>
      <div class="flowchart-block2">
        <div class="a-desktop-block2">
          <div>
            <div v-for="(item,index) in filteredData" :key="index">
              <div class="a-content2">
                <div class="a-database-styl2e">
                  <svg width="50" height="50" :id="'mysql-'+index">
                    <image :xlink:href="require(`@/assets/database-active.svg`)" width="100%"
                      height="100%" />
                  </svg>
                  <div class="usual-text">源委办局 </div>
                </div>
                <div class="a-desktop-style2">
                  <svg width="40" height="40" style="margin-top:5px" :id="'desktop-'+index">
                    <image :xlink:href="require(`@/assets/desktop-active.svg`)" width="100%"
                      height="100%" />
                  </svg>
                  <div class="usual-text" style="margin-top:5px"> 前置机IP：{{ index }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="b-imputationTask-block">
          <div class="details">归集任务</div>
          <div v-for="(item, index) in filteredData" :key="index">
            <a-card size="small" :title="item.task.taskName" style="width: 200px" :hoverable="true"
              class="b-content" :id="'task-'+index">
              <div class="utext">执行时间：{{item.result.startTime}}</div>
              <div class="utext">所属项目：{{item.task.project}}</div>
              <a slot="extra" href="#">more</a>
            </a-card>
          </div>
        </div>
        <div class="c-imputationResult-block">
          <div v-for="(item, index) in filteredData" :key="index">
            <a-card size="small" title="Result" style="width: 200px" :hoverable="true"
              :id="'imputationResult-'+index">
              <p>平均读速: {{ item.result.avg_speed }} </p>
              <p>读入条数：{{ item.result.recordCnt }}</p>
              <p>读写失败数：{{ item.result.errorCnt }}</p>
              <p>耗时：{{ item.result.totalTime }}</p>
              <a slot="extra" href="#">more</a>
            </a-card>
          </div>
        </div>
        <div class="d-hive-block">
          <div style="margin-top:100px">
            <svg width="80" height="80" id="hive">
              <image :xlink:href="require(`@/assets/hive-active.svg`)" width="100%" height="100%" />
            </svg>
            <div class="details">数据湖</div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-upper">
        <div class="upper_cards">
          <a-card :hoverable="true" style="width:200px;margin:8px">
            <div class="title-card">今日归集任务数量</div>
            <div class="content-card">60</div>
          </a-card>
          <a-card :hoverable="true" style="width:200px;margin:8px">
            <div class="title-card">成功执行</div>
            <div class="content-card">50</div>
          </a-card>
          <a-card :hoverable="true" style="width:200px;margin:8px">
            <div class="title-card">待执行</div>
            <div class="content-card">10</div>
          </a-card>
        </div>
        <div class="lower_cards">
          <a-card :hoverable="true" style="width:200px;margin:8px">
            <div class="title-card">异常数</div>
            <div class="content-card">0</div>
          </a-card>
          <a-card :hoverable="true" style="width:200px;margin:8px">
            <div class="title-card">委办局数量</div>
            <div class="content-card">2</div>
          </a-card>
          <a-card :hoverable="true" style="width:200px;margin:8px">
            <div class="title-card">数据条数</div>
            <div class="content-card">****条</div>
          </a-card>
        </div>
      </div>
      <div class="right-lower">
        <div class="right-lower">
          <a-timeline class="timeline">
            <a-timeline-item color="green" v-for="(item,index) in result" :key="index">
              <p>{{item.result.startTime}}：{{ item.task.taskName }}</p>
              <p v-if="item.result.size">数据量：{{ item.result.size }}Bytes</p>
            </a-timeline-item>
            <a-timeline-item color="red">
              <p>2024-02-26T04:29:43：免申即享_老年人体检数据抽取状态异常</p>
            </a-timeline-item>
            <a-timeline-item>
              <p>执行中</p>
            </a-timeline-item>
          </a-timeline>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import imputation from '../js/imputation.js';
export default imputation;
</script>
<style scoped>
@import url('../style/imputation.css');
</style>