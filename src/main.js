import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      hello: 'hello <br> world',
      user: { name: 'Banana' },
      button: {
        alert: "Alerta"
      }
    }
  }
}

// VueI18n instance
const i18n = new VueI18n({
  locale: 'en',
  messages
})

import './styles/quasar.styl'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QCard,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QInput,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QCardSection,
  QCardActions
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QCard,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QInput,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QCardSection,
    QCardActions
  },
  directives: {
  },
  plugins: {
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
