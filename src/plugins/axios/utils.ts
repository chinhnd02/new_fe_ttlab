import { HttpStatus, PageName } from '@/common/constants';
import localStorageAuthService from '@/common/storages/authStorage';
import axios from 'axios';
import router from '../vue-router';

export const logout = (redirectToLogin = true) => {
  localStorageAuthService.resetAll();
  const currentPage = router.currentRoute;
  if (redirectToLogin && currentPage.value.name !== PageName.LOGIN_PAGE) {
    sessionStorage.setItem('redirect', currentPage.value.fullPath);
    router
      .push({ name: PageName.LOGIN_PAGE })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => { });
  }
};

export const sendRefreshToken = async () => {
  let response;
  try {
    const API_URL = import.meta.env.VUE_APP_API_URL;
    response = await axios.post(`${API_URL}/auth/refreshToken`, { withCredentials: true });
    if (response?.status === HttpStatus.OK) {
      // localStorageAuthService.setAccessToken(response.data?.data.accessToken);
      // localStorageAuthService.setAccessTokenExpiredAt(response.data?.data.expiresIn);

      localStorageAuthService.setAccessToken(response.accessToken.token);
      localStorageAuthService.setAccessTokenExpiredAt(response.accessToken.expriesIn);

      localStorageAuthService.setRefreshToken(response.refreshToken.token);
      localStorageAuthService.setRefresh_TokenExpiredAt(response.refreshToken.expiresIn)
      return;
    }
    logout(true);
    return;
  } catch (error) {
    logout(true);
    return;
  }
};
