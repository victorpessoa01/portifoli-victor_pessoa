import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: '#FFFFFF', // branco
          primary: '#0E1017', // darkblue
          secondary: '#FFB800', // amarelo
          textColor: '#0E1017', // darkblue
          accent: '#0984E3',
        },
      },
      dark: {
        colors: {
          background: '#0E1017', // darkblue
          primary: '#FFB800', // amarelo
          secondary: '#076D6D', // verde
          textColor: '#FFFFFF', // branco
          accent: '#FFB800',
        },
      },
    }
  },
})

export default defineNuxtPlugin(nuxtApp => { 
  nuxtApp.vueApp.use(vuetify)
})
