<template>
  <header class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <RouterLink to="#hero">Fundacja</RouterLink>
      </div>
      <nav class="navbar-menu">
        <a href="#mission">{{ langState.t.main.navbar.mission }}</a>
        <a href="#priorities">{{ langState.t.main.navbar.priorities }}</a>
        <a href="#projects">{{ langState.t.main.navbar.projects }}</a>
        <a href="#team">{{ langState.t.main.navbar.about }}</a>
        <a href="#partners">{{ langState.t.main.navbar.partners }}</a>
        <a href="#news">{{ langState.t.main.navbar.news }}</a>
        <a href="#contact" class="contact-button">{{ langState.t.main.navbar.contact }}</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import langState from '@/lang/langState'
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
