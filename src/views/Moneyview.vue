<template>
    <div class="alarm-main">
      <div class="alarm-upper">
        <div class="a-liuxiang-box">
            <a-card :hoverable="true"  class="alarm-card">
            <div class="title-card" style="text-align: center;">应用资产总数（一级）</div>
            <!-- <div class="alarm-content">233</div> -->
            <div class="content-card" style="text-align: center;">20</div>
          </a-card>
        </div>
        <div class="a-liuxiang-box">
            <a-card :hoverable="true"  class="alarm-card">
            <div class="title-card" style="text-align: center;">应用资产总数（二级）</div>
            <div class="content-card" style="text-align: center;">221</div>
          </a-card>
        </div>
        <div class="a-liuxiang-box">
            <a-card :hoverable="true"  class="alarm-card">
            <div class="title-card" style="text-align: center;">用户总数</div>
            <div class="content-card" style="text-align: center;">145</div>
          </a-card>
        </div>
        <div class="a-liuxiang-box">
            <a-card :hoverable="true"  class="alarm-card">
            <div class="title-card" style="text-align: center;">一级部门总数</div>
            <div class="content-card" style="text-align: center;">62</div>
          </a-card>
        </div>
          
     
    </div>
      <div class="alarm-lower">
        <!-- <a-tabs type="card"> -->
          
            <div class="check-group">
              
              <div class="check-box">
                <div class="check-word">资产类别：</div>
                <a-select  v-model="selectedOption1"  :dropdownRender="dropdownRender" style="width: 200px;height: 30px;"
                  placeholder="请选择--">
                  <a-select-option v-for="(item,index) in commissioners" :key="index" :value="item">
                    {{ item }}
                  </a-select-option>
                  <!-- <option value="应用">应用</option>
                  <option value="用户">用户</option>
                   -->
                </a-select>
              </div>
              <div class="check-box">
                <div class="check-word">资产级别：</div>
                <a-select v-model="selectedOption2"  :dropdownRender="dropdownRender" style="width: 200px;height:30px"
                  placeholder="请选择--">
                  <a-select-option v-for="(item,index) in levels" :key="index" :value="item">
                    {{ item }}
                  </a-select-option>
                  <!-- <option value="一级">一级</option>
                  <option value="二级">二级</option> -->
                </a-select>
              </div>
              
            </div>
            <div class="check-group" style="margin-bottom:15px;">
              <a-button  @click="fetchData" type="primary" style="margin-left:45px"><a-icon type="search" />查询</a-button>
              <a-button  @click="resetData" type="danger" style="margin-left:15px"><a-icon type="redo" />重置</a-button>
            </div>
            <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 500 }" bordered
            style="padding:20px">
            <template #bodyCell="{ column }">
              <template v-if="column.key === 'level'">
                <span>
                  <a-tag
                    :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                    {{ record.level}}
                  </a-tag>
                </span>
              </template>
            </template>
          </a-table>
           
          
      
       </div>
     
    </div>
  </template>
  <script>

  import moneyview from '../js/moneyview.js';
  export default moneyview;
  </script>
  <style scoped>
  @import url('../style/alarm.css');
  @import url('../style/moneyview.css');
  </style>