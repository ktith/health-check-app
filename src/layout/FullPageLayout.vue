<template>
  <div class="index-page">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <h2>សុខភាពសម្រាប់ជំងឺមិនឆ្លង</h2>
        </div>
        <ul class="nav-menu">
          <li><a href="/" class="active">ទំព័រដើម</a></li>
          <li><a href="/#/understanding">ការយល់ដឹងអំពីជំងឺមិនឆ្លង</a></li>
          <li><a href="/#/prevention">ការបង្ការ</a></li>
          <li><a href="/#/management">ការគ្រប់គ្រង</a></li>
          <li><a href="/#/resources">ធនធាន</a></li>
        </ul>
        <div id="mobile-menu" class="menu-toggle">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
    <div class="full-content">
      <router-view />
    </div>
    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>សុខភាពសម្រាប់ជំងឺមិនឆ្លង</h3>
            <p>ផ្តល់ព័ត៌មាន និងការគាំទ្រសម្រាប់បុគ្គលដែលរស់នៅជាមួយជំងឺមិនឆ្លង។</p>
          </div>

          <div class="footer-section">
            <h4>តំណភ្ជាប់រហ័ស</h4>
            <ul>
              <li><a href="understanding.html">ការយល់ដឹងអំពីជំងឺមិនឆ្លង</a></li>
              <li><a href="prevention.html">ការបង្ការ</a></li>
              <li><a href="management.html">ការគ្រប់គ្រង</a></li>
              <li><a href="resources.html">ធនធាន</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>សេចក្តីជូនដំណឹងសំខាន់</h4>
            <p>គេហទំព័រនេះផ្តល់ព័ត៌មានទូទៅតែប៉ុណ្ណោះ និងមិនមែនជាការជំនួសដល់ការប្រឹក្សាពីវេជ្ជបណ្ឌិតវិជ្ជាជីវៈទេ។ សូមពិគ្រោះជាមួយអ្នកផ្តល់សេវាសុខភាពជានិច្ចសម្រាប់បញ្ហាសុខភាព។</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 សុខភាពសម្រាប់ជំងឺមិនឆ្លង។ ព័ត៌មានមកពីអង្គការសុខភាពពិភពលោក និងអង្គការសុខភាពដែលមានកេរ្តិ៍ឈ្មោះផ្សេងទៀត។</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import '@/assets/js/script.js'
export default {
  name: 'FullPageLayout',
  data() {
    return {
      // iconBoxes: iconBoxes
    }
  },
  mounted() {
    //
  }
}
</script>

<style scoped>
  @import "~@/assets/css/styles.css";
  @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');
  .index-page {
    font-family:  "Kdam Thmor Pro", sans-serif;
  }

</style>
