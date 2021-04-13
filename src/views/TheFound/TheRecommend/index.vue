// 推荐页面
<template>
  <div class="recommend-wrapper">
    <div class="carousel-container">
      <el-carousel type="card">
        <el-carousel-item>
          <h1>1</h1>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="model-list">
      <BaseTypeImg />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>
<style lang="scss" scoped></style>
