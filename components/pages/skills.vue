<script setup lang="ts">
import { lang } from '@/layout/link';

</script>
<template>
    <v-container id="skills" class="container">
        <br />
        <div class="ma-0 pa-0">
            <h2 class="topics text-primary">Habilidades</h2>
            <v-col cols="12" class="ma-0 pa-0">
                <br />
                <v-row class="ma-0 pa-0 d-flex justify-center" wrap="nowrap">
                    <v-col 
                        cols="auto"
                        v-for="i in lang" 
                        :key="i.name" 
                        class="lang text-center d-flex flex-column align-center ma-2 pa-2"
                    >
                        <v-icon
                            :icon="i.icon"
                            size="70"
                        ></v-icon>
                        <span class="ma-0 pa-0"
                        >{{ i.name }}</span>
                        <v-rating
                            v-model="i.star"
                            full-icon="mdi-star"
                            half-icon="mdi-star-half"
                            size="small"
                            density="compact"
                            readonly
                        ></v-rating>
                    </v-col>
                </v-row>
            </v-col>
        </div>
    </v-container>
</template>
<style lang="scss" scoped>
@import './assets/scss/container.scss';
</style>
