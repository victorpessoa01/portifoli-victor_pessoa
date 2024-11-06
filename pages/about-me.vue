<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay();


</script>
<template>
    <v-container id="about-me" class="container mt-6">
        <v-col cols="12" class="ma-0 pa-0">
        <h2 class="text-primary">Sobre Mim</h2>
            <v-row justify="space-between" class="mt-3 d-flex align-center">
                <v-col cols="12" sm="7" class="d-flex align-center text-center">
                <div>
                    <p class="ma-0 pa-0 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                </v-col>
                <v-col cols="12" sm="5">
                    <div class="d-flex justify-center mt-4 mt-sm-0">
                        <v-avatar
                        class="border-lg"
                        color="secondary"
                        rounded="1"
                        size="200"
                    >
                        <v-img src="https://github.com/victorpessoa01.png" cover></v-img>
                    </v-avatar>
                    </div>
                </v-col>
            </v-row>
        </v-col>
        <br />
        <v-col cols="12" class="ma-0 pa-0 mt-15">
            <v-timeline :direction=" smAndDown ? 'vertical' : 'horizontal'">
                <v-timeline-item dot-color="secondary">
                <template v-slot:opposite >
                    <h3 class="text-primary">
                        2022
                    </h3>
                </template>
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                </v-timeline-item>

                <v-timeline-item dot-color="primary">
                <template v-slot:opposite>
                    <h3 class="text-secondary">
                        2023
                    </h3>
                </template>
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                </v-timeline-item>

                <v-timeline-item dot-color="secondary">
                <template v-slot:opposite>
                    <h3 class="text-primary">
                        Dez/2023
                    </h3>
                </template>
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                </v-timeline-item>
            </v-timeline>
        </v-col>
    </v-container>
</template>
<style lang="scss" scoped>
@import './assets/scss/container.scss';
</style>