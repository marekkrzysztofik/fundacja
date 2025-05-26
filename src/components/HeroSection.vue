<template>
  <section class="hero-section" id="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          ŁĄCZYMY NAUKĘ,<br />
          EDUKACJĘ I SPOŁECZNĄ<br />
          SOLIDARNOŚĆ NA RZECZ<br />
          MIĘDZYNARODOWEGO DIALOGU
        </h1>
        <RouterLink to="#contact" class="hero-button">KONTAKT</RouterLink>
      </div>
      <div class="hero-image">
        <img src="/images/hero.png" alt="Ilustracja" />
      </div>
    </div>
  </section>
</template>

<script setup>
// brak logiki na razie
</script>

<style scoped>
.hero-section {
  background-color: #f5f1fb;
  padding: 4rem 1.5rem;
}

.hero-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.hero-text {
  flex: 1 1 50%;
}

.hero-title {
  font-size: 2rem;
  font-weight: bold;
  color: #4b2c92;
  line-height: 1.4;
  margin-bottom: 1.5rem;
}

.hero-button {
  background-color: #4b2c92;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.hero-button:hover {
  background-color: #362070;
}

.hero-image {
  flex: 1 1 40%;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  .hero-text {
    flex: 1 1 100%;
  }

  .hero-image {
    flex: 1 1 100%;
  }

  .hero-title {
    font-size: 1.5rem;
  }
}
</style>
