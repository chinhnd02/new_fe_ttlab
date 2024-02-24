<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import SideBar from './components/sidebar/SideBar.vue';
import AddNew from '../components/product/AddNew.vue';
import EditProduct from '../components/product/EditProduct.vue';
import { serviceProduct } from '../layouts/components/product/product';
// import { Product } from '../layouts/components/product/interface';
import numeral from 'numeral';
import { DEFAULT_LIMIT_FOR_PAGINATION } from '@/common/constants';
import { useProduct } from '../layouts/components/product/product.store';

const { fetchProducts, query } = useProduct();

// import { ProductStore } from '../layouts/components/product/product.store';

const page = ref(1);
const dialogAdd = ref(false);
const dialogEdit = ref(false);
const dialogDelete = ref(false);

const currentProduct = ref('');
const idProduct = ref('');

const products = ref([]);
const id = ref(null);
const search = ref('');

const lengthPage = ref(1);
const selectedValue = ref(DEFAULT_LIMIT_FOR_PAGINATION);

onMounted(async () => {
  try {
    getAllProduct();
  } catch (error) {
    console.log(error);
  }
});

const getAllProduct = async () => {
  const res = await fetchProducts();
  products.value = res.data;
  lengthPage.value = Math.ceil(res.totalItems / selectedValue.value);
};

// const getAllProduct = async () => {
//   const productList = await serviceProduct.getAllProduct();
//   lengthPage.value = Math.ceil(productList.data.totalItems / selectedValue.value);
//   products.value = productList.data.items;
// };

watch(selectedValue, (newVal) => {
  query.limit = newVal;
  query.page = 1;
  page.value = 1;
  getAllProduct();
  // getAllProduct();
});

watch(page, (newVal) => {
  query.page = newVal;
  getAllProduct();
  // getAllProduct();
});

const searchProduct = computed(() => {
  const keyword = search.value.toLowerCase();
  return products.value.filter((p) => p.name.toLowerCase().includes(keyword));
});

const closeDialogEdit = () => {
  dialogEdit.value = false;
};

const deleteProduct = async () => {
  try {
    if (!id.value) {
      console.error('not found!');
      return;
    }
    const response = await serviceProduct.deleteProduct(id.value);
    dialogDelete.value = false;
    getAllProduct();

    console.log('Da xoa: ', response);
  } catch (error) {
    console.error('Loiiiiiiiiiiiiiiiiiiiiii!');
  } finally {
    id.value = null;
  }
};

const formatMoney = (money) => {
  return numeral(money).format('0,0') + ' ₫';
};
</script>

<template>
  <!-- <v-app :full-height="true"> -->
  <!-- <SideBar /> -->
  <!-- <v-main> -->
  <!-- <router-view v-slot="{ Component }"> -->
  <component :is="Component" />
  <div class="ml-5 mr-4">
    <v-row>
      <v-col cols="4" class="mt-4">
        <v-text-field
          density="compact"
          variant="solo"
          v-model="search"
          label="Tìm kiếm"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
        <!-- {{ search }} -->
      </v-col>
      <v-col class="text-right mr-4 mt-5">
        <v-btn
          class="text-capitalize text-button"
          color="#0F60FF"
          @click="dialogAdd = true"
        >
          <img
            style="width: 16px; height: 16px"
            src="../assets/image/icon.png"
            alt=""
          />Tạo
          <p class="text-lowercase">mới</p>
        </v-btn>
      </v-col>
    </v-row>

    <h1>haha</h1>
    <!-- <div
            style="background-color: white; border-radius: 0 0 12px 12px"
            class="mr-5 mb-10"
          >
            <v-row>
              <v-col cols="7">
                <v-row>
                  <p class="mt-5 ml-6 showing" style="padding-left: 24px">Showing</p>
                  <v-col cols="2">
                    <v-select
                      v-model="selectedValue"
                      :items="['10', '20', '30', 'All']"
                      density="compact"
                      single-line
                      label="10"
                      variant="outlined"
                    ></v-select>
                  </v-col>
                  <p class="mt-5 showing">of 50</p>
                </v-row>
              </v-col>
              <v-col cols="1"></v-col>
              <v-col cols="4">
                <div class="text-xs-center">
                  <v-pagination
                    :length="lengthPage"
                    active-color="#0F60FF"
                    color="#F1F2F6"
                    v-model="page"
                    density="compact"
                    variant="flat"
                  ></v-pagination>
                </div>
              </v-col>
            </v-row>
          </div> -->
  </div>
  <!-- </router-view> -->
  <!-- </v-main> -->
  <!-- </v-app> -->
</template>

<style lang="scss" scoped>
:deep(v-layout),
:deep(.v-navigation-drawer) {
  height: 100vh !important;
  border-right: 1px solid #e9e9eb;
}

:deep(.v-navigation-drawer) {
  position: fixed !important;
}
:deep(.v-main) {
  background-color: $color-background-1;
  transition: all 0.24s linear !important;
  transition: 0.24s cubic-bezier(0.4, 0, 0.2, 1);
}

@import url('https://fonts.googleapis.com/css2?family=Public+Sans&display=swap');
.text-table {
  font-family: 'Public Sans', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 15.28px;
  color: #8b909a;
}
.text-button {
  font-family: 'Public Sans', sans-serif;
  font-size: 14px;
}
#description {
  white-space: nowrap;
  width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
