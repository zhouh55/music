<template>
  <div>
    <el-dialog
      v-bind="$attrs"
      v-model="dialogVisible"
      custom-class="base-dialog-container"
      @close="$emit('handleSubmit')"
    >
      <slot />
      <template #footer>
        <slot name="footer">
          <div class="footer-container">
            <el-button
              type="primary"
              class="primary-btn"
              @click="$emit('handleSubmit')"
            >
              确定
            </el-button>
            <el-button @click="$emit('close')">
              取消
            </el-button>
          </div>
        </slot>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close', 'handleSubmit'],
  setup(props) {
    const dialogVisible = ref<boolean>(false);
    onMounted(() => {
      dialogVisible.value = props.visible;
    });

    return {
      dialogVisible
    };
  }
});
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
