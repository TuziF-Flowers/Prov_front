<template>
  <a-layout id="components-layout-demo-custom-trigger" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible style="position:fixed">
      <div class="logo">空间安全</div>
      <a-menu theme="dark" :default-open-keys="alwaysOpenKeys" mode="inline"
        style="text-align:left;height:100vh">
        <a-sub-menu key="link">
          <span slot="title">
            <a-icon type="home" />
            <span>资产管理</span>
          </span>
          <a-menu-item key="all-link">
            <router-link to="/moneyview" :key="$route.path">资产发现</router-link>
          </a-menu-item> 
          <a-menu-item key="front-link">
            <router-link to="/inventory" :key="$route.path">资产盘点</router-link>
          </a-menu-item>
          <a-menu-item key="back-link">
            <router-link to="/test" :key="$route.path">资产地图</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="link">
          <span slot="title">
            <a-icon type="home" />
            <span>数据活动可视化</span>
          </span>
          <a-menu-item key="all-link">
            <router-link to="/datastream" :key="$route.path">数据流转</router-link>
          </a-menu-item>
          <a-menu-item key="front-link">
            <router-link to="/dataduizhang" :key="$route.path">数据对账</router-link>
          </a-menu-item>
        </a-sub-menu>
        
       
        <a-sub-menu key="money">
          <span slot="title">
            <a-icon type="smile" />
            <span>安全溯源</span>
          </span>
          <a-menu-item key="bb">
            <router-link to="/moneyview">攻击链分析</router-link>
          </a-menu-item>
          <a-menu-item key="aa">
            <router-link to="/flowcharts">异常数据流向溯源</router-link>
          </a-menu-item>
          <a-menu-item key="cc">
            <router-link to="/flowcharts">用户异常行为取证</router-link>
          </a-menu-item>
          <a-sub-menu key="warning">
            
          <span slot="title">
            <a-icon type="warning" />
            <span>异常告警</span>
          </span>
          <a-menu-item key="taskk">
            <router-link to="/alarm">异常监控</router-link>
          </a-menu-item>
          <a-menu-item key="databases">
            <router-link to="/flowcharts">数据库监控</router-link>
          </a-menu-item>
        </a-sub-menu>
          <!-- <a-menu-item key="bb">
            <router-link to="/flowcharts">应用资产 </router-link>
          </a-menu-item>
          <a-menu-item key="aa">
            <router-link to="/flowcharts">数据资产</router-link>
          </a-menu-item> -->
        </a-sub-menu> 
      </a-menu>
    </a-layout-sider>
    <a-layout style="margin-left:200px">
      <a-layout-header style="background: #fff; padding: 0">
        <div id="header">
          <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)" />
          <div id="right">
            <a-avatar :src="avatarUrl" />
            <a-dropdown>
              <a class="ant-dropdown-line" href="#"> cyx</a>
              <a-menu slot="overlay">
                <a-menu-item key="profile">Profile</a-menu-item>
                <a-menu-item key="setting">Setting</a-menu-item>
                <a-menu-divider />
                <a-menu-item key="logout">Logout</a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '12px 16px', padding: '12px', minHeight: '800px'}">
        <router-view :key="$route.fullPath"></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { Menu, MenuItem, SubMenu, Steps, Step, Button } from 'ant-design-vue';
import { format } from 'echarts/lib/export';
export default {
  components: {
    Menu,
    MenuItem,
    SubMenu,
    Steps,
    Step,
    Button,
  },
  data() {
    return {
      avatarUrl: '/love.jpg',
      collapsed: false,
      alwaysOpenKeys: ['link', 'warning', 'money'],
    };
  },
};
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .logo {
  font-size: 16px;
  color: aliceblue;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
}

#header {
  display: flex;
  height: 70px;
  /*margin: 0;*/
  padding: 0;
}

#left {
  width: 80%;
  /*height: 25px;*/
  /*background-color: darksalmon;*/
  justify-content: flex-start;
  display: flex;
  align-items: center;
  margin-left: 16px;
}

#right {
  flex: 1;
  width: 20%;
  /*background-color: coral;*/
  /*height: 50px;*/
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 30px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.ant-dropdown-line {
  margin: 5px;
}
</style>