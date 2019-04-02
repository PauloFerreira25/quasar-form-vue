import Vue from 'vue'
import App from './App.vue'
import store from "./store";

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
  render: h => h(App),
}).$mount('#app')
