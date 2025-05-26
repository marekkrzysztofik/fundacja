<template>
  <header class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <RouterLink to="#hero">Fundacja</RouterLink>
      </div>
      <nav class="navbar-menu">
        <a href="#mission">Misja</a>
        <a href="#priorities">Priorytety</a>
        <a href="#projects">Projekty</a>
        <a href="#team">O nas</a>
        <a href="#partners">Partnerzy</a>
        <a href="#news">Aktualności</a>
        <a href="#contact" class="contact-button">Kontakt</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
// brak logiki na razie – linki prowadzą do ID sekcji
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo a {
  font-size: 1.25rem;
  font-weight: bold;
  color: #4b2c92;
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.navbar-menu a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s ease;
}

.navbar-menu a:hover {
  color: #4b2c92;
}

.contact-button {
  background-color: #4b2c92;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #362070;
}

/* Responsywność */
@media (max-width: 768px) {
  .navbar-menu {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-end;
  }
}
</style>
