<script setup>

const victor = "Victor"
const pessoa = "Pessoa"
</script>
<template>
    <v-app-bar color="background" class="d-flex align-center">
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
        <v-spacer />
        <v-btn text to="/" class="text-textColor">Home</v-btn>
        <v-btn text to="/about-me" class="text-textColor">Sobre Mim</v-btn>
        <v-btn text to="/skills" class="text-textColor">Habilidades</v-btn>
        <v-btn text to="/project" class="text-textColor">Projetos</v-btn>
    </v-app-bar>
</template>