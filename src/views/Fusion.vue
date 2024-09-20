<template>
  <div class="main_fusion">
    <div class="left_fusion">
      <div class="details">流程图</div>
      <div class="select-box2">
        <a-select style="width: 150px;" class="commissioner-box" @change="filterData"
          v-model="selectedCommissioner">
          <a-select-option value="1">选择委办局</a-select-option>
          <a-select-option v-for="(item,index) in commissioners" :key="index" :value="item">
            {{ item }}
          </a-select-option>
        </a-select>
        <a-range-picker v-model="selectedRange" style="width: 250px;" @change="filterData"
          :placeholder="['开始时间','结束时间']">
        </a-range-picker>
      </div>
      <div class="flowchart-block3">
        <div class="d-hive-block" v-if="filteredData.length!=0">
          <div style="margin-top:100px">
            <svg width="80" height="80" id="hive">
              <image :xlink:href="require(`@/assets/hive-active.svg`)" width="100%" height="100%" />
            </svg>
            <div class="details">数据湖</div>
          </div>
        </div>
        <div class="e-fusionTask-block">
          <div class="details">融合任务</div>
          <div v-if="right_data.length!=0" class="extendss">
            <div>
              <div class="e-content">
                <a-card size="small" style="width: 200px;margin-top:50px;margin-bottom:20px;"
                  :hoverable="true" class="b-content" v-for="(item,index) in right_data"
                  :key="index" :id="'r1-'+index">
                  <a slot="title">{{item.first_fusion.task.taskName}}</a>
                  <div class="utext">执行时间：{{item.first_fusion.result.startTime}}</div>
                  <div class="utext">项目名：{{item.first_fusion.task.project}}</div>
                  <a slot="extra" href="#">more</a>
                </a-card>
              </div>
            </div>
            <div>
              <div class="e-content" v-for="(item,index) in right_data" :key="index">
                <a-card size="small" style="width: 200px" :hoverable="true" class="b-content"
                  v-for="(exp,idx) in item.fusion" :key="idx" :id="'r1-'+index+idx">
                  <a slot="title">{{exp.task.taskName}}</a>
                  <div class="utext">执行时间：{{exp.result.startTime}}</div>
                  <div class="utext">项目名：{{exp.task.project}}</div>
                  <a slot="extra" href="#">more</a>
                </a-card>
              </div>
            </div>
          </div>
        </div>
        <div class="e-fusionTask-block" style="margin-left:20px;background-color:#ecf8ea">
          <div class="details">推送任务</div>
          <div v-if="right_data.length!=0">
            <div class="e-content" v-for="(item, index) in right_data" :key="index">
              <a-card size="small" style="width: 200px" v-for="(job,idx) in item.push" :key="idx"
                :hoverable="true" class="b-content" :id="'r3-'+index+idx">
                <a slot="title">{{job.task.taskName}}</a>
                <div class="utext">执行时间：{{job.result.startTime}}</div>
                <div class="utext">项目名：{{job.task.project}}</div>
                <a slot="extra" href="#">more</a>
              </a-card>
            </div>
          </div>
        </div>
        <div class="c-imputationResult-block">
          <div v-if="right_data.length!=0">
            <div class="e-content" v-for="(item, index) in right_data" :key="index">
              <a-card size="small" title="Result" style="width: 200px" :hoverable="true"
                v-for="(job,idx) in item.push" :key="idx" :id="'imputationResult2-'+index">
                <p>平均读速: {{ job.result.avg_speed }} </p>
                <p>读入条数：{{ job.result.recordCnt }}</p>
                <p>读写失败数：{{ job.result.errorCnt }}</p>
                <p>耗时：{{ job.result.totalTime }}</p>
                <router-link slot="extra" :to="{ name: 'Reverse', params: { id: job.job.id }}">
                  more
                </router-link>
              </a-card>
            </div>
          </div>
        </div>
        <div class="g-commission-block">
          <div v-show="right_data.length!=0">
            <!-- <div v-for="(item, index) in right_data" :key="index"> -->
            <div class="g-content">
              <svg width="50" height="50" style="margin:5px">
                <image :xlink:href="require(`@/assets/weiban-active.svg`)" width="100%"
                  height="100%" />
              </svg>
              <div style="font-size: 12px;">中心API库</div>
            </div>
            <div class="g-content">
              <svg width="50" height="50" style="margin:5px">
                <image :xlink:href="require(`@/assets/weiban-active.svg`)" width="100%"
                  height="100%" />
              </svg>
              <div style="font-size: 12px;">市级</div>
            </div>
            <div class="g-content">
              <svg width="50" height="50" style="margin:5px">
                <image :xlink:href="require(`@/assets/weiban-active.svg`)" width="100%"
                  height="100%" />
              </svg>
              <div style="font-size: 12px;">中心API库</div>
            </div>
            <div class="g-content">
              <svg width="50" height="50" style="margin:5px">
                <image :xlink:href="require(`@/assets/weiban-active.svg`)" width="100%"
                  height="100%" />
              </svg>
              <div style="font-size: 12px;">政务服务中心</div>
            </div>
            <div class="g-content">
              <svg width="50" height="50" style="margin:5px">
                <image :xlink:href="require(`@/assets/weiban-active.svg`)" width="100%"
                  height="100%" />
              </svg>
              <div style="font-size: 12px;">市级</div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>

    </div>
    <div class="right_fusion">
      <div class="right-upper">
        <div class="upper_cards">
          <a-card :hoverable="true" style="width:180px;margin:8px">
            <div class="title-card">今日共享任务数量</div>
            <div class="content-card">60</div>
          </a-card>
          <a-card :hoverable="true" style="width:180px;margin:8px">
            <div class="title-card">成功执行</div>
            <div class="content-card">50</div>
          </a-card>
          <a-card :hoverable="true" style="width:180px;margin:8px">
            <div class="title-card">待执行</div>
            <div class="content-card">10</div>
          </a-card>
        </div>
        <div class="lower_cards">
          <a-card :hoverable="true" style="width:180px;margin:8px">
            <div class="title-card">异常数</div>
            <div class="content-card">0</div>
          </a-card>
          <a-card :hoverable="true" style="width:180px;margin:8px">
            <div class="title-card">委办局数量</div>
            <div class="content-card">2</div>
          </a-card>
          <a-card :hoverable="true" style="width:180px;margin:8px">
            <div class="title-card">数据条数</div>
            <div class="content-card">****条</div>
          </a-card>
        </div>
      </div>
      <div class="right-lower">
        <a-timeline class="timeline">
          <a-timeline-item color="green" v-for="(item,index) in jobs" :key="index">
            <p>{{item.result.startTime}}：{{ item.task.taskName }}</p>
            <p v-if="item.result.size">数据量：{{ item.result.size }}Bytes</p>
          </a-timeline-item>
          <a-timeline-item color="red">
            <p>2024-02-26T04:29:43：免申即享_老年人体检数据抽取状态异常</p>
          </a-timeline-item>
        </a-timeline>
      </div>
    </div>
  </div>
</template>
<script>
import fusion from '../js/fusion.js';
export default fusion;
</script>
<style scoped>
@import url('../style/fusion.css');
</style>