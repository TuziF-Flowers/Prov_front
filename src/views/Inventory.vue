<template>
    <div class="alarm-main">
      
      <div class="alarm-lower">
        <a-tabs type="card">
          <a-tab-pane key="1" tab="应用维度">
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
          <a-tab-pane key="2" tab="用户维度">
            <!-- <a-table-column title="编号" :dataIndex="index" scopedSlots={{customRender: (text, record, index) => 
            index + 1 }}/> -->
            <a-table :columns="columns2" :data-source="data2" :scroll="{ x: 1500, y: 500 }" bordered
              style="padding:20px">
              
            </a-table>
          </a-tab-pane>
          <a-tab-pane key="3" tab="应用和用户维度">
            <a-table :columns="columns3" :data-source="data3" :scroll="{ x: 1500, y: 500 }" bordered
              style="padding:20px">
            </a-table>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </template>
<script>
  import inventory  from '../js/inventory.js';
  export default inventory;
</script>
  <style scoped>
  @import url('../style/alarm.css');
  </style>