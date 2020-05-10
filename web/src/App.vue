<template>
  <div id="app">
    <el-container class="fd-height100">
      <el-aside class="fd-aside" >
        <menus></menus>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>
          <bottom></bottom>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import menus from "./pages/menus/index.vue";
import bottom from "./pages/bottom/index.vue";
export default {
  name: "app",
  components: {
    menus,bottom
  },
  data() {
    return {
      asideWidth: "20%"
    };
  },
  methods: {}
};
</script>
<style scoped>
@import url("./css/main.css");
</style>
