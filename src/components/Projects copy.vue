<template>
  <section ref="observerSection" class="horizontal-section" id="projects">
    <div ref="scrollContainer" class="scroll-container">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="slide"
        :style="{ backgroundImage: `url(${project.image})` }"
      >
        <div class="slide-content">
          <h2>{{ project.title }}</h2>
          <p><strong>Format:</strong> {{ project.format }}</p>
          <p><strong>Moduły:</strong> {{ project.modules }}</p>
          <p><strong>Rezultat:</strong> {{ project.result }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const observerSection = ref(null)
const scrollContainer = ref(null)
const isActive = ref(false)

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

function handleWheel(e) {
  console.log('scroll', isActive.value)
  if (!isActive.value || !scrollContainer.value) return
  e.preventDefault()
  scrollContainer.value.scrollLeft += e.deltaY
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isActive.value = entry.isIntersecting
    },
    { threshold: 0.5 }
  )

  if (observerSection.value) {
    observer.observe(observerSection.value)
  }

  window.addEventListener('wheel', handleWheel, { passive: false })

  onBeforeUnmount(() => {
    observer.disconnect()
    window.removeEventListener('wheel', handleWheel)
  })
})
</script>

<style scoped>
.horizontal-section {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.scroll-container {
  display: flex;
  height: 100%;
  width: max-content;
  scroll-behavior: smooth;
  overflow-x: auto;
}

.slide {
  min-width: 100vw;
  flex: 0 0 100vw;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-content {
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 1rem;
  color: white;
  max-width: 600px;
  text-align: center;
}
</style>
