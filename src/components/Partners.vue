<template>
  <section class="partners-section" id="partners">
    <div class="partners-container">
      <h2 class="partners-heading">{{ langState.t.main.partners.title }}</h2>

      <div class="strategic-logos">
        <div
          class="logo-card"
          v-for="(partner, index) in langState.t.main.partners.strategic"
          :key="'strategic-' + index"
        >
          <img :src="partner.logo" :alt="partner.name" />
        </div>
      </div>

      <div class="network-logos">
        <div
          class="logo-card"
          v-for="(partner, index) in langState.t.main.partners.network"
          :key="'network-' + index"
        >
          <img :src="partner.logo" :alt="partner.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
</script>

<style scoped>
.partners-section {
  background-color: #ffffff;
  padding: 4rem 1.5rem;
}

.partners-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.partners-heading {
  font-size: 2rem;
  font-weight: bold;
  color: #4b2c92;
  margin-bottom: 3rem;
}

.strategic-logos,
.network-logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2rem;
  justify-items: center;
  margin-bottom: 3rem;
}

.logo-card {
  background-color: #f5f1fb;
  padding: 1rem;
  border-radius: 8px;
  max-width: 160px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.logo-card img {
  max-width: 100%;
  max-height: 100px;
  
}
</style>
