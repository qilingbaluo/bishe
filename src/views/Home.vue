<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="8">
        <!-- 需要for循环遍历 -->
        <div class="foodBox">
          <i class="el-icon-circle-plus"></i>
        </div>
      </el-col>


    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 100px;
  }

</style>
