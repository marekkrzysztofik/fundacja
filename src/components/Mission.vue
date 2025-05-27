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
        <span
          v-for="(value, index) in langState.t.main.mission.values"
          :key="index"
          class="value"
        >
          {{ value }}
          <span v-if="index < langState.t.main.mission.values.length - 1" class="separator">|</span>
        </span>
      </div>
    </div>
  </section>
</template>


<script setup>
import langState from '@/lang/langState'
import {
  BookOpen,
  GraduationCap,
  Globe,
  Handshake,
  HelpingHand,
} from 'lucide-vue-next'
import { computed } from 'vue'

const icons = [BookOpen, GraduationCap, Globe, HelpingHand]

// połączenie tłumaczeń z ikonami jako computed – reaguje na zmianę języka
const goals = computed(() =>
  langState.t.main.mission.goals.map((goal, index) => ({
    ...goal,
    icon: icons[index]
  }))
)
</script>

<style scoped>
.mission-section {
  background-color: #ffffff;
  padding: 4rem 1.5rem;
}

.mission-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.mission-heading {
  font-size: 2rem;
  font-weight: bold;
  color: #4b2c92;
  margin-bottom: 1rem;
}

.mission-motto {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: #333;
}

.goals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.goal {
  padding: 1rem;
  border-radius: 8px;
  background-color: #f5f1fb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.goal-icon {
  width: 48px;
  height: 48px;
  color: #4b2c92;
  margin-bottom: 1rem;
}

.goal h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4b2c92;
  margin-bottom: 0.5rem;
}

.goal p {
  font-size: 0.95rem;
  color: #555;
}

.values {
  font-size: 1rem;
  font-weight: 500;
  color: #4b2c92;
}

.separator {
  margin: 0 0.5rem;
  color: #aaa;
}
</style>
