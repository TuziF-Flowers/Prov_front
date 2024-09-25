<template>
  <div class="alarm-main">
    <div class="alarm-upper">
      <div class="a-liuxiang-box">
          <a-card :hoverable="true"  class="alarm-card">
          <div class="title-card" style="text-align: center;">业务量</div>
          <!-- <div class="alarm-content">233</div> -->
          <div class="content-card" style="text-align: center;">233</div>
        </a-card>
      </div>
      <div class="a-liuxiang-box">
          <a-card :hoverable="true"  class="alarm-card">
          <div class="title-card" style="text-align: center;">完成量</div>
          <div class="content-card" style="text-align: center;">20</div>
        </a-card>
      </div>
      <div class="a-liuxiang-box">
          <a-card :hoverable="true"  class="alarm-card">
          <div class="title-card" style="text-align: center;">未完成量</div>
          <div class="content-card" style="text-align: center;">145</div>
        </a-card>
      </div>
    </div>
    <div class="alarm-lower">
          <div class="check-group" :model="form" >
            <!-- <a-form-model :model="form" style="height: 50px; width: 350px; display: flex; flex-direction: row;" > -->
              <div class="check-box">
                <div class="check-word">选择日期：</div>
                <a-date-picker v-model="form.date" style="width: 200px;" placeholder="请选择日期"></a-date-picker>
              </div>
              <div class="check-box">
                <div class="check-word">应用：</div>
              <!-- <a-form-model-item label="应用："> -->
                <a-select  v-model="form.application" :dropdownRender="dropdownRender" style="width: 200px;"
                placeholder="请选择--"  >
                  <a-select-option  v-for="(item,index) in options" :key="index" :value="item">
                  {{ item }}
                  </a-select-option>
                </a-select>
              </div>
                <!-- <a-input v-model="form.author"/> -->
              <!-- </a-form-model-item> -->
              <div class="check-box">
                <div class="check-word">角色：</div>
                <a-select v-model="form.role" :dropdownRender="dropdownRender" style="width: 200px;"
                  placeholder="请选择--">
                  <a-select-option v-for="(item,index) in actors" :key="index" :value="item">
                    {{ item }}
                  </a-select-option>
                </a-select>
              </div>
              <div class="check-box">
                <div class="check-word">是否已完成：</div>
              <a-select v-model="form.completed" :dropdownRender="dropdownRender" style="width: 200px;"
                  placeholder="请选择--">
                  <a-select-option v-for="(item,index) in selectedRange" :key="index" :value="item">
                    {{ item }}
                  </a-select-option>
                </a-select>
              </div>
            </div>
              <div class="check-group" style="margin-bottom:15px;">
                <a-button type="primary" @click="onSubmit" style="margin-left:45px"><a-icon type="search" />查询</a-button>
                <a-button type="danger" style="margin-left:15px"><a-icon type="redo" />重置</a-button>
              </div>
            <!-- </a-form-model> -->
            <!-- <div class="check-box">
              <div class="check-word">选择日期：</div>
              <a-date-picker style="width: 200px;" placeholder="请选择日期"></a-date-picker>
            </div>
            <div class="check-box">
              <div class="check-word">应用：</div>
              <a-select mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;"
                placeholder="请选择--"  >
                <a-select-option v-for="(item,index) in options" :key="index" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
            <div class="check-box">
              <div class="check-word">角色：</div>
              <a-select mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;"
                placeholder="请选择--">
                <a-select-option v-for="(item,index) in actors" :key="index" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
            <div class="check-box">
              <div class="check-word">是否完成</div>
              <a-select mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;"
                placeholder="请选择--">
                <a-select-option v-for="(item,index) in selectedRange" :key="index" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
          </div>
          <div class="check-group" style="margin-bottom:15px;">
            <a-button type="primary" style="margin-left:45px"><a-icon type="search" />查询</a-button>
            <a-button type="danger" style="margin-left:15px"><a-icon type="redo" />重置</a-button>
          </div> -->
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
          
        
       <!-- </a-tabs> -->
     </div>

    </div>
  
</template>
  <script>
  import { DatePicker } from 'ant-design-vue';
  import datastream from '../js/datastream.js';
  export default datastream;
  // components: {
  //   [DatePicker.name]: DatePicker
  // }




             
  </script>
  
  <style scoped>
  @import url('../style/alarm.css');
  @import url('../style/datastream.css');
  </style>
  <!-- <script>
    import alarm from '../js/moneyview.js';
    export default alarm;
    </script>
    <style scoped>
    @import url('../style/alarm.css');
    @import url('../style/moneyview.css');
    </style> -->