<template>
  <div>
    <h1 class="mb-6 pb-3 border-b">Profile Page</h1>
    <template v-if="isEdit">
      <v-form @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              label="Name"
              variant="outlined"
              v-model="account.name"
            />
          </v-col>
          <v-col cols="12" md="12">
            <v-select
              v-model="account.gender"
              label="Gender"
              :items="genderOptions"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <VueDatePicker
              v-model="account.DOB"
              :enable-time-picker="false"
              :space-confirm="false"
              auto-apply
            ></VueDatePicker>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-btn class="w-100" size="large" type="submit" color="primary">
              Save
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </template>

    <template v-else>
      <div class="d-flex align-center ga-3">
        <span>
          <span class="mdi mdi-account-outline mdi-24px"></span>
        </span>
        <h3>{{ account.name }}</h3>
      </div>
      <div class="d-flex align-center ga-3">
        <span>
          <span class="mdi mdi-gender-male-female mdi-24px"></span>
        </span>
        <h3>{{ account.gender }}</h3>
      </div>
      <div class="d-flex align-center ga-3">
        <span>
          <span class="mdi mdi-calendar-account-outline mdi-24px"></span>
        </span>
        <h3>{{ formattedDate }}</h3>
      </div>

      <v-btn
        @click="() => (isEdit = true)"
        class="w-100"
        size="large"
        type="submit"
        color="primary"
      >
        Update Date
      </v-btn>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: {
        name: "User Name",
        gender: "Male",
        DOB: new Date(),
      },
      genderOptions: ["Male", "Female"],
      isEdit: false,
    };
  },
  computed: {
    formattedDate() {
      return this.account.DOB.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      });
    },
  },
  methods: {
    submitForm() {
      console.log(this.account);
      this.isEdit = false;
    },
  },
};
</script>
<style lang="scss" scoped></style>
