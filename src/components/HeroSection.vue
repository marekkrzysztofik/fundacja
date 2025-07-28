<template>
  <section class="hero-section" id="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          <span v-for="(line, index) in langState.t.main.heroTitleLines" :key="index">
            {{ line }}
          </span>
        </h1>
        <a @click="visible = true" class="hero-button">
          {{ langState.t.main.heroButton }}
        </a>
      </div>
      <div class="hero-image">
        <img src="/images/ee.jpg" alt="Ilustracja" />
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
  background: url('/images/ee.jpg') center center / cover no-repeat;
 /* background-color: #f5f1fb;*/
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
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: bold;
  color: #4b2c92;
  line-height: 1.4;
  margin-bottom: 1.5rem;
}

.hero-title span {
  display: block;
}

.hero-button {

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
}
</style>
