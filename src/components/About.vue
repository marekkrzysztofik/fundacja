<template>
  <section class="board-section" id="team">
    <div class="board-container">
      <h2 class="section-title">Członkowie zarządu</h2>

      <div class="board-grid">
        <div class="member-card" v-for="(member, index) in members" :key="index">
          <img :src="member.photo" :alt="member.name" class="member-photo" />
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-bio">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const members = [
  {
    name: 'Patryk Bławat',
    photo: '/images/patryk.png', // zamień na ścieżkę do faktycznego zdjęcia
    bio: `Założyciel stowarzyszenia „Wiatr od Morza”, które od 2021 roku realizuje projekty w ramach budżetu obywatelskiego, organizuje wydarzenia kulturalne i popularyzuje wiedzę o Gdyni. Od 2024 roku jest radnym Dzielnicy Gdynia Cisowa oraz członkiem Gdyńskiego Komitetu Rewitalizacji. Jako student gospodarki przestrzennej łączy działalność społeczną z zainteresowaniem planowaniem przestrzennym i rozwojem lokalnym.`,
  },
  {
    name: 'Patryk Bławat',
    photo: '/images/patryk.png', // zamień na ścieżkę do faktycznego zdjęcia
    bio: `Założyciel stowarzyszenia „Wiatr od Morza”, które od 2021 roku realizuje projekty w ramach budżetu obywatelskiego, organizuje wydarzenia kulturalne i popularyzuje wiedzę o Gdyni. Od 2024 roku jest radnym Dzielnicy Gdynia Cisowa oraz członkiem Gdyńskiego Komitetu Rewitalizacji. Jako student gospodarki przestrzennej łączy działalność społeczną z zainteresowaniem planowaniem przestrzennym i rozwojem lokalnym.`,
  },
  {
    name: 'Patryk Bławat',
    photo: '/images/patryk.png', // zamień na ścieżkę do faktycznego zdjęcia
    bio: `Założyciel stowarzyszenia „Wiatr od Morza”, które od 2021 roku realizuje projekty w ramach budżetu obywatelskiego, organizuje wydarzenia kulturalne i popularyzuje wiedzę o Gdyni. Od 2024 roku jest radnym Dzielnicy Gdynia Cisowa oraz członkiem Gdyńskiego Komitetu Rewitalizacji. Jako student gospodarki przestrzennej łączy działalność społeczną z zainteresowaniem planowaniem przestrzennym i rozwojem lokalnym.`,
  },
]
</script>

<style scoped>
.board-section {
  margin: 0 auto;
  max-width: 1300px;
  background-color: #f9f9fb;
  padding: 4rem 1.5rem;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  color: #4b2c92;
  margin-bottom: 3rem;
  font-weight: bold;
}

.board-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  justify-content: center;
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
  width: 120px;
  height: 120px;
  object-fit: cover;
  object-position: center top;
  border-radius: 50%;
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
</style>
