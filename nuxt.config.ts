export default {
  devServer: {
    port: 3001
  },
  css: [
      'vuetify/styles',
    ],
  buildModules: ['@nuxt/typescript-build'],
  build: {
    transpile: ['vuetify'],
  },
  plugins: ['~/plugins/vercel-analytics.client.ts'],
  compatibilityDate: '2024-10-18', 
};