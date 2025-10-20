<template>
  <section class="text-center py-16">
    <h2 class="text-3xl font-bold mb-4">Welcome to HealthCare Portal</h2>
    <p class="text-gray-600 mb-8">Your health, our priority. Explore and manage your records easily.</p>
    <router-link
      to="/login"
      class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Get Started
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'HealthHome'
}
</script>

<style scoped>
section {
  background: white;
  border-radius: 16px;
  max-width: 800px;
  margin: auto;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
</style>
