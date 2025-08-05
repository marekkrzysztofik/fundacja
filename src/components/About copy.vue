<template>
  <section class="team-section" id="team">
    <div class="team-container">
      <h2 class="team-heading">{{ langState.t.main.team.title }}</h2>
      <p class="team-subtitle">{{ langState.t.main.team.subtitle }}</p>
      <p class="about">
        Fundacja ISEF została powołana, by działać tam, gdzie nauka spotyka się z edukacją i realnymi wyzwaniami
        społecznymi. Będziemy koncentrować się na tym, co jest dziś niezwykle istotne: wspieraniu edukacji, rozwijaniu
        współpracy międzynarodowej i budowaniu dialogu międzykulturowego.
        Nasze działania skupiają się na tworzeniu przestrzeni do wymiany wiedzy i doświadczeń – między uczelniami,
        samorządami, organizacjami pozarządowymi i społecznościami z różnych krajów. W centrum naszych zainteresowań
        znajdują się Europa Środkowo-Wschodnia.
        Tworzymy interdyscyplinarny zespół ludzi nauki, edukacji i praktyki społecznej.

      </p>
    </div>
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
</script>

<style scoped>
.team-section {
  background-color: #ffffff;
  padding: 4rem 1.5rem;
}

.team-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.about {
  color: black;
}

.team-heading {
  font-size: 2rem;
  font-weight: bold;
  color: #4b2c92;
  margin-bottom: 0.5rem;
}

.team-subtitle {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 3rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.team-member {
  background-color: #f5f1fb;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  max-width: 260px;
}

.member-photo {
  width: 100%;
  max-width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.member-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4b2c92;
  margin-bottom: 0.25rem;
}

.member-role {
  font-size: 0.95rem;
  color: #555;
}
</style>
