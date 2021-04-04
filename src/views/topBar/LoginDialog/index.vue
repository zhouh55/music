<template>
  <BaseDialog
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
  </BaseDialog>
</template>
<script lang="ts">
import { defineComponent, reactive, defineAsyncComponent } from 'vue';
import { LoginResult, UserFormData } from './typing';
import axios from '@/utils/axios/index';
import { setCookie } from '@/utils/cookie/index';
import { ElMessage } from 'element-plus/lib';
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

    const handleSubmit = () => {
      axios
        .post('/api/login', userFormData)
        .then(res => {
          const resData = res.data;
          if (resData.code === 200) {
            const token = (resData.data as LoginResult).token;
            setCookie('token', token);
            ElMessage.success('登录成功！');
          } else {
            ElMessage.error(resData.message);
          }
        })
        .catch(err => console.log(err));

      emit('close');
    };

    return {
      userFormData,
      handleSubmit
    };
  }
});
</script>
