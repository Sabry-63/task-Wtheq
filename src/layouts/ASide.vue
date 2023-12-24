<template>
  <nav>
    <v-list>
      <v-list-item :to="'/profile'">
        <v-list-item-content>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item :to="'/payment'">
        <v-list-item-content>
          <v-list-item-title>Payment</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </nav>
</template>
<script>
export default {};
</script>
<style lang=""></style>
