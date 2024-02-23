<script lang="ts" setup>
// import logo from '@/assets/images/logo.svg';
import logon from '@/assets/images/ttlab-logo.svg';
import { LoadingOverlay } from '@/components';
import { reactive, ref } from 'vue';
import { useLoginForm } from '../../forms/login-form.ts';
// import { useForm } from 'vee-validate';
// import * as yup from 'yup';
const loginForm = reactive(useLoginForm());

const loading = ref(false);

const visible = ref(false);
</script>
<template>
  <LoadingOverlay :loading="loading" bg-color="#FFF" :opacity="1" />
  <div class="h-100 d-flex align-center justify-center">
    <v-card width="426" flat rounded="lg" class="pb-5">
      <v-card-title>
        <v-img :src="logon" :lazy-src="logon" :height="60"></v-img>
        <p class="mt-4 text-center text-title">Đăng nhập</p>
      </v-card-title>

      <v-card-text style="padding: 0 1px">
        <div
          class="text-email text-medium-emphasis mb-1 font-weight-bold d-flex align-center justify-space-between"
        >
          Email
        </div>
        <v-text-field
          v-model="loginForm.email"
          variant="outlined"
          density="compact"
          color="primary"
          :label="$t('auth.form.email')"
          :placeholder="$t('auth.form.placeholder.email')"
          :error="!!loginForm.emailError"
          single-line
          hide-details
        ></v-text-field>
        <p class="mt-1" style="color: red; float: right" v-if="loginForm.emailError">
          {{ loginForm.emailError }}
        </p>

        <div
          class="text-email text-medium-emphasis mb-1 mt-5 font-weight-bold d-flex align-center justify-space-between"
        >
          Mật khẩu
        </div>
        <v-text-field
          v-model="loginForm.password"
          color="primary"
          density="compact"
          :label="$t('auth.form.password')"
          :error="!!loginForm.passwordError"
          :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
          :type="visible ? 'text' : 'password'"
          placeholder="••••••••••••••"
          variant="outlined"
          @click:append-inner="visible = !visible"
          single-line
          hide-details
        ></v-text-field>
        <p class="mt-1" style="color: red; float: right" v-if="loginForm.passwordError">
          {{ loginForm.passwordError }}
        </p>

        <v-row class="mt-4">
          <v-checkbox label="Ghi nhớ Đăng nhập" class="font-weight-bold"></v-checkbox>

          <p class="forgot-pass mt-5 mr-4">Quên mật khẩu?</p>
        </v-row>

        <div class="text-center">
          <v-btn
            color="#0f60ff"
            :width="426"
            class="text-login text-capitalize"
            :text="$t('auth.button.login')"
            @click="loginForm.handleLogin"
            @enter="loginForm.handleLogin"
          />
        </div>

        <v-card-text
          class="d-flex justify-center align-center"
          style="display: flex; margin: auto"
        >
          <!-- <v-row> -->
          <p class="cctk">Bạn chưa có tài khoản?</p>
          <p class="ml-2 register">Đăng ký</p>
          <!-- </v-row> -->
        </v-card-text>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans&display=swap');
.text-title {
  font-family: 'Public Sans', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
}
.text-email {
  font-family: 'Public Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #464f60;
  line-height: 20px;
}
.forgot-pass {
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0f60ff;
}
.text-login {
  font-family: 'Public Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}
.cctk {
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #5a5c6f;
}
.register {
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0f60ff;
}
</style>
