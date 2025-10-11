<template>
  <section class="hero-section" id="hero">
    <div class="overlay"></div>
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          <span v-for="(line, index) in langState.t.main.heroTitleLines" :key="index">
            {{ line }}
          </span>
        </h1>
        <div class="buttons">
          <a class="hero-button hero-button--secondary" href="/files/Statut fundacji_ISEF.pdf" download>
            {{ langState.t.main.heroDownload }}
          </a>
          <a @click="visible = true" class="hero-button">
            {{ langState.t.main.heroButton }}
          </a>
        </div>
      </div>
    </div>
  </section>
  <Dialog v-model:visible="visible" modal>
    <ContactForm />
  </Dialog>
</template>

<script setup>
import langState from '@/lang/langState'
import ContactForm from '@/components/ContactForm.vue';
import Dialog from 'primevue/dialog';
import { ref, } from 'vue'

const visible = ref(false);
</script>

<style scoped>
.hero-section {
  background: url('/images/ee2.jpg') no-repeat;
  background-size: cover;
  background-position: top -110px center;
  padding: 4rem 1.5rem;
  height: 89vh;
}



.hero-content {
  position: relative;
  z-index: 2;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(245, 241, 251, 0.7);
  z-index: 1;
}

.hero-title {
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  font-weight: bold;
  color: #4b2c92;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 5;
}

.hero-title span {
  position: relative;
  display: block;
  z-index: 5;
}

.hero-button {
  margin-bottom: 1rem;
  margin-left: 1rem;
  background-color: #4b2c92;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
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

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-text {
  padding: 1rem 3rem;
  animation: slideInLeft 0.8s ease-out forwards;
}

.hero-actions {
  animation: slideInLeft 1s ease-out forwards;
}

.hero-image {
  padding-right: 48px;
  animation: slideInRight 0.8s ease-out forwards;
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
  .buttons {
  display: flex;
  flex-direction: column;
}
}

@media (min-width: 1628px) {
  .hero-content {
    margin-top: 7rem;
  }
}
</style>
