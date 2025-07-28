<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo">
        <h2>Fundacja</h2>
        <p>Tworzymy mosty między kulturami i pokoleniami.</p>
      </div>

      <nav class="footer-nav">
        <a href="#mission">Misja</a>
        <a href="#projects">Projekty</a>
        <a href="#team">Zespół</a>
        <a href="#contact">Kontakt</a>
      </nav>

      <div class="footer-socials">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook"><Facebook class="icon" /></a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram"><Instagram class="icon" /></a>
        <a href="mailto:kontakt@fundacja.pl" aria-label="E-mail"><Mail class="icon" /></a>
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
  background-color: white;
  color: #ffffff;
  padding: 3rem 1rem 1rem;
  font-family: 'Inter', sans-serif;
  border-top: 2px solid var(--violet);
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-logo h2 {
  font-size: 1.8rem;
  margin: 0;
  color: var(--violet);
}

.footer-logo p {
  max-width: 300px;
  line-height: 1.5;
  margin-top: 0.5rem;
  font-size: 0.95rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-nav a {
  color: var(--violet);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: var(--violet);
}

.footer-socials {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.icon {
  width: 24px;
  height: 24px;
  color: #ffffff;
  transition: color 0.3s ease;
}

.icon:hover {
  color: var(--violet);
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #bfbfbd;
}
</style>
