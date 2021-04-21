<template>
  <div class="base-type-img-container">
    <div class="img-description">
      <el-image />
      <p class="description-box">
        <span>
          <i class="el-icon-headset" />
          <span>102万</span>
        </span>
        <i class="el-icon-video-play" />
      </p>
    </div>

    <p>
      描述
    </p>
    <p>
      可选
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseTypeImg',
  setup() {
    return {};
  }
});
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
