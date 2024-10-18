<script setup>
import SwitchModo from './switchModo.vue';

const title = "<Victor/Pessoa>"
</script>
<template>
    <v-app-bar>
        <v-toolbar-title>
            <router-link to="/" style="text-decoration: none; color: inherit;">
            {{ title }}
            </router-link>
        </v-toolbar-title>
        <v-spacer />
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/aboutMe">Sobre Mim</v-btn>
        <v-btn text to="/skills">Habilidades</v-btn>
        <v-btn text to="/project">Projetos</v-btn>
        <SwitchModo/>
    </v-app-bar>
</template>