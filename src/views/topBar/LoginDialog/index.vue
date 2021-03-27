<template>
  <base-dialog
    v-bind="$attrs"
    title="登录"
    width="25%"
    @handleSubmit="handleSubmit"
  >
    <el-form class="body-container">
      <el-form-item v-model="userFormData">
        <el-input v-model="userFormData.account" placeholder="账号" />
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="userFormData.password"
          placeholder="密码"
        />
      </el-form-item>
    </el-form>
  </base-dialog>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import BaseDialog from '@/components/BaseDialog/index.vue';
import { UserFormData } from './typing';
export default defineComponent({
  components: {
    BaseDialog
  },
  // emits: [ 'close' ],
  setup(props, { emit }) {
    const userFormData = reactive<UserFormData>({
      account: '',
      password: ''
    });

    const handleSubmit = () => {
      emit('close');
    };

    return {
      userFormData,
      handleSubmit
    };
  }
});
</script>
