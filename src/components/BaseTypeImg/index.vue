<template>
  <div class="base-type-img-container">
    <div>
      <el-image style="width: 140px;height: 140px" />
      <p>
        <span>
          <i />
          <span>102万</span>
        </span>

        <i> 播放按钮 </i>
      </p>
    </div>

    <div>
      描述
    </div>
    <div>
      可选
    </div>
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
