import { PageName } from '@/common/constants';
import MainLayout from '@/layouts/MainLayout.vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import DashboardPage from './pages/DashboardPage.vue';
import SecondaryLayout from '@/layouts/SecondaryLayout.vue'
import { computed, ref } from 'vue';

let defaultPage = ref(MainLayout)

export function setDashboardContent(component: any) {
  defaultPage.value = component;
  console.log(defaultPage.value);
}

const dashboardRouters: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    component: () => defaultPage.value,
    // component: routerComponent.value,
    children: [
      {
        path: '',
        name: PageName.DASHBOARD_PAGE,
        component: DashboardPage,
        meta: {
          public: true,
        },
      },
    ],
  },
];

export default dashboardRouters;

