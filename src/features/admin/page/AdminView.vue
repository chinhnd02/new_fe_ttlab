<template>
  <v-app id="inspire">
    <v-navigation-drawer
      class="sidebar"
      v-model:rail="rail"
      :rail-width="60"
      :permanent="true"
      :width="width"
      @click="toggleCollapse"
    >
      <!--  -->
      <v-list-item title="" subtitle="" class="align-center justify-center">
        <v-img
          :src="logo_ngang"
          :lazy-src="logo_ngang"
          :width="140"
          style="padding: 20px 0 20px 0"
        ></v-img>
        <!-- <v-icon icon="mdi-chevron-left"></v-icon> -->
      </v-list-item>
      <v-list-item
        class="text-uppercase text-manager"
        @click="rail = true"
        link
        title=""
        disabled
        :class="rail == true ? 'none' : ''"
        >quản lý sản phẩm</v-list-item
      >
      <v-list-item
        link
        prepend-icon="mdi mdi-package-variant-closed"
        title="Sản phẩm"
        @click="showProduct"
        :class="option == 1 ? 'option' : 'non-option'"
        style="max-width: 232px; height: 40px; margin-left: 14px; border-radius: 6px"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi mdi-account-group"
        @click="showUser"
        link
        title="User"
        class="text-option"
        :class="option == 2 ? 'option' : 'non-option'"
        style="max-width: 232px; height: 40px; margin-left: 14px; border-radius: 6px"
      ></v-list-item>
    </v-navigation-drawer>

    <v-app-bar flat style="background-color: #f5f5f9">
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-app-bar-title class="title-admin ml-5">{{
        showProductList == true ? 'Danh sách sản phẩm' : 'Danh sách người dùng'
      }}</v-app-bar-title>
      <v-badge content="4" class="mr-2" overlap color="red">
        <v-icon icon="mdi mdi-bell-outline"></v-icon>
      </v-badge>
      <v-badge class="ml-4 mr-8" offset-x="50%" offset-y="50%" overlap color="green" dot>
        <v-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
        </v-avatar>
      </v-badge>
    </v-app-bar>

    <v-main style="background-color: #f5f5f9">
      <!--  -->
      <main-layout v-if="showProductList" />
      <secondary-layout v-else />
    </v-main>
  </v-app>
</template>
  
  <script setup>
import { ref } from 'vue';
import logo_ngang from '@/assets/images/ttlab-logo_ngang.svg';
import { useSidebarStore } from '@/common/stores';
import SecondaryLayout from '@/layouts/SecondaryLayout.vue';
// import MainLayout from '@/layouts/SecondaryLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const drawer = ref(null);

const showProductList = ref(true);
const showUserList = ref(false);

const option = ref(1);

const showProduct = () => {
  showProductList.value = true;
  showUserList.value = false;
  rail.value = true;
  option.value = 1;
  console.log(showProductList.value, showUserList.value);
};

const showUser = () => {
  rail.value = true;
  showProductList.value = false;
  showUserList.value = true;
  option.value = 2;
  console.log(showProductList.value, showUserList.value);
};

const sidebarStore = useSidebarStore();
const rail = ref(sidebarStore.rail);
const width = ref(260);
const toggleCollapse = () => {
  if (!rail.value) {
    width.value = 60;
    setTimeout(() => {
      rail.value = !rail.value;
    }, 240);
  } else {
    width.value = 260;
    rail.value = !rail.value;
  }
  sidebarStore.setRail(rail.value);
};
</script>
  
  <script>
export default {
  data: () => ({ drawer: null }),
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Public+Sans&display=swap');
.sidebar {
  position: relative;
  text-align: left;
  transition: all 0.24s linear !important;

  .sidebar-collapse {
    position: absolute;
    width: 26px;
    height: 26px;
    top: 17px;
    right: 0;
    display: flex;
    align-items: center;
    border-radius: 50%;
    transform: translateX(50%);
    background-color: $color-white;
    border: 1px solid #e1e3e9;
    box-shadow: 0px 1px 3px 0px #130a2e21, 0px 3px 14px 0px #130a2e08,
      0px 8px 32px 0px #130a2e12, 0px 30px 84px 0px #130a2e14 !important;
    transition: all 0.4s ease-in;
    cursor: pointer;
    &:hover {
      transform: scale(1.2) translateX(40%);
    }
  }
}

:deep(.v-list-item) {
  color: $color-text-black;
}
.user-info {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: $color-white;
  box-shadow: 0px 1px 3px 0px #130a2e21, 0px 3px 14px 0px #130a2e08,
    0px 8px 32px 0px #130a2e12, 0px 30px 84px 0px #130a2e14 !important;
}

.none {
  display: none;
}
.text-manager {
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  color: #8b909a;
  padding-left: 30px;
}
.title-admin {
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 22px;
  padding: 20px 0;
}

.option {
  background-color: #f3f4f8;
}
.non-option {
  color: #8b909a;
}

.list-item {
  max-width: 232px;
  height: 40px;
  margin-left: 14px;
  border-radius: 6px;
}

.text-option {
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
}
</style>