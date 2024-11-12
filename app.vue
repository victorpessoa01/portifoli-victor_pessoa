<script setup>
import "aos/dist/aos.css";
import AOS from "aos";

onMounted(() => {
  AOS.init({
      duration: 600, 
      // easing: 'ease-in-out', 
      once: true, 
    });
});
</script>
<template>
  <v-app>
    <Navbar />
    <Sidebar />
      <NuxtPage />
    <Footer />
  </v-app>
</template>
<style lang="scss" scoped>
@use './assets/scss/container' as *;
</style>
