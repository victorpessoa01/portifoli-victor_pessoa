<script setup>
import { useDisplay } from 'vuetify';
import timeline from '~/layout/timeline';

const { smAndUp } = useDisplay();
</script>
<template>
    <v-container id="about-me" class="container mt-6">
        <br />
        <v-col cols="12" class="ma-0 pa-0">
        <h2 class="text-primary">Sobre Mim</h2>
            <v-row justify="space-between" class="mt-3 d-flex align-center">
                <v-col cols="12" sm="7" class="d-flex align-center text-center">
                <div>
                    <p class="ma-0 pa-0 text-justify">
                        Sou um desenvolvedor front-end cursando Engenharia de Software na <span class="font-weight-bold"> <a>
                            <a href="https://jala.university/" target="_blank" class="text-secondary text-decoration-none ">Jala University</a></a></span>. Atualmente, me dedico no desenvolvimento de projetos que unem estudos e propósito, como meu portfólio profissional e um site de livros católicos online. Estou em busca de novas oportunidades para expandir minhas habilidades e contribuir para projetos significativos.
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
        <br />
        <v-col cols="12" class="ma-0 pa-0 mt-15">
            <v-timeline v-if="smAndUp" direction="horizontal">
                <v-timeline-item v-for="i in timeline" 
                :key="i.mes" 
                dot-color="secondary"
                class="ma-0 pa-0 text-start algign-center">
                <template v-slot:opposite>
                    <h3 class="text-primary">
                        {{ i.mes }}/{{ i.ano }}
                    </h3>
                </template>
                <div>
                    <p>
                        {{ i.description }}
                    </p>
                </div>
                </v-timeline-item>
            </v-timeline>

            <v-timeline v-else side="end">
                <v-timeline-item 
                    v-for="i in timeline" 
                    :key="i.mes" dot-color="secondary"
                    class="ma-0 pa-0 text-start algign-center">
                    <h3 class="text-primary">
                        {{ i.mes }}/{{ i.ano }}
                    </h3>
                <div>
                    <p>
                        {{ i.description }}
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