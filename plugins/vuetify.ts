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
          primary: '#6200EE',  // roxo
          secondary: '#03DAC6', // teal
          accent: '#FF4081',    // rosa
          background: '#F5F5F5', // fundo claro
          surface: '#FFFFFF',    // superfície clara
          error: '#B00020',      // vermelho
          info: '#2196F3',       // azul
          success: '#4CAF50',    // verde
          warning: '#FB8C00',     // laranja
        },
      },
      dark: {
        colors: {
          primary: '#BB86FC',    // roxo claro
          secondary: '#03DAC6',   // teal
          accent: '#FF4081',      // rosa
          background: '#121212',  // fundo escuro
          surface: '#1E1E1E',     // superfície escura
          error: '#CF6679',       // vermelho claro
          info: '#2196F3',        // azul
          success: '#4CAF50',     // verde
          warning: '#FB8C00',      // laranja
        },
      },
    }
  },
})

export default defineNuxtPlugin(nuxtApp => { 
  nuxtApp.vueApp.use(vuetify)
})