<template>
  <section ref="section" class="scroll-section" id="projects" :style="{height: `${projects.length * 100 }vh` }">
    <div ref="sticky" class="sticky-wrapper">
      <div ref="scrollTrack" class="scroll-track" :style="{ transform: `translateX(-${ currentSlide * 100}vw)` }">
        <div v-for="project in projects" :key="project.id" class="slide">
          <h2 class="heading">{{ project.title }}</h2>
          <p class="intro">{{ project.description }}</p>
          <div class="container">
            <div>
              <div class="image-wrapper">
                <img :src="project.image" :alt="project.title" class="photo" />
              </div>
              <button class="cta-button">{{ project.cta }}</button>
            </div>


            <div class="text-content">


              <div class="card-grid">
                <div class="card">
                  <div class="card-icon-title">
                    <MapPin class="card-icon" />
                    <h3>{{ project.format.title }}</h3>
                  </div>
                  <p>{{ project.format.content }}</p>
                </div>

                <div class="card">
                  <div class="card-icon-title">
                    <BookOpen class="card-icon" />
                    <h3>{{ project.modules.title }}</h3>
                  </div>
                  <ul>
                    <li v-for="(mod, index) in project.modules.list" :key="index">{{ mod }}</li>
                  </ul>
                </div>

                <div class="card">
                  <div class="card-icon-title">
                    <Target class="card-icon" />
                    <h3>{{ project.result.title }}</h3>
                  </div>
                  <p>{{ project.result.count }}</p>
                  <p>{{ project.result.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { MapPin, BookOpen, Target } from 'lucide-vue-next'
const section = ref(null)
const currentSlide = ref(0)
const projects = [
  {
    id: 'uniwersytet',
    title: 'Ogólnopolski Uniwersytet Trzeciego Wieku dla Ukraińców',
    description: 'Program edukacyjny w formie hybrydowej wspierający rozwój i integrację seniorów z Ukrainy.',
    image: '/images/project1.png',
    format: {
      title: 'Format',
      content: 'Zajęcia online i stacjonarne w Gdańsku',
    },
    modules: {
      title: 'Moduły',
      list: ['Język polski', 'Obywatelstwo cyfrowe', 'Aktywizacja zawodowa'],
    },
    result: {
      title: 'Rezultat',
      count: '500+ absolwentów rocznie',
      description: 'Rozwój sieci mentorów senioralnych',
    },
    cta: 'Dołącz do nas',
  },
  {
    id: 'plomyk',
    title: 'Płomyk nadziei',
    description: '10-dniowe wizyty edukacyjno-kulturowe dla młodzieży z Ukrainy.',
    image: '/images/project2.png',
    format: {
      title: 'Cel',
      content: 'Edukacyjno-kulturowe turnusy młodzieżowe',
    },
    modules: {
      title: 'Aktywności',
      list: [
        'Spotkania z nauczycielami UG',
        'Warsztaty historyczne',
        'Wycieczki po Trójmieście',
      ],
    },
    result: {
      title: 'Skala 2025',
      count: '6 turnusów × 40 uczestników',
      description: 'Ponad 240 młodych osób w jednym roku',
    },
    cta: 'Dołącz do turnusu',
  },
  {
    id: 'staze',
    title: 'Staże naukowe w Gdańsku',
    description: 'Program badawczy z opieką mentorską dla młodych naukowców z Ukrainy.',
    image: '/images/project3.png',
    format: {
      title: 'Partner wiodący',
      content: 'Uniwersytet Gdański',
    },
    modules: {
      title: 'Dyscypliny',
      list: ['Socjologia', 'Politologia', 'Kulturoznawstwo', 'Ekonomia'],
    },
    result: {
      title: 'Czas trwania',
      count: '3–6 miesięcy',
      description: 'Stypendium, mentor, publikacja w czasopiśmie UG',
    },
    cta: 'Aplikuj na staż',
  },
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  gap: 2rem;
}

.image-wrapper {
  flex: 1;
  max-width: 600px;
}

.photo {
  width: 100%;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 6px 30px rgba(91, 44, 111, 0.25);
}

.text-content {
  flex: 1;
  max-width: 700px;
  text-align: left;
}

.heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--violet);
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--subtitle);
}

.card-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.card {
  background: white;
  padding: 1.2rem;
  border-radius: 15px;
  box-shadow: 0 3px 15px rgba(91, 44, 111, 0.1);
  transition: transform 0.3s ease;
  border-left: 5px solid var(--violet);
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  font-size: 1.1rem;
  color: var(--violet);
}

.card ul {
  padding-left: 1.2rem;
  list-style: disc;
  color: var(--subtitle);
}

.card-icon-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
}

.card-icon {
  width: 22px;
  height: 22px;
  color: var(--violet);
}

.cta-button {
  background: var(--violet);
  color: #fff;
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(142, 68, 173, 0.25);
}

.cta-button:hover {
  background: #732d91;
}



/* RESPONSYWNOŚĆ */
@media (max-width: 768px) {
  .slide {
    justify-content: center;
    padding: 0 1rem;
  }

  .slide-content {
    justify-content: center;
  }

  .slide-overlay {
    max-width: 90%;
    padding: 1.5rem;
    text-align: center;
  }

  .slide-overlay h2 {
    font-size: 1.6rem;
  }

  .slide-overlay li {
    font-size: 1rem;
  }
}
</style>