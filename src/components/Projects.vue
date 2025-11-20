<template>
  <section class="scroll-section" id="projects">
    <div class="slider-wrapper">
      <div class="scroll-track" :style="{ transform: `translateX(-${currentSlide * 100}vw)` }">
        <div v-for="project in langState.t.main.projects" :key="project.id" class="slide">
          <h2 class="heading">{{ project.title }}</h2>
          <p class="intro">{{ project.description }}</p>
          <div class="container">
            <div class="image-container">
              <div class="image-wrapper">
                <img :src="project.image" :alt="project.title" class="photo" />
              </div>
              <button class="cta-button" @click="goToProject(project)">{{ project.cta }}</button>
              <button class="cta-button" @click="openSignup(project)">Zapisz się</button>
            </div>
            <div class="text-content">
              <div class="card-grid">
                <div class="card">
                  <p class="desc">
                    {{ project.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="nav-btn left" @click="prevSlide">‹</button>
      <button class="nav-btn right" @click="nextSlide">›</button>
    </div>
  </section>
  <Dialog v-model:visible="visibleDetails" modal header="Szczegóły programu" style="width: 90vw; max-width: 800px">
    <WebinarDetails v-if="activeProject" :project="activeProject" />
  </Dialog>

  <Dialog v-model:visible="visibleSignup" modal header="Formularz zapisów" style="width: 90vw; max-width: 800px">
    <WebinarSignUp v-if="activeProject" :project="activeProject" />
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import langState from '@/lang/langState'
import WebinarDetails from '@/Actions/WebinarDetails.vue'
import WebinarSignUp from '@/Actions/WebinarSignUp.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const currentSlide = ref(0)
const visibleDetails = ref(false)
const visibleSignup = ref(false)
const activeProject = ref(null)

function nextSlide() {
  if (currentSlide.value < langState.t.main.projects.length - 1) currentSlide.value++
}
function prevSlide() {
  if (currentSlide.value > 0) currentSlide.value--
}

function goToProject (project) {
  router.push(`/webinar/${project.id}`)
}

function openDetails(project) {
  activeProject.value = project
  visibleDetails.value = true
}

function openSignup(project) {
  activeProject.value = project
  visibleSignup.value = true
}

</script>

<style scoped>
.scroll-section {
  
  position: relative;
  background: white;
  overflow: hidden;
}

.slider-wrapper {
  margin: 7rem 0;
  position: relative;
  width: 100%;
  height: 100vh;
}

.scroll-track {
  display: flex;
  height: 100%;
  transition: transform 0.6s ease-in-out;
}

.slide {
  margin: 0 auto;
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
  justify-content: center;
  gap: 2rem;
}

.image-wrapper {
  flex: 1;
  max-width: 700px;
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
  width: 400px;
  text-align: left;
}

.desc {
  font-size: 1rem;
  color: black;
  
}

.heading {
  margin-top: 4rem;
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
  height: 468px;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 3px 15px rgba(91, 44, 111, 0.1);
  transition: transform 0.3s ease;
  border-left: 5px solid var(--violet);
  overflow: hidden;
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
  margin-top: 1rem;
  margin-right: 1rem;
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


.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--violet);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
}

.nav-btn.left {
  left: 90px;
}

.nav-btn.right {
  right: 90px;
}

.nav-btn:hover {
  background: rgba(91, 44, 111, 1);
}

@media (max-width: 768px) {
  .slider-wrapper {
    height: auto;
  }

  .scroll-track {
    flex-direction: column;
  }

  .slide {
    height: auto;
    padding: 2rem 1rem;
    flex-direction: column;
  }

  .image-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container {
    flex-direction: column;
    gap: 1rem;
  }

  .image-wrapper {
    max-width: 100%;
  }

  .photo {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .text-content {
    display: none;
  }

  .card {
    margin-bottom: 2rem;
    height: auto;
    padding: 1rem;
  }

  .nav-btn {
    display: none;
  }

  .heading {
    font-size: 1.5rem;
    text-align: center;
  }

  .intro {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
}


@media (max-width: 768px) {
  .slide {
    width: 85%;
    justify-content: center;
    padding: 0 1rem;
  }

  .container {
    flex-direction: column;
    align-items: center;
  }

  .text-content {
    max-width: 100%;
  }
}
</style>
