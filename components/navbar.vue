<script setup>
import { ref, computed } from 'vue'
import menuItems from '~/layout/menu';
import { useDisplay } from 'vuetify';
import Sidebar from './sidebar.vue';

const { smAndDown } = useDisplay();
const drawer = ref(false)

const victor = "Victor"
const pessoa = "Pessoa"

function toggleDrawer() {
    drawer.value = !drawer.value
}
</script>
<template>
    <v-container>
        <v-app-bar color="background">
            <v-row class="d-flex align-center ma-0 mx-md-16 mx-4 justify-space-between">
                <div class="ma-0 pa-0">
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
                </div>
                <div v-if="!smAndDown" class="ma-0 pa-0">
                    <v-row class="d-flex align-center ma-0 pa-0">
                        <div class="ma-0 pa-0">
                            <v-btn 
                                v-for="i in menuItems" 
                                :key="i.title" 
                                :to="i.to" 
                                text
                                class="mx-1"
                            >
                                {{ i.title }}
                                
                            </v-btn>
                        </div>
                        <div class="ma-0 pa-0">
                            <!-- darkmode -->
                        </div>
                </v-row>
            </div>  
            <div v-else class="ma-0 pa-0">
                <v-btn icon @click="toggleDrawer()">
                    <v-icon class="text-secondary">
                        {{ drawer ? 'mdi-menu-open' : 'mdi-menu' }}</v-icon>      
                </v-btn>
            </div>          
            </v-row>
        </v-app-bar>
        <Sidebar v-model="drawer" v-if="drawer" />
    </v-container>
</template>
<style lang="scss" scoped>
@import './assets/scss/container.scss';
</style>