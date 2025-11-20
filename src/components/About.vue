<template>
  <section class="board-section" id="team">
    <div class="board-container">
      <h2 class="section-title">{{ boardTitle }}</h2>

      <div class="board-grid">
        <div class="member-card" v-for="(member, index) in members" :key="member.id ?? member.name ?? index">
          <img :src="member.photo" :alt="member.name" class="member-photo" />
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-bio">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import langState from '@/lang/langState'

const boardTitle = computed(() =>
  langState.t.main.board?.title ?? langState.t.main.team?.title ?? 'Członkowie zarządu'
)

const members = computed(() =>
  langState.t.main.board?.members ?? langState.t.main.team?.members ?? []
)
</script>

<style scoped>
.board-section {
  margin: 12rem auto;
  padding: 4rem 1.5rem;
  text-align: center;
}

.board-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 2rem;
  color: #4b2c92;
  margin-bottom: 3rem;
  font-weight: bold;
}

.board-grid {
  max-width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.member-card {
  background-color: white;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.member-card:hover {
  transform: translateY(-5px);
}

.member-photo {
  width: 150px;
  height: 200px;
  object-fit: cover;
  object-position: center top;
  border-radius: 35px;
  margin-bottom: 1.2rem;
  border: 3px solid #4b2c92;
}

.member-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.8rem;
}

.member-bio {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  text-align: left;
}

@media (max-width: 768px) {
  .member-card {
    width: 100%;
  }
  .board-section {
    padding: 0;
  }
  .board-grid {
    max-width: 90%;
    display: flex;
    flex-direction: column;
  }
}
</style>
