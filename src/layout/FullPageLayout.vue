<template>
  <div class="full-layout">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="min-h-screen bg-gray-50 p-8">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer bg-gray-800 text-white text-center py-4">
      <p>© 2025 My HealthCare App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { Header } from './components'

export default {
  name: 'FullPageLayout',
  components: {
    Header
  }
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
