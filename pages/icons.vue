<template>
    <v-container>
      <v-row>
        <v-col v-for="(icon, index) in icons" :key="index" class="text-center">
          <v-icon class="display-2" color="primary">{{ icon }}</v-icon>
          <div>{{ icon }}</div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const icons = [
    'mdi-home',
    'mdi-account',
    'mdi-code-tags',
    'mdi-cog',
    'mdi-bell',
    'mdi-star',
    'mdi-heart',
    'mdi-settings',
    'mdi-music-note',
    'mdi-camera',
  ]
  </script>
  
  <style scoped>
  .display-2 {
    font-size: 3rem; /* Aumenta o tamanho do ícone */
  }
  </style>
  