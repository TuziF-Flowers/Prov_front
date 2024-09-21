<template>
    <div>
      <!-- 筛选框1 -->
      <select v-model="selectedOption1">
        <option value="">请选择</option>
        <option value="A1">应用</option>
        <option value="A2">用户</option>
      </select>
  
      <!-- 筛选框2 -->
      <select v-model="selectedOption2">
        <option value="">请选择</option>
        <option value="B1">一级</option>
        <option value="B2">二级</option>
      </select>
  
      <!-- 查询按钮 -->
      <button @click="fetchData">查询</button>
  
      <!-- 重置按钮 -->
      <button @click="resetData">重置</button>
  
      <!-- 表格展示 -->
      <table v-if="tableData.length">
        <thead>
          <tr>
            <th v-for="header in tableHeaders" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in tableData" :key="index">
            <td v-for="(value, key) in row" :key="key">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedOption1: '', // 第一个下拉框的选择
        selectedOption2: '', // 第二个下拉框的选择
        tableData: [], // 表格数据
        tableHeaders: [] // 表格表头
      };
    },
    methods: {
      // 根据下拉框选项获取表格数据
      fetchData() {
        if (this.selectedOption1 === 'A1' && this.selectedOption2 === 'B1') {
          this.tableHeaders = ['ID', 'Name', 'Age'];
          this.tableData = [
            { ID: 1, Name: 'Alice', Age: 25 },
            { ID: 2, Name: 'Bob', Age: 30 }
          ];
        } else if (this.selectedOption1 === 'A1' && this.selectedOption2 === 'B2') {
          this.tableHeaders = ['ID', 'Product', 'Price'];
          this.tableData = [
            { ID: 1, Product: 'Laptop', Price: '$1000' },
            { ID: 2, Product: 'Phone', Price: '$600' }
          ];
        } else if (this.selectedOption1 === 'A2' && this.selectedOption2 === 'B1') {
          this.tableHeaders = ['ID', 'Product', 'Price'];
          this.tableData = [
            { ID: 1, Product: 'Laptop', Price: '$1000' },
            { ID: 2, Product: 'Phone', Price: '$600' }
          ];
        }else if (this.selectedOption1 === 'A2' && this.selectedOption2 === 'B2') {
          this.tableHeaders = ['ID', 'Product', 'Price'];
          this.tableData = [
            { ID: 1, Product: 'Laptop', Price: '$1000' },
            { ID: 2, Product: 'Phone', Price: '$600' }
          ];
        }
        else {
          this.tableData = [];
          this.tableHeaders = [];
        }
      },
      // 重置筛选框和表格数据
      resetData() {
        this.selectedOption1 = '';
        this.selectedOption2 = '';
        this.tableData = [];
        this.tableHeaders = [];
      }
    }
  };
  </script>
  
  <style scoped>
  /* 样式可以根据需求调整 */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
  </style>
  