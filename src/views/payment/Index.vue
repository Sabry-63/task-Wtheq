<template>
  <div>
    <h1 class="mb-6 pb-3 border-b">Payment</h1>
    <form>
      <div class="mb-4">
        <label class="mb-4 d-block">Card number</label>
        <input
          class="border rounded-lg pa-4 d-block w-100"
          v-cardformat:formatCardNumber
        />
      </div>
      <div class="mb-4">
        <label class="mb-4 d-block">Card Expiry</label>
        <input
          class="border rounded-lg pa-4 d-block w-100"
          v-cardformat:formatCardExpiry
        />
      </div>
      <div class="mb-4">
        <label>
          <span class="mb-4 d-block">Card CVC</span>
          <input
            class="border rounded-lg pa-4 d-block w-100"
            v-cardformat:formatCardCVC
          />
        </label>
      </div>
      <div class="mb-4">
        <label>
          <span class="mb-4 d-block"> Numeric input </span>
          <input
            class="border rounded-lg pa-4 d-block w-100"
            v-cardformat:restrictNumeric
          />
        </label>
      </div>
      <VBtn class="w-100" size="large" color="primary">Submit</VBtn>
    </form>
  </div>
</template>
<script>
export default {
  components: {},

  data() {
    return {
      payment: {
        card_number: "",
        expiry_date: "",
        car_holder_name: "",
        CVV: "",
      },
    };
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
    },
  },
};
</script>
<style lang="scss" scoped></style>
