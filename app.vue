<template>
  <v-app>
    <Navbar />
      <NuxtLayout />
    <Footer />
  </v-app>
</template>
<script setup>
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
import "vuetify/styles"; 
</script>
