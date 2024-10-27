<script setup>
import { ref, computed} from 'vue';
import menuItems from '~/layout/menu';
import { useDisplay } from 'vuetify';

const drawer = ref(false)
const { smAndDown } = useDisplay();

const isMobile = computed(() => smAndDown.value)

function toggleDrawer() {
    drawer.value = !drawer.value
}
</script>
<template>
    <v-navigation-drawer v-model="drawer"
    location="right"
    color="background"
    :width="isMobile ? '220' : '240'"
    app temporary>
    <v-row justify="start" class="ma-0 pa-0">
        <v-list>
            <v-list-group>
                <v-list-item v-for="(i, index) in menuItems" :key="index" :to="i.to"
                @click="toggleDrawer()"
                >  
                <v-row class="d-flex ma-0 ml-n1 pa-0">
                    <v-icon class="my-2 mx-1 pa-0">{{ i.icon }}</v-icon>                     
                    <v-list-item-title class="text-textColor my-2 mx-1 pa-0">{{ i.title }}</v-list-item-title>
                    </v-row> 
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-row>
    </v-navigation-drawer>
</template>