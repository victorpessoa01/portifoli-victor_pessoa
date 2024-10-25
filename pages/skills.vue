<script setup lang="ts">
const skills = [
    { name: 'JavaScript', level: 'Avançado', description: 'Experiência em desenvolvimento frontend e backend.' },
    { name: 'Vue.js', level: 'Intermediário', description: 'Criação de interfaces de usuário interativas.' },
    { name: 'TypeScript', level: 'Intermediário', description: 'Desenvolvimento de aplicações robustas com tipagem forte.' },
    { name: 'Nuxt.js', level: 'Intermediário', description: 'Desenvolvimento de aplicações SSR e SPA.' },
    { name: 'PostgreSQL', level: 'Avançado', description: 'Gerenciamento de banco de dados relacionais.' },
];
</script>
<template>
    <v-container class="container">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <h1 class="text-h3 font-weight-bold">Habilidades</h1>
                <v-row>
                    <v-col cols="12" md="6" v-for="skill in skills" :key="skill.name">
                        <v-card>
                            <v-card-title>{{ skill.name }}</v-card-title>
                            <v-card-subtitle>{{ skill.level }}</v-card-subtitle>
                            <v-card-text>{{ skill.description }}</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
