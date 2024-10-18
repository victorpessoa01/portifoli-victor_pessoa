import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

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

export default defineNuxtPlugin(nuxtApp => { 
  nuxtApp.vueApp.use(vuetify)
})
