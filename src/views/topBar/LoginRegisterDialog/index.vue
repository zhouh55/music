// 登录 注册 弹窗
<template>
  <BaseDialog
    v-bind="$attrs"
    :title="isLoginInterface ? ' 登录' : '注册'"
    width="25%"
    @handleSubmit="handleSubmit"
  >
    <el-form class="body-container" label-width="auto">
      <el-form-item v-if="!isLoginInterface" label="姓名">
        <el-input v-model="userFormData.name" placeholder="请输入姓名" />
      </el-form-item>
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
    <el-link href="#" type="primary" @click="handleChangeBtn">
      {{ isLoginInterface ? '去注册！' : '去登录！' }}
    </el-link>
  </BaseDialog>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  defineAsyncComponent,
  ref,
  watch
} from 'vue';
import { LoginResult, UserFormData } from './typing';
import { ResopnseData } from '@/publicType/index';
import axios from '@/utils/axios/index';
import { setCookie } from '@/utils/cookie/index';
import { ElMessage } from 'element-plus/lib';
import { useStore } from 'vuex';
export default defineComponent({
  components: {
    BaseDialog: defineAsyncComponent(() =>
      import('@/components/BaseDialog/index.vue')
    )
  },
  // emits: [ 'close' ],
  setup(props, { emit }) {
    const initialUserFormData = {
      account: '',
      password: '',
      name: ''
    };

    const store = useStore();
    console.log(store);

    const dialogType = ref<string>('login');
    const isLoginInterface = ref<boolean>(true);
    const userFormData = reactive<UserFormData>({ ...initialUserFormData });

    watch(
      () => dialogType.value,
      () => {
        isLoginInterface.value = dialogType.value === 'login';
        Object.assign(userFormData, initialUserFormData);
      }
    );

    const handleChangeBtn = () => {
      dialogType.value = isLoginInterface.value ? 'register' : 'login';
    };

    const login = async () => {
      const data: ResopnseData = await axios.post('/api/login', userFormData);
      if (data?.code !== 200) return;

      const token = (data.data as LoginResult).token;
      setCookie('token', token);
      store.commit('updateIsLogin', true);
      emit('close');
    };

    const register = async () => {
      const data: ResopnseData = await axios.post(
        '/api/register',
        userFormData
      );

      if (data.code !== 200) return;

      Object.assign(userFormData, initialUserFormData);
      dialogType.value = 'login';
      ElMessage.success(data.message);
    };

    const handleSubmit = () => {
      if (isLoginInterface.value) login();
      else register();
    };

    return {
      userFormData,
      isLoginInterface,

      // methods
      handleSubmit,
      handleChangeBtn
    };
  }
});
</script>
