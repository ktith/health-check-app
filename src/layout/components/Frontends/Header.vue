<template>
  <header class="header bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
    <h1 class="text-xl font-bold">My HealthCare App</h1>
    <nav class="space-x-4">
      <router-link to="/" class="hover:underline">Home</router-link>
      <router-link to="/health" class="hover:underline">Health</router-link>
      <router-link to="/contact" class="hover:underline">Contact</router-link>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.full-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    flex: 1;
}
</style>
