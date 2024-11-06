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
                        <v-row class="ma-0 mx-6 pa-0">
                            <v-icon color="white" class="my-2 mx-1 pa-0">{{ i.icon }}</v-icon>                     
                            <v-list-item-title class="sidebar-link text-textColor ma-0 my-3 mx-1 pa-0">{{ i.title }}</v-list-item-title>
                        </v-row> 
                    </v-list-item>
            </v-list>
            <!-- <div v-if="smAndDown" class="ma-0 pa-0 mx-6 mt-4 text-end">
                <v-btn 
                icon 
                elevation="0">
                    <v-icon 
                    icon="mdi-theme-light-dark" class="text-secondary"></v-icon>
                <SwitchMode /> 
                </v-btn>
            </div>  -->
        </v-col>
        </v-navigation-drawer>
</template>
<style scoped lang="scss">
@import './assets/scss/container.scss';

</style>