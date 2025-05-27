<template>
  <section ref="section" class="scroll-section" :style="{ height: `${projects.length * 100}vh` }">
    <div ref="sticky" class="sticky-wrapper">
      <div
        ref="scrollTrack"
        class="scroll-track"
        :style="{ transform: `translateX(-${currentSlide * 100}vw)` }"
      >
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="slide"
          :style="{ backgroundImage: `url(${project.image})` }"
        >
          <div class="slide-overlay">
            <h2>{{ project.title }}</h2>
            <ul>
              <li><strong>Format:</strong> {{ project.format }}</li>
              <li><strong>Moduły:</strong> {{ project.modules }}</li>
              <li><strong>Rezultat:</strong> {{ project.result }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const section = ref(null)
const currentSlide = ref(0)

const projects = [
  {
    title: 'Uniwersytet Trzeciego Wieku',
    format: 'zajęcia hybrydowe',
    modules: 'język polski, cyfrowe obywatelstwo',
    result: '500+ absolwentów',
    image: '/images/project1.png'
  },
  {
    title: 'Płomyk nadziei',
    format: '10 dni w Trójmieście',
    modules: 'warsztaty, UG, wycieczki',
    result: '240 uczestników',
    image: '/images/project2.png'
  },
  {
    title: 'Staże naukowe',
    format: '3–6 miesięcy UG',
    modules: 'mentor, stypendium',
    result: 'naukowcy UA',
    image: '/images/project3.png'
  }
]

function onScroll() {
  const sectionEl = section.value
  const scrollTop = window.scrollY
  const sectionTop = sectionEl.offsetTop
  const sectionHeight = sectionEl.offsetHeight - window.innerHeight
  const progress = Math.min(Math.max((scrollTop - sectionTop) / sectionHeight, 0), 1)

  // Wylicz aktualny slajd jako pełne "kliknięcie"
  currentSlide.value = Math.min(Math.floor(progress * projects.length), projects.length - 1)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.scroll-section {
  position: relative;
  background: #f2f2f2;
}

.sticky-wrapper {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.scroll-track {
  display: flex;
  height: 100%;
  transition: transform 0.6s ease-in-out;
}

.slide {
  flex: 0 0 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-overlay {
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 600px;
  width: 90%;
  text-align: left;
}

.slide-overlay h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffd700;
}

.slide-overlay ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.slide-overlay li {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}
</style>
