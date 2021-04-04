// 登录 注册 弹窗
<template>
  <BaseDialog
    v-bind="$attrs"
    title="登录"
    width="25%"
    @handleSubmit="handleSubmit"
  >
    <el-form class="body-container" label-width="auto">
      <el-form-item label="账号">
        <el-input v-model="userFormData.account" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="userFormData.password"
          placeholder="请输入密码"
        />
      </el-form-item>
    </el-form>
  </BaseDialog>
</template>
<script lang="ts">
import { defineComponent, reactive, defineAsyncComponent } from 'vue';
import { LoginResult, UserFormData } from './typing';
import axios from '@/utils/axios/index';
import { setCookie } from '@/utils/cookie/index';
export default defineComponent({
  components: {
    BaseDialog: defineAsyncComponent(() =>
      import('@/components/BaseDialog/index.vue')
    )
  },
  // emits: [ 'close' ],
  setup(props, { emit }) {
    const userFormData = reactive<UserFormData>({
      account: '',
      password: ''
    });

    const handleSubmit = async () => {
      const { data } = await axios.get('/api/login', { params: userFormData });
      if (data?.code !== 200) return;

      const token = (data.data as LoginResult).token;
      setCookie('token', token);
      emit('close');
    };

    return {
      userFormData,
      handleSubmit
    };
  }
});
</script>
