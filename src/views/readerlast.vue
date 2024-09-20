<template>
  <div class="main">
    <div class="left">
      <reader-page></reader-page>
    </div>
    <div class="right">
      <loader-page></loader-page>
    </div>
  </div>
</template>

<script>
import ReaderPage from './Reader.vue';
import LoaderPage from './Load.vue';
export default {
  name: 'readerlast',
  components: {
    ReaderPage,
    LoaderPage,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: row;
}
.left {
  flex: 3;
}
.right {
  flex: 2;
}
</style>
