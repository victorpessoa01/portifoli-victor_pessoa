<script setup>
import { link } from '~/layout/link';

</script>
<template>
    <v-container id="home" class="container">
        <div data-aos="fade-down" data-aos-delay="1000" class="ma-0 pa-0">
            <v-col cols="12" class="ma-0 pa-0">
                <h1 class="ma-0 pa-0 mb-n2"
                style="font-size: 1.8rem; font-weight: 600;"
                >Desenvolvedor</h1>
                <v-row class="d-flex align-center ma-0 pa-0">
                    <h1 class="spacing text-secondary mr-7 ma-0 pa-0"
                    style="font-size: 1.9rem; font-weight: 600;"
                    >FRONT</h1>
                    <h1 class="spacing text-primary ma-0 pa-0 mr-0"
                    style="font-size: 1.9rem; font-weight: 600;"
                    >END</h1>
                </v-row>

                <v-row class="d-flex align-center ma-0 pa-0 mt-6">
                    <v-card v-for="i in link" 
                    :key="i.title" 
                    :href="i.link" target="_blank" 
                    class="btn ma-0 pa-0 mr-6"
                    color="primary">
                        <v-icon 
                        color="secondary" 
                        :icon="i.icon" 
                        size="30"
                        class="ma-1 pa-0"></v-icon>
                    </v-card>
                </v-row>
            </v-col>
            <br />
            <v-col cols="12" class="ma-0 pa-0 mt-10 text-right">
                <v-row justify="end" class="ma-0 pa-0">
                    <span class="ma-0 pa-0 text-textSecondary"
                    style="font-size: 1rem; font-weight: 600;">
                        Escreval ("<span class="ma-0 pa-0 text-primary"
                        style="font-size: 1.5rem;">Olá, Mundo!!!</span>")
                    </span>
                </v-row>
                <v-row justify="end" class="ma-0 pa-0 mt-6">
                    <v-btn class="btn d-flex pa-0 ma-0 rounded-xl"
                    elevation="3"
                    target="_blank"
                    href="https://drive.google.com/file/d/1iBtuJlCdmsrvOfMLmzt2b3ai0BMPTlZc/view?usp=drive_link"
                    color="secondary"
                    >
                    <span class="ma-4 pa-0 text-primary font-weight-bold">
                            Baixar CV
                        </span> 
                    </v-btn>
                </v-row>
            </v-col>
        </div>
    </v-container>
</template>
<style lang="scss" scoped>
@use './assets/scss/container' as *;

.spacing {
    letter-spacing: 0.6rem;
}
</style>