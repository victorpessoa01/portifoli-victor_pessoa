import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives';
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { defineNuxtPlugin } from 'nuxt/app';


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#0E1017', // darkblue
          primary: '#FFB800', // amarelo
          secondary: '#076D6D', // verde
          textPrimary: '#FFFFFF', // branco
          textSecondary: '#7D7C7C', //cinza
        },
      },
    }
  },
})

export default defineNuxtPlugin(nuxtApp => { 
  nuxtApp.vueApp.use(vuetify)
})
