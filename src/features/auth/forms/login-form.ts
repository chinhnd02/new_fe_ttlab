import { showErrorNotification, showSuccessNotification } from '@/common/helpers';
import { useField, useForm } from 'vee-validate';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { LoginProvider } from '../auth.constants';
import { loginWithPasswordSchema } from '../schema';
import { useAuthStore } from '../stores';
import router from '@/plugins/vue-router';
import { isEmpty } from 'lodash';

export const useLoginForm = () => {

  const authStore = useAuthStore();
  const { t } = useI18n();
  const {
    handleSubmit,
    values: formValue,
    setValues,
    meta,
    validate,
  } = useForm({
    validationSchema: loginWithPasswordSchema,
  });

  const {
    value: email,
    setValue: setEmail,
    errorMessage: emailError,
  } = useField<string>('email')
  const {
    value: password,
    setValue: setPassword,
    errorMessage: passwordError,
  } = useField<string>('password');

  const handleLogin = handleSubmit(async (values) => {

    // console.log(values.email);


    const res = await authStore.login({
      email: values.email,
      password: values.password,
      provider: LoginProvider.EMAIL,
    });

    if (res.success) {
      showSuccessNotification(t('auth.success.login'));

      router.push('/admin');
      return true;

    }
    else {
      showErrorNotification(t('auth.error.login'));
    }
    return false;
  });

  const isValidForm = computed(() => meta.value.valid);

  return {
    handleLogin,
    formValue,
    isValidForm,
    validate,
    setValues,
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
  };
};
