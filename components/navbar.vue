<script setup>
import { useDisplay } from 'vuetify';
import SwitchModo from './switchModo.vue';

const victor = "Victor"
const pessoa = "Pessoa"
</script>
<template>
    <v-app-bar class="d-flex align-center">
        <v-toolbar-title class="text-subtitle-1 font-weight-bold pa-0">
            <router-link to="/" style="text-decoration: none; color: inherit;" class="pa-0 ma-0 text-green">
            <
                <span class="pa-0 ma-0 text-white">
                    {{ victor }}
                </span>
                /
                <span class="pa-0 ma-0 text-white">                
                    {{ pessoa }}
                </span>
            >
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