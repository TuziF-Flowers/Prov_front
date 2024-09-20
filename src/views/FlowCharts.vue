<template>
  <div class="main">
    <div style="background-color:#fff;padding:30px">
      <div class="details">概览</div>
      <div class="select-box">
        <a-select v-model="selectedType" style="width:150px;" @change="selectTaskType">
          <a-select-option value="">所有任务</a-select-option>
          <a-select-option value="1">归集任务</a-select-option>
          <a-select-option value="2">融合任务</a-select-option>
          <a-select-option value="3">共享任务</a-select-option>
        </a-select>
        <a-select v-if="selectedType" v-model="selectedCommissioner" style="width: 150px;"
          @change="filterData" class="commissioner-box">
          <a-select-option value="1">选择委办局</a-select-option>
          <a-select-option v-for="(item,index) in commissioners" :key="index" :value="item">
            {{ item }}
          </a-select-option>
        </a-select>
        <a-range-picker v-if="selectedType" v-model="selectedRange" style="width: 250px;"
          @change="filterData" :placeholder="['开始时间','结束时间']">
        </a-range-picker>
      </div>
      <div v-if="left_data.length==0&&right_data.length==0">
        no data
      </div>
      <div v-else>
        <div class="flowchart-block">
          <div class="a-desktop-block">
            <div v-for="(item,index) in left_data" :key="index">
              <div class="a-content">
                <div class="a-database-style">
                  <svg width="50" height="50" :id="'mysql-'+index">
                    <image :xlink:href="require(`@/assets/database-active.svg`)" width="100%"
                      height="100%" />
                  </svg>
                  <div class="usual-text">卫健委数据库</div>
                </div>
                <div class="a-desktop-style">
                  <svg width="40" height="40" style="margin-top:5px" :id="'desktop-'+index">
                    <image :xlink:href="require(`@/assets/desktop-active.svg`)" width="100%"
                      height="100%" />
                  </svg>
                  <div class="usual-text" style="margin-top:5px"> 前置机IP:158.10.83.27
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="b-imputationTask-block">
            <div class="details">归集任务</div>
            <div v-for="(item, index) in left_data" :key="index">
              <a-card size="small" :title="item.task.taskName" style="width: 200px"
                :hoverable="true" class="b-content" :id="'task-'+index">
                <div class="utext">执行时间：{{item.result.startTime}}</div>
                <div class="utext">项目名：{{item.task.project}}</div>
                <a slot="extra" href="#">more</a>
              </a-card>
            </div>
          </div>
          <div class="c-imputationResult-block" v-if="left_data.length!=0">
            <div v-for="(item, index) in left_data" :key="index">
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
          <div class="d-hive-block" v-if="left_data.length!=0">
            <div style="margin-top:100px">
              <svg width="80" height="80" id="hive">
                <image :xlink:href="require(`@/assets/hive-active.svg`)" width="100%"
                  height="100%" />
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
    </div>
    <!-- <div class="flowtables" style="background-color:#fff;margin-top:30px">
      <div style="display: flex;align-items:left;margin-left:20px;margin-top:20px">
        <a-input placeholder="请输入搜索关键词" v-model="searchQuery"
          style="width: 200px;text-align:left" />
        <a-button @click=" filterTable">查询</a-button>
      </div>
      <a-table :columns="columns" :data-source="table_data" :scroll="{ x: 1500, y: 500 }" bordered
        style="padding:20px">
        <template slot="status" slot-scope="{ text }">
          <span :style="{ color: text === '0' ? 'red' : 'green' }">{{ text }}</span>
        </template>
      </a-table>
    </div> -->
  </div>
</template>
<script src="../lib/leader-line-min.js"/>
<script>
import flowcharts from '../js/flowcharts.js';
export default flowcharts;
</script>

<style scoped>
@import url('../style/flowcharts.css');
</style>