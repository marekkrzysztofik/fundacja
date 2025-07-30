<template>
  <section class="mission-section" id="mission">
    <div class="mission-container">
      <h2 class="mission-heading">{{ langState.t.main.mission.title }}</h2>
      <p class="mission-motto">
        {{ langState.t.main.mission.motto }}
      </p>

      <div class="goals-grid">
        <div class="goal" v-for="(goal, index) in goals" :key="index">
          <component :is="goal.icon" class="goal-icon" />
          <h3>{{ goal.title }}</h3>
          <p>{{ goal.description }}</p>
        </div>
      </div>

      <div class="values">
        <span v-for="(value, index) in langState.t.main.mission.values" :key="index" class="value">
          {{ value }}
          <span v-if="index < langState.t.main.mission.values.length - 1" class="separator">|</span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
import { onMounted, computed } from 'vue'
import { FlaskConical, GraduationCap, Users, Globe2, Flag, Share2, Building, HelpingHand } from 'lucide-vue-next'

const iconMap = {
  FlaskConical,
  GraduationCap,
  Users,
  Globe2,
  Flag,
  Share2,
  Building,
  HelpingHand,
}



const goals = computed(() =>
  langState.t.main.mission.goals.map((goal) => ({
    ...goal,
    icon: iconMap[goal.icon]
  }))
)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  const items = document.querySelectorAll('.goal')
  items.forEach((el, i) => {
    el.style.transitionDelay = `${i * 220}ms`
    observer.observe(el)
  })
})

</script>

<style scoped>
.mission-section {
  background-color: #ffffff;
  padding: 4rem 1.5rem;
}

.mission-container {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
}

.mission-heading { 
  font-size: 2rem;
  font-weight: bold;
  color: var(--violet);
  margin-bottom: 1rem;
}

.mission-motto {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: #333;
}

.goals-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.goal {
  opacity: 0;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* elementy zaczynają od góry */
  transition: all 0.6s ease-out;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f5f1fb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.goal.visible {
  opacity: 1;
  transform: translateY(0);
}

.goal-icon {
  width: 40px;
  height: 40px;
  color: var(--violet);
  margin-bottom: 1.5rem;
}

.goal h3 {
  font-size: 1.1rem;
  font-weight: 600;
  min-height: 3.2em; /* np. miejsce na 2 linijki */
  color: var(--violet);
  margin-bottom: 0.5rem;
}

.goal p {
  font-size: 0.95rem;
  color: var(--subtitle);
  min-height: 4.5em; /* np. miejsce na 3 linijki */
}

.values {
  font-size: 1rem;
  font-weight: 500;
  color: var(--violet);
}

.separator {
  margin: 0 0.5rem;
  color: #aaa;
}
</style>
