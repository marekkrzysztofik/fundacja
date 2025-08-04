<template>
  <footer class="footer">
    <div class="footer-container">
      
      <div class="footer-logo">
        <h2>Fundacja ISEF</h2>
        <p>Tworzymy mosty między kulturami i pokoleniami.</p>
      </div>

      <div class="footer-info">
        <h3>Dane kontaktowe</h3>
        <p><strong>Adres:</strong> ul. Jana Heweliusza 11/811, 80-890 Gdańsk</p>
        <p><strong>KRS:</strong> 0001162327</p>
        <p><strong>NIP:</strong> 5835533208</p>
        <p><strong>REGON:</strong> 54121717200000</p>
      </div>

      <nav class="footer-nav">
        <h3>Nawigacja</h3>
        <a href="#mission">Misja</a>
        <a href="#projects">Projekty</a>
        <a href="#team">Zespół</a>
        <a href="#contact">Kontakt</a>
      </nav>

      <div class="footer-socials">
        <h3>Znajdziesz nas</h3>
        <div class="social-links">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook"><Facebook class="icon" /></a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram"><Instagram class="icon" /></a>
          <a href="mailto:kontakt@fundacja.pl" aria-label="E-mail"><Mail class="icon" /></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Fundacja. Wszelkie prawa zastrzeżone.</p>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, Mail } from 'lucide-vue-next'
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1c1c3c, #3a3a6a);
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
  color: #bfbfbd;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: var(--violet);
}

.footer-socials .social-links {
  display: flex;
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
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #a9a9a9;
}
</style>
