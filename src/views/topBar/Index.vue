<template>
  <div class="top-bar-container">
    <div>
      <div class="left">仿Music</div>
      <div class="mid">
        <span>发现音乐</span>
        <span>我的音乐</span>
      </div>
      <div class="right">
        <el-input placeholder="搜索" />
        <span>登录</span>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopBar',
  setup() {
    return {};
  }
});
</script>
