<script setup lang="ts">
const projects = [
    { name: 'Projeto 1', description: 'Uma aplicação web para gerenciar tarefas.', link: '#' },
    { name: 'Projeto 2', description: 'Um sistema de biblioteca online.', link: '#' },
    { name: 'Projeto 3', description: 'Uma plataforma de doações para comunidades.', link: '#' },
];
</script>
<template>
    <v-container class="container">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <h1 class="text-h3 font-weight-bold">Projetos</h1>
                <v-row>
                    <v-col cols="12" md="6" v-for="project in projects" :key="project.name">
                        <v-card>
                            <v-card-title>{{ project.name }}</v-card-title>
                            <v-card-subtitle>{{ project.description }}</v-card-subtitle>
                            <v-card-actions>
                                <v-btn color="primary" :href="project.link" target="_blank">Ver Projeto</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss" scoped>

</style>