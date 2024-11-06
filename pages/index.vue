<script setup>
import Home from './home.vue';
import AboutMe from './about-me.vue';
import Project from './project.vue'
import Skills from './skills.vue';
</script>
<template>
    <v-container class="container bg-background">
        <Home />
        <AboutMe />
        <Skills />
        <Project />
    </v-container>
</template>
<style lang="scss" scoped>
@import './assets/scss/container.scss';
</style>
