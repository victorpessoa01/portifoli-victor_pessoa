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
    width="140"
    app temporary>
    <v-row justify="end" class="ma-0 pa-0 d-flex align-center">
        <v-list class="ma-0 pa-0">
            <v-list-group class="d-flex justify-end">
                <v-list-item v-for="(i, index) in menuItems" :key="index" :to="i.to"
                @click="toggleDrawer()"
                class="text-end"
                >   
                    <v-icon color="primary"> {{ i.icon }}</v-icon>                     
                    <v-list-item-title>{{ i.title }}</v-list-item-title>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-row>
    </v-navigation-drawer>
</template>