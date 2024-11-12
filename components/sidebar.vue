<script setup>
import { ref, computed} from 'vue';
import menuItems from '~/layout/menu';
import { useDisplay } from 'vuetify';

const drawer = ref(false)
const { smAndDown } = useDisplay();

const isMobile = computed(() => smAndDown.value)
</script>
<template> 
        <v-navigation-drawer v-model="drawer"
        location="right"
        color="background"
        class="ma-0 pa-0"
        :width="isMobile ? '200' : '0'"
        app temporary>
        <v-col justify="start" class="ma-0 pa-0">
            <v-list class="ma-0 pa-0 mt-4">
                    <v-list-item 
                    class="ma-0 pa-0"
                    v-for="(i, index) in menuItems" 
                    :key="index" 
                    color="background"
                    :to="i.to"
                    @click="toggleDrawer()"
                    >  
                        <v-row justify="start" class=" ma-0 mx-6 pa-0 d-flex align-center">
                            <v-icon color="white" class="mx-1 pa-0">{{ i.icon }}</v-icon>            
                            <v-list-item-title class="sidebar text-textPrimary ma-0 mx-1 pa-0">{{ i.title }}</v-list-item-title>
                        </v-row> 
                    </v-list-item>
            </v-list>
        </v-col>
        </v-navigation-drawer>
</template>
<style scoped lang="scss">
@use './assets/scss/container' as *;
</style>