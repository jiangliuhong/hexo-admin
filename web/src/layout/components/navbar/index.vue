<template>
  <div>
    <el-row>
      <div class="fd-fold" @click="clickFold">
        <i :class="fold"></i>
      </div>
      <div class="fd-crumbs">
        <el-breadcrumb class="fd-crumbs-main" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      fold: "el-icon-s-fold"
    };
  },
  props:{
    status: Boolean
  },
  methods: {
    clickFold(){
        this.status = !this.status;
        if(this.status){
          this.fold = "el-icon-s-unfold";
          
        }else{
          this.fold = "el-icon-s-fold";
        }
        this.$emit("changeCollapse",this.status);
    }
  }
};
</script>
<style lang="less" scoped>
.fd-fold {
  float: left;
  height: 30px;
  i {
    font-size: 30px;
  }
}
.fd-crumbs {
  height: 30px;
  margin-left: 40px;
  .fd-crumbs-main {
    line-height: 2;
  }
}
</style>