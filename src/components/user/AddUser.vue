<template>
  <div>
    <v-dialog
      class="mx-auto pb-6 mt-1"
      style="border-radius: 12px"
      max-width="448px"
      v-model="dialog"
    >
      <div
        style="
          background-color: white;
          padding: 17px 0 17px 20px;
          border-radius: 12px 12px 0 0;
        "
        class="text-left title-addnew"
      >
        <!-- <p
            class="title-addnew"
            style="font-weight: 500; padding: 17px 0 0 20px; color: #1a2240"
          >
            
          </p> -->
        Tạo mới người dùng
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px">
        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Tên người dùng
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          :loading="loading"
          density="compact"
          variant="solo"
          label="Nhập tên người dùng"
          single-line
          class="bg-white"
          hide-details
          style="
            margin-bottom: 16px;
            border-radius: 6px;
            border: 1px solid rgb(231, 231, 231);
          "
          flat
          @click:append-inner="onClick"
        ></v-text-field>

        <div
          class="text-medium-emphasis d-flex align-center font-weight-bold text-name mb-2"
        >
          Email
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>

        <v-text-field
          :loading="loading"
          density="compact"
          variant="solo"
          label="Nhập email"
          single-line
          class="bg-white"
          hide-details
          flat
          style="
            margin-bottom: 16px;
            border-radius: 6px;
            border: 1px solid rgb(231, 231, 231);
          "
          @click:append-inner="onClick"
        ></v-text-field>

        <div
          class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
        >
          Ngày sinh
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>

        <v-text-field
          type="date"
          :loading="loading"
          density="compact"
          variant="solo"
          single-line
          class="bg-white"
          flat
          hide-details
          style="
            margin-bottom: 16px;
            border-radius: 6px;
            border: 1px solid rgb(231, 231, 231);
          "
          @click:append-inner="onClick"
        ></v-text-field>

        <div
          class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
        >
          Số điện thoại
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>

        <v-text-field
          :loading="loading"
          density="compact"
          variant="solo"
          label="Nhập số điện thoại"
          single-line
          class="bg-white mb-3"
          hide-details
          flat
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          @click:append-inner="onClick"
        ></v-text-field>
        <!-- <v-textarea label="Label" variant="solo" flat single-line></v-textarea> -->

        <div
          class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
        >
          Avartar
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>

        <v-text-field
          :loading="loading"
          density="compact"
          variant="solo"
          label="Nhập link ảnh avartar"
          single-line
          class="bg-white mb-3"
          hide-details
          flat
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          @click:append-inner="onClick"
        ></v-text-field>

        <!-- <v-card class="mb-12" color="surface-variant" variant="tonal"> </v-card> -->
      </div>
      <v-row
        style="
          padding-top: 8px;
          background-color: white;
          width: 448px;
          margin-left: 0.5px;
          border-radius: 0 0 12px 12px;
        "
      >
        <v-col cols="6"></v-col>
        <v-col cols="6"
          ><v-btn
            width="70"
            flat
            class="text-capitalize mr-4"
            @click="this.$emit('close')"
            style="border-radius: 6px; border: 1px solid rgb(222, 222, 222)"
            >Hủy</v-btn
          >
          <v-btn
            width="105"
            color="#0f60ff"
            class="text-capitalize"
            flat
            style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            >Tạo
            <p class="text-lowercase">mới</p>
          </v-btn></v-col
        >
      </v-row>
    </v-dialog>
  </div>
</template>
  
  <script>
export default {
  props: ["dialogAdd"],
  computed: {
    dialog: {
      get() {
        return this.dialogAdd;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  data() {
    return {};
  },
};
</script>
  
  <style scoped>
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@500&display=swap");
.title-addnew {
  font-family: "Public Sans", sans-serif;
  font-size: 18px;
  font-weight: 500;
}
.text-name {
  font-family: "Public Sans", sans-serif;
  font-size: 14px;
}
</style>