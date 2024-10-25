<script setup>
import { ref} from 'vue';
import { useDisplay } from 'vuetify';
import { defineProps } from 'vue';

const sidebar = defineProps({
    drawer: {
        type: Boolean,
        required: true
    }})

const routes = ref([
    { title: 'Home',link: '/' },
    { title: 'Sobre Mim', link: '/about-me'},
    { title: 'Habilidades',link: '/skills' },
    { title: 'Projetos', link: '/project' }
])
</script>

<template>
    <v-navigation-drawer v-model="sidebar.drawer" class="sidebar"
    app temporary>
        <v-list>
            <v-list-group>
                <v-list-item v-for="(i, index) in routes" :key="index" :to="i.link"
                @click="sidebar.drawer = false"
                >                        
                    <v-list-item-title>{{ i.title }}</v-list-item-title>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>



<style lang="scss" scoped>
.sidebar {
    width: 250px;
}

</style>