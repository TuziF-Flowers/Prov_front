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
      <!-- <div class="a-liuxiang-box">
          <a-card :hoverable="true"  class="alarm-card">
          <div class="title-card" style="text-align: center;">部门</div>
          <div class="content-card" style="text-align: center;">62</div>
        </a-card>
      </div> -->
        
        <!-- <a-card :hoverable="true" title="流向异常" class="alarm-card">
          <div class="alarm-content">
            <div class="alarm-text">待处理
              <div class="color-text">588</div>
            </div>
            <a-divider type="vertical" style="height: 60px;" />
            <div class="alarm-text">处理中
              <div class="color-text">0</div>
            </div>
            <a-divider type="vertical" style="height: 60px;" />
            <div class="alarm-text">已处理
              <div class="color-text">0</div>
            </div>
          </div>
        </a-card>
      </div>
      <div class="a-liuxiang-box">
        <a-card :hoverable="true" title="流量异常" class="alarm-card">
          <div class="alarm-content">
            <div class="alarm-text">待处理
              <div class="color-text">0</div>
            </div>
            <a-divider type="vertical" style="height: 60px;" />
            <div class="alarm-text">处理中
              <div class="color-text">0</div>
            </div>
            <a-divider type="vertical" style="height: 60px;" />
            <div class="alarm-text">已处理
              <div class="color-text">0</div>
            </div>
          </div>
        </a-card>
      </div>
      <div class="a-liuxiang-box">
        <a-card :hoverable="true" title="访问异常" class="alarm-card">
          <div class="alarm-content">
            <div class="alarm-text">待处理
              <div class="color-text">19</div>
            </div>
            <a-divider type="vertical" style="height: 60px;" />
            <div class="alarm-text">处理中
              <div class="color-text">0</div>
            </div>
            <a-divider type="vertical" style="height: 60px;" />
            <div class="alarm-text">已处理
              <div class="color-text">0</div>
            </div>
          </div>
        </a-card>
      </div> -->
  </div>
    <div class="alarm-lower">
      <!-- <a-tabs type="card"> -->
        <!-- <div class="check-box">
                <div class="check-word">资产类别：</div>
                <a-select mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;"
                  placeholder="请选择--">
                  <a-select-option v-for="(item,index) in commissioners" :key="index" :value="item">
                    {{ item }}
                  </a-select-option>
                </a-select>
              </div>
              <div class="check-box">
                <div class="check-word">资产级别：</div>
                <a-select mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;"
                  placeholder="请选择--">
                  <a-select-option v-for="(item,index) in levels" :key="index" :value="item">
                    {{ item }}
                  </a-select-option>
                </a-select>
              </div> -->



          <div class="check-group">
            <div class="check-box">
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
              <div class="check-word">是否完成：</div>
              <a-select v-model="isCompleted" style="width: 100px;" placeholder="请选择...">
                <a-select-option value="true">已完成</a-select-option>
                <a-select-option value="false">未完成</a-select-option>
              </a-select>
            </div>
          </div>
          <div class="check-group" style="margin-bottom:15px;">
            <a-button type="primary" style="margin-left:45px"><a-icon type="search" />查询</a-button>
            <a-button type="danger" style="margin-left:15px"><a-icon type="redo" />重置</a-button>
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
        
       <!-- </a-tabs> -->
     </div>
    <!-- <div class="alarm-lower"> -->
      <!-- <a-tabs type="card">
        <a-tab-pane key="1" tab="流向异常">
          <div class="check-group">
            <div class="check-box">
              <div class="check-word">告警时间：</div>
              <a-range-picker v-model="selectedRange" style="width: 250px;"
                :placeholder="['开始时间','结束时间']">
              </a-range-picker>
            </div>
            <div class="check-box">
              <div class="check-word">事件主体：</div>
              <a-select mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;"
                placeholder="请选择--">
                <a-select-option v-for="(item,index) in commissioners" :key="index" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
            <div class="check-box">
              <div class="check-word">风险级别：</div>
              <a-select mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;"
                placeholder="请选择--">
                <a-select-option v-for="(item,index) in levels" :key="index" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
            <div class="check-box">
              <div class="check-word">告警场景：</div>
              <a-select mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;"
                placeholder="请选择--">
                <a-select-option v-for="(item,index) in scenes" :key="index" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
            <div class="check-box">
              <div class="check-word">状态：</div>
              <a-select mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;"
                placeholder="请选择--">
                <a-select-option v-for="(item,index) in statuss" :key="index" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
          </div>
          <div class="check-group" style="margin-bottom:15px;">
            <a-button type="primary" style="margin-left:45px"><a-icon type="search" />查询</a-button>
            <a-button type="danger" style="margin-left:15px"><a-icon type="redo" />重置</a-button>
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
        </a-tab-pane>
        <a-tab-pane key="2" tab="流量异常">Content of Tab Pane 2</a-tab-pane>
        <a-tab-pane key="3" tab="访问异常">
          <div class="check-group">
            <div class="check-box">
              <div class="check-word">告警时间：</div>
              <a-range-picker v-model="selectedRange" style="width: 250px;"
                :placeholder="['开始时间','结束时间']">
              </a-range-picker>
            </div>
            <div class="check-box">
              <div class="check-word">事件主体：</div>
              <a-select mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;"
                placeholder="请选择--">
                <a-select-option v-for="(item,index) in commissioners" :key="index" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
            <div class="check-box">
              <div class="check-word">风险级别：</div>
              <a-select mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;"
                placeholder="请选择--">
                <a-select-option v-for="(item,index) in levels" :key="index" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
            <div class="check-box">
              <div class="check-word">告警场景：</div>
              <a-select mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;"
                placeholder="请选择--">
                <a-select-option v-for="(item,index) in scenes" :key="index" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
            <div class="check-box">
              <div class="check-word">状态：</div>
              <a-select mode="multiple" :dropdownRender="dropdownRender" style="width: 200px;"
                placeholder="请选择--">
                <a-select-option v-for="(item,index) in statuss" :key="index" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
          </div>
          <div class="check-group" style="margin-bottom:15px;">
            <a-button type="primary" style="margin-left:45px"><a-icon type="search" />查询</a-button>
            <a-button type="danger" style="margin-left:15px"><a-icon type="redo" />重置</a-button>
          </div>
          <a-table :columns="columns2" :data-source="data2" :scroll="{ x: 1500, y: 500 }" bordered
            style="padding:20px">
          </a-table>
        </a-tab-pane>
      </a-tabs> -->
    <!-- </div> -->
  </div>
</template>
  <script>
  import { DatePicker } from 'ant-design-vue';
  import alarm from '../js/datastream.js';
  export default alarm;
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