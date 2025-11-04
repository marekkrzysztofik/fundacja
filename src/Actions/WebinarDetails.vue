<template>
  <div class="webinar-details">
    <h2 class="details-title">{{ project.title }}</h2>
    <p class="details-intro">{{ project.details.intro }}</p>

    <div class="session-list">
      <div
        v-for="(session, index) in project.details.sessions"
        :key="index"
        class="session-card"
      >
        <div class="session-info">
          <h3>{{ session.title }}</h3>
          <p><strong>Data:</strong> {{ session.date }}</p>
          <p><strong>Godzina:</strong> {{ session.time }}</p>
          <p><strong>Cena:</strong> {{ session.price }} zł</p>
        </div>
      </div>
    </div>

    <div class="package-summary">
      <p><strong>Cały pakiet:</strong> {{ project.details.packagePrice }} zł</p>
      <p class="notes">{{ project.details.notes }}</p>
    </div>

    <div class="contact-info">
      <p>📩 Kontakt: <a :href="`mailto:${project.details.contact}`">{{ project.details.contact }}</a></p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.webinar-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: #faf9fb;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 6px 24px rgba(91, 44, 111, 0.15);
  color: #333;
}

.details-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--violet);
  margin-bottom: 0.5rem;
}

.details-intro {
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
}

.session-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.session-card {
  background: white;
  border-left: 5px solid var(--violet);
  padding: 1.2rem 1.5rem;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.session-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 14px rgba(91, 44, 111, 0.15);
}

.session-info h3 {
  font-size: 1.1rem;
  color: var(--violet);
  margin-bottom: 0.3rem;
}

.session-info p {
  margin: 0.2rem 0;
  font-size: 0.95rem;
}

.package-summary {
  background: #f3edf9;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  border-left: 4px solid var(--violet);
}

.package-summary p {
  margin: 0.3rem 0;
}

.package-summary strong {
  color: var(--violet);
}

.notes {
  font-size: 0.9rem;
  color: #555;
  margin-top: 0.3rem;
}

.contact-info {
  margin-top: 1rem;
  text-align: right;
  font-size: 0.95rem;
}

.contact-info a {
  color: var(--violet);
  font-weight: 600;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* Responsywność */
@media (max-width: 768px) {
  .webinar-details {
    padding: 1.5rem;
  }

  .details-title {
    font-size: 1.5rem;
    text-align: center;
  }

  .details-intro {
    text-align: center;
    font-size: 1rem;
  }

  .contact-info {
    text-align: center;
  }
}
</style>
