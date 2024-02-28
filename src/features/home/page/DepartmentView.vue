<template>
  <div class="department mt-4">
    <div>
      <v-btn
        width="304"
        height="56"
        variant="outlined"
        style="padding: 0"
        color="#9DC2FF"
        class="mt-6"
        ><v-icon color="#2264D1" size="32" class="d-flex align-center justify-center"
          >mdi mdi-menu</v-icon
        >
        <div
          style="width: 232px; height: 40px"
          class="ml-2 d-flex align-center justify-center"
        >
          <p class="text-capitalize text-btn">Department</p>
        </div></v-btn
      >
    </div>
    <div class="category mt-10">
      <v-expansion-panels style="max-width: 288px; box-shadow: none !important">
        <v-expansion-panel>
          <v-expansion-panel-title>
            <!-- <v-icon>mdi-plus</v-icon> -->
            Item
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-expansion-panel-title>
              <!-- <v-icon>mdi-plus</v-icon> -->
              Item
            </v-expansion-panel-title>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>
            Item
            <template v-slot:actions="{ expanded }">
              <v-icon
                :color="!expanded ? 'teal' : ''"
                :icon="expanded ? 'mdi-pencil' : 'mdi-check'"
              ></v-icon>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text> Lorem ipsum dolor sit amet, </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title disable-icon-rotate>
            Item
            <template v-slot:actions>
              <v-icon color="error" icon="mdi-alert-circle"> </v-icon>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text> Lorem ipsum dolor sit amet, </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Quicksand:wght@300..700&display=swap');
.department {
  max-width: 355px;
}
.text-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  color: #2264d1;
}
.category {
}
</style>