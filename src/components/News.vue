<template>
  <section class="news-section">
    <div class="news-card">
      <transition name="slide-fade" mode="out-in">
        <div :key="currentNews.title" class="news-content">
          <h2 class="news-title">{{ currentNews.title }}</h2>

          <div class="slider-controls">
            <button @click="prevNews" aria-label="Poprzednia" class="nav-btn">
              <ChevronLeft class="arrow" />
            </button>

            <div class="news-image-wrapper">
              <img :src="currentNews.image" :alt="currentNews.title" class="news-image" />
            </div>

            <button @click="nextNews" aria-label="Następna" class="nav-btn">
              <ChevronRight class="arrow" />
            </button>
          </div>

          <p class="news-text">{{ currentNews.text }}</p>
          <p class="news-date">{{ currentNews.date }}</p>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const newsList = ref([
  {
    title: 'Warsztaty kulturowe dla młodzieży z Ukrainy',
    text: '2 sierpnia 2025 roku odbyły się wyjątkowe warsztaty integracyjne, w których wzięło udział ponad 40 młodych uczestników z Polski i Ukrainy. W programie znalazły się spotkania z lokalnymi artystami, nauka języka polskiego oraz zajęcia kreatywne. Dzięki wsparciu partnerów udało się stworzyć przestrzeń do dialogu międzykulturowego i budowania nowych przyjaźni.',
    image: '/images/project1.jpg',
    date: '02.08.2025'
  },
  {
    title: 'Fundacja rozpoczyna nowy projekt "Most Pokoleń"',
    text: 'Projekt "Most Pokoleń" ma na celu połączenie seniorów z młodzieżą poprzez cykl spotkań, wspólne działania artystyczne i warsztaty. Inauguracja odbyła się 10 sierpnia 2025 r. w Gdańsku. Uczestnicy mogli spróbować swoich sił w malarstwie, fotografii i tradycyjnym rękodziele. To dopiero początek serii wydarzeń, które będą odbywać się co miesiąc.',
     image: '/images/project1.jpg',
    date: '10.08.2025'
  },
  {
    title: 'Koncert charytatywny na rzecz młodych talentów',
    text: '20 sierpnia 2025 r. zorganizowaliśmy koncert charytatywny w centrum Gdańska, podczas którego wystąpili młodzi artyści z regionu. Dochód z wydarzenia przeznaczony został na stypendia dla utalentowanej młodzieży z trudnych środowisk. Dzięki wsparciu mieszkańców udało się zebrać ponad 50 000 zł!',
     image: '/images/project1.jpg',
    date: '20.08.2025'
  }
])

const currentIndex = ref(0)
const currentNews = computed(() => newsList.value[currentIndex.value])

const prevNews = () => {
  currentIndex.value = (currentIndex.value - 1 + newsList.value.length) % newsList.value.length
}
const nextNews = () => {
  currentIndex.value = (currentIndex.value + 1) % newsList.value.length
}
</script>

<style scoped>
.news-section {
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #f5f6fb, #eef0f8);
}

/* Karta większa i bardziej elegancka */
.news-card {
  width: 95%;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(200, 200, 200, 0.2);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

/* Tytuł */
.news-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1c1c3c;
  text-align: center;
}

/* Strzałki + obrazek */
.slider-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.nav-btn {
  background: var(--violet);
  border: none;
  border-radius: 50%;
  padding: 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, background 0.3s ease;
}
.nav-btn:hover {
  background: #5a33a1;
  transform: scale(1.1);
}

.arrow {
  width: 30px;
  height: 30px;
  color: white;
}

/* Obraz większy */
.news-image-wrapper {
  border: 3px solid var(--violet);
  padding: 5px;
  border-radius: 8px;
  background: white;
  max-width: 100%;
}
.news-image {
  width: 100%;
  max-width: 550px;
  border-radius: 4px;
  display: block;
}

/* Tekst – więcej miejsca */
.news-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 1.5rem auto;
  color: #333;
  max-width: 750px;
  text-align: justify;
}

/* Data */
.news-date {
  margin-top: 1rem;
  font-size: 1rem;
  color: #777;
  text-align: center;
}

/* Animacja */
.slide-fade-enter-active {
  animation: slideIn 0.5s ease forwards;
}
.slide-fade-leave-active {
  animation: slideOut 0.4s ease forwards;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slideOut {
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(-40px); }
}
</style>
