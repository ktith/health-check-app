import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import kh from './kh'

Vue.use(VueI18n)

const messages = {
  en,
  kh
}

const locale = localStorage.getItem('lang') || 'en'

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n
