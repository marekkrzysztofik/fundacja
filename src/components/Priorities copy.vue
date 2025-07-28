<template>
  <section class="priorities-section" id="priorities">
    <div class="priorities-container">
      <h2 class="priorities-heading">{{ langState.t.main.priorities.title }}</h2>
      <p class="priorities-intro">
        {{ langState.t.main.priorities.intro }}
      </p>

      <div class="priority-grid">
        <div
          class="priority-row"
          v-for="(priority, index) in langState.t.main.priorities.items"
          :key="index"
        >
          <div class="priority-cell heading">{{ priority.area }}</div>
          <div class="priority-cell">{{ priority.what }}</div>
          <div class="priority-cell">{{ priority.who }}</div>
          <div class="priority-cell">{{ priority.why }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
</script>

<style scoped>
.priorities-section {
  background-color: #f5f1fb;
  padding: 4rem 1.5rem;
}

.priorities-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.priorities-heading {
  font-size: 2rem;
  font-weight: bold;
  color: #4b2c92;
  margin-bottom: 1rem;
}

.priorities-intro {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.priority-grid {
  display: grid;
  gap: 1rem;
}

.priority-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  text-align: left;
}

.priority-cell {
  font-size: 0.95rem;
  color: #333;
  padding: 0.5rem;
}

.priority-cell.heading {
  font-weight: 600;
  color: #4b2c92;
}
</style>
