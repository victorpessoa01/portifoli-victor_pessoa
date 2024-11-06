<script setup>
import Home from '@/components/pages/home.vue'
import AboutMe from '@/components/pages/about-me.vue'
import Skills from '@/components/pages/skills.vue'
import Project from '@/components/pages/project.vue'
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
