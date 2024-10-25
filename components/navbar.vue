<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify';

const display = useDisplay() 

const tolggleMenu = () => {
    drawer.value = !drawer.value    
}

const victor = "Victor"
const pessoa = "Pessoa"

const routes = ref([
    { title: 'Home',link: '/' },
    { title: 'Sobre Mim', link: '/about-me'},
    { title: 'Habilidades',link: '/skills' },
    { title: 'Projetos', link: '/project' }
])
</script>
<template>
    <v-container>
        <v-app-bar color="background" class="d-flex align-center justify-space-center">
            <v-toolbar-title class="text-subtitle-1 pa-0">
                <router-link to="/" style="text-decoration: none; color: inherit;" class="pa-0 ma-0 text-secondary font-weight-bold">
                    <span class="pa-0 ma-0 text-secondary"><</span>
                    <span class="pa-0 ma-0 text-primary">
                        {{ victor }}
                    </span> 
                    <span class="pa-0 ma-0 text-secondary ">/</span>
                    <span class="pa-0 ma-0 text-primary">                
                        {{ pessoa }}
                    </span>
                    <span class="pa-0 ma-0 text-secondary">>
                    </span>
                </router-link>
            </v-toolbar-title>
            <v-spacer />
            <template v-if="mobile">
                <v-btn icon @click="toggleMenu">
                    <v-icon color="white">mdi-menu</v-icon>
                </v-btn>
            </template>
            <template v-else>
                <v-app-bar>
                    <v-btn 
                        v-for="route in routes" 
                        :key="route.title" 
                        :to="route.link" 
                        text
                    >
                        {{ route.title }}
                    </v-btn>
                </v-app-bar>
            </template>
        </v-app-bar>
    </v-container>
    <sidebar :drawer="drawer" @update:drawer="val => (drawer = val)" />
</template>
<style lang="scss" scoped>
@import './assets/scss/container.scss';
</style>