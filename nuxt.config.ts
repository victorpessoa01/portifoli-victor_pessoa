export default defineNuxtConfig({
  devServer: {
    port: 3001
  },
  css: [
      'vuetify/styles',
    ],
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2024-10-18',  
});