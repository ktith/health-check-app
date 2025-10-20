<template>
  <div class="index-page">
    <!-- Header -->
    <header id="header" class="header sticky-top">
      <div class="topbar d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">contact@example.com</a>
            </i>
            <i class="bi bi-phone d-flex align-items-center ms-4">
              <span>+1 5589 55488 55</span>
            </i>
          </div>
          <div class="social-links d-none d-md-flex align-items-center">
            <a href="#" class="twitter"><i class="bi bi-twitter-x" /></a>
            <a href="#" class="facebook"><i class="bi bi-facebook" /></a>
            <a href="#" class="instagram"><i class="bi bi-instagram" /></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin" /></a>
          </div>
        </div>
      </div>

      <div class="branding d-flex align-items-center">
        <div class="container position-relative d-flex align-items-center justify-content-between">
          <a href="#" class="logo d-flex align-items-center me-auto">
            <h1 class="sitename">Medilab</h1>
          </a>

          <nav id="navmenu" class="navmenu">
            <ul>
              <li><a href="#hero" class="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#departments">Departments</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li class="dropdown">
                <a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown" /></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li class="dropdown">
                    <a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown" /></a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>

          <a class="cta-btn d-none d-sm-block" href="#appointment">Make an Appointment</a>
        </div>
      </div>
    </header>

    <main class="main">
      <!-- Hero Section -->
      <section id="hero" class="hero section light-background">
        <img src="@/assets/img/hero-bg.jpg" alt="Hero background" data-aos="fade-in">

        <div class="container position-relative">
          <div class="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
            <h2>WELCOME TO MEDILAB</h2>
            <p>We are a team of talented designers making websites with Bootstrap</p>
          </div>

          <div class="content row gy-4">
            <div class="col-lg-4 d-flex align-items-stretch">
              <div class="why-box" data-aos="zoom-out" data-aos-delay="200">
                <h3>Why Choose Medilab?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="text-center">
                  <a href="#about" class="more-btn">
                    <span>Learn More</span> <i class="bi bi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-8 d-flex align-items-stretch">
              <div class="d-flex flex-column justify-content-center">
                <div class="row gy-4">
                  <div
                    v-for="(box, i) in iconBoxes"
                    :key="i"
                    class="col-xl-4 d-flex align-items-stretch"
                  >
                    <div class="icon-box" :data-aos-delay="box.delay" data-aos="zoom-out">
                      <i :class="box.icon" />
                      <h4>{{ box.title }}</h4>
                      <p>{{ box.text }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="about section">

        <div class="container">

          <div class="row gy-4 gx-5">

            <div class="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="200">
              <img src="@/assets/img/about.jpg" class="img-fluid" alt="">
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox pulsating-play-btn" />
            </div>

            <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
              <h3>About Us</h3>
              <p>
                Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
              </p>
              <ul>
                <li>
                  <i class="fa-solid fa-vial-circle-check" />
                  <div>
                    <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                    <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                  </div>
                </li>
                <li>
                  <i class="fa-solid fa-pump-medical" />
                  <div>
                    <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                    <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                  </div>
                </li>
                <li>
                  <i class="fa-solid fa-heart-circle-xmark" />
                  <div>
                    <h5>Voluptatem et qui exercitationem</h5>
                    <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </section><!-- /About Section -->

    </main>

    <!-- Footer -->
    <footer id="footer" class="footer light-background">
      <div class="container footer-top">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6 footer-about">
            <a href="#" class="logo d-flex align-items-center">
              <span class="sitename">Medilab</span>
            </a>
            <div class="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p class="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
            <div class="social-links d-flex mt-4">
              <a href="#"><i class="bi bi-twitter-x" /></a>
              <a href="#"><i class="bi bi-facebook" /></a>
              <a href="#"><i class="bi bi-instagram" /></a>
              <a href="#"><i class="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>

      <div class="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong class="px-1 sitename">Medilab</strong> All Rights Reserved</p>
        <div class="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// Bootstrap core CSS + JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'aos/dist/aos.css'
import AOS from 'aos'
import data from '@/views/pdf/content'

const iconBoxes = [
  {
    icon: 'bi bi-clipboard-data',
    title: 'Corporis voluptates officia eiusmod',
    text: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
    delay: 300
  },
  {
    icon: 'bi bi-gem',
    title: 'Ullamco laboris ladore pan',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
    delay: 400
  },
  {
    icon: 'bi bi-inboxes',
    title: 'Labore consequatur incidid dolore',
    text: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere',
    delay: 500
  }
]
export default {
  name: 'FullPageLayout',
  data() {
    return {
      iconBoxes: iconBoxes,
      contentData: data
    }
  },
  mounted() {
    AOS.init()
  }
}
</script>

<style scoped>
  @import "~@/assets/vendor/bootstrap/css/bootstrap.min.css";
  @import "~@/assets/vendor/bootstrap-icons/bootstrap-icons.css";
  @import "~@/assets/vendor/aos/aos.css";
  @import "~@/assets/vendor/fontawesome-free/css/all.min.css";
  @import "~@/assets/vendor/glightbox/css/glightbox.min.css";
  @import "~@/assets/vendor/swiper/swiper-bundle.min.css";
  @import "~@/assets/css/main.css";
</style>
