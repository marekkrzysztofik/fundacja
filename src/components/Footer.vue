<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-nav">
        <h3>{{ langState.t.main.footer.contactTitle }}</h3>
        <p><strong>{{ langState.t.main.footer.addressLabel }}:</strong> {{ langState.t.main.footer.address }}</p>
        <p><strong>KRS:</strong> {{ langState.t.main.footer.krs }}</p>
        <p><strong>NIP:</strong> {{ langState.t.main.footer.nip }}</p>
        <p><strong>REGON:</strong> {{ langState.t.main.footer.regon }}</p>
      </div>

      <nav class="footer-nav"> 
        <h3>{{ langState.t.main.footer.navTitle }}</h3>
         <a href="#news">{{ langState.t.main.navbar.news }}</a>
        <a href="#mission">{{ langState.t.main.navbar.mission }}</a>
        <a href="#projects">{{ langState.t.main.navbar.projects }}</a>
        <a href="#team">{{ langState.t.main.navbar.about }}</a>
        
      </nav>


      <div class="footer-logo">
        <div @click="goHome" class="navbar-logo">
          <a href="">Fundacja</a>
          <img class="logo" src="/images/logo.png" alt="">
        </div>
        <p>{{ langState.t.main.footer.logoText }}</p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="social-links">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <Facebook class="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <Instagram class="icon" />
        </a>
        <a href="mailto:kontakt@fundacja.pl" aria-label="E-mail">
          <Mail class="icon" />
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} {{ langState.t.main.footer.copy }}</p>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, Mail } from 'lucide-vue-next'
import langState from '@/lang/langState'
</script>

<style scoped>
.logo {
  width: 140px;
  height: fit-content;
}

.navbar-logo {
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.navbar-logo a {
  font-size: 1.35rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
}

.footer {
  background-color: #3a3a6a;
   /* background-color: var(--primary); */
  color: #fff;
  padding: 3rem 1.5rem 1rem;
  font-family: 'Inter', sans-serif;
  border-top: 3px solid var(--violet);
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-logo {
  display: flex;
  align-items: center;
}

.footer-logo h2 {
  font-size: 2rem;
  margin: 0;
  color: var(--violet);
}

.footer-logo p {
  max-width: 300px;
  line-height: 1.5;
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #e0e0e0;
}

.footer-info h3,
.footer-nav h3,
.footer-socials h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-weight: 600;
}

.footer-info p {
  font-size: 0.95rem;
  margin: 0.3rem 0;
  color: #d6d6d6;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.footer-nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.footer-nav a:hover {
  transform: translateX(10px);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}

.icon {
  width: 26px;
  height: 26px;
  color: #bfbfbd;
  transition: transform 0.3s ease, color 0.3s ease;
}

.icon:hover {
  color: var(--violet);
  transform: scale(1.1);
}

.footer-bottom {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #a9a9a9;
}
</style>
