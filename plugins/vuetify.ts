import { createVuetify } from 'vuetify'
import { defineNuxtPlugin, NuxtApp }  from 'nuxt';; 
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => { 
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
    },
  })

  nuxtApp.vueApp.use(vuetify)
})

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#00B894',
          secondary: '#FFD700',
          accent: '#0984E3',
        },
      },
      dark: {
        colors: {
          primary: '#00B894',
          secondary: '#FFD700',
          accent: '#0984E3',
        },
      },
    }
  },
})