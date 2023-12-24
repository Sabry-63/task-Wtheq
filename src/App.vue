<template>
  <vContainer>
    <VRow>
      <VCol md="3" cols="12">
        <a-side class="rounded border pa-4" />
      </VCol>
      <VCol md="9" cols="12">
        <div class="content rounded border pa-8 pa-md-12">
          <RouterView />
        </div>
      </VCol>
    </VRow>
  </vContainer>
</template>

<script>
import ASide from "@/layouts/ASide.vue";
export default {
  components: {
    ASide,
  },
};
</script>
