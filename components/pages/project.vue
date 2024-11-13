<script setup lang="ts">
import { project } from '@/layout/link';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const { smAndUp } = useDisplay();
const proj = computed(() => project)
</script>
<template>
    <v-container id="project" class="container">
        <div data-aos="fade-left" data-aos-delay="1000">
            <h3 class="text-primary">Projetos</h3>
            <br />
            <v-card 
                rounded="lg" 
                color="background" 
                flat 
                class="pa-2 d-flex justify-center align-center"
                :class="smAndUp ? 'mx-2' : 'mx-n10'">

                <v-slide-group center-active show-arrows>
                    <v-slide-item 
                    v-for="p in proj" 
                    :key="p.title"
                    class="mx-3 pa-0"
                    >
                        <v-card class="d-flex flex-column justify-center align-center"
                        border="false"
                        color="background"
                        height="300"
                        width="250">

                            <v-img
                            :src="p.image"
                            cover
                            :alt="p.title"
                            class="ma-1 pa-0"
                            max-height="200"
                            max-width="300"
                            height="100"
                            width="240"
                            >
                            </v-img>

                            <h4 class="text-primary text-center mx-2 mt-2">{{ p.title }}</h4>

                            <p class="text-center mx-2">{{ p.description }}</p>

                            <v-col class="d-flex align-center justify-center ma-0 pa-0">

                                <v-btn color="secondary" :href="p.deploy" target="_blank" class="mx-1 pa-2">Ver Projeto</v-btn>

                                <v-btn
                                    :href="p.repo"
                                    target="_blank" 
                                    class="mx-1 pa-0"
                                    color="primary">

                                        <v-icon 
                                        color="secondary"
                                        icon="mdi-github"
                                        size="30"
                                        class="ma-0 pa-0"
                                        ></v-icon>
                                </v-btn>
                            </v-col>
                        </v-card>
                    </v-slide-item>    
                </v-slide-group> 
            </v-card>
        </div>
    </v-container>
</template>
<style lang="scss" scoped>
@use './assets/scss/container' as *;
</style>