<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">{{ currentLabel }} <i class="el-icon-caret-bottom" /></span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="setLang('en')">EN</el-dropdown-item>
      <el-dropdown-item @click.native="setLang('kh')">ខ្មែរ</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  computed: {
    currentLabel() {
      return this.$i18n.locale === 'kh' ? 'ខ្មែរ' : 'EN'
    }
  },
  methods: {
    setLang(lang) {
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)
      // if you use Element UI locale, ensure ElementLocale.i18n was wired in main.js
    }
  }
}
</script>

<style scoped>
.el-dropdown-link { cursor: pointer; padding: 0 8px; }
</style>
