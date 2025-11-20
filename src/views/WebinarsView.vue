<template>
  <section class="webinars-section">
    <h1 class="page-title">{{ t.title }}</h1>

    <div class="webinars-grid">
      <div class="webinar-card" v-for="(item, index) in t" :key="index">
        <div class="webinar-image-wrapper">
          <img :src="item.image" :alt="item.title" class="webinar-image" />
        </div>

        <h2 class="webinar-title">{{ item.title }}</h2>

        
        <button @click="goToSignup(item.id)" class="btn webinar-btn">
          Zobacz szczegóły
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import langState from "@/lang/langState"
import { useRouter } from "vue-router"
import { Calendar as CalendarIcon } from "lucide-vue-next"

const router = useRouter()
const t = langState.t.main.projects


function goToSignup(id) {
  router.push(`/webinar/${id}`)
}
</script>

<style scoped>
.webinars-section {
  width: 100%;
  padding: 4rem 1rem;
  background-color: var(--light);
  margin-bottom: 15rem;
}

.page-title {
  text-align: center;
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--violet);
  margin-bottom: 3rem;
}

.webinars-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* Karta */
.webinar-card {
  background: #fff;
  border-radius: 14px;
  border: 1px solid rgba(200, 200, 200, 0.3);
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: transform .25s ease, box-shadow .2s ease;
}

.webinar-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}

/* Zdjęcie */
.webinar-image-wrapper {
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.webinar-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

/* Tekst */
.webinar-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin: .5rem 0;
  color: #4b2c92;
}

.webinar-text {
  font-size: .95rem;
  line-height: 1.5;
  color: #444;
  flex-grow: 1;
}

.webinar-date {
  margin: 1rem 0 .5rem;
  font-size: .9rem;
  color: #555;
  display: flex;
  align-items: center;
  gap: .4rem;
}

.icon {
  width: 18px;
  height: 18px;
  color: var(--violet);
}

/* Button */
.webinar-btn {
  margin-top: auto;
  width: 100%;
}

/* Responsive */
@media (max-width: 1024px) {
  .webinars-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 650px) {
  .webinars-grid {
    grid-template-columns: 1fr;
  }
}
</style>
