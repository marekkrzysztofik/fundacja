<template>
  <section class="contact-section" id="contact">
    <div class="contact-container">
      <h2 class="contact-heading">{{ langState.t.main.contact.title }}</h2>
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-row">
          <label>{{ langState.t.main.contact.name }}</label>
          <input v-model="form.name" type="text" required />
        </div>

        <div class="form-row">
          <label>{{ langState.t.main.contact.surname }}</label>
          <input v-model="form.surname" type="text" required />
        </div>

        <div class="form-row">
          <label>{{ langState.t.main.contact.email }}</label>
          <input v-model="form.email" type="email" required />
        </div>

        <div class="form-row">
          <label>{{ langState.t.main.contact.phone }}</label>
          <input v-model="form.phone" type="tel" />
        </div>

        <div class="form-row">
          <label>{{ langState.t.main.contact.topic }}</label>
          <select v-model="form.topic" required>
            <option disabled value="">{{ langState.t.main.contact.topicPlaceholder }}</option>
            <option value="contact">{{ langState.t.main.contact.topicContact }}</option>
            <option value="project">{{ langState.t.main.contact.topicProject }}</option>
          </select>
        </div>

        <div v-if="form.topic === 'project'" class="form-row">
          <label>{{ langState.t.main.contact.project }}</label>
          <select v-model="form.project" required>
            <option disabled value="">{{ langState.t.main.contact.projectPlaceholder }}</option>
            <option value="uni">{{ langState.t.main.contact.projectUni }}</option>
            <option value="plomyk">{{ langState.t.main.contact.projectPlomyk }}</option>
            <option value="internship">{{ langState.t.main.contact.projectIntern }}</option>
          </select>
        </div>

        <div class="form-row">
          <label>{{ langState.t.main.contact.message }}</label>
          <textarea v-model="form.message" rows="4" required></textarea>
        </div>

        <div class="form-row checkbox">
          <label>
            <input type="checkbox" v-model="form.rodo1" required />
            {{ langState.t.main.contact.rodo1 }}
          </label>
        </div>
        <div class="form-row checkbox">
          <label>
            <input type="checkbox" v-model="form.rodo2" required />
            {{ langState.t.main.contact.rodo2 }}
          </label>
        </div>

        <button type="submit" class="submit-button">
          {{ langState.t.main.contact.submit }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import langState from '@/lang/langState'

const form = reactive({
  name: '',
  surname: '',
  email: '',
  phone: '',
  topic: '',
  project: '',
  message: '',
  rodo1: false,
  rodo2: false
})

function handleSubmit() {
  console.log('Form data:', form)
  alert(langState.t.main.contact.confirmation)
  // Tu: zapisz do pliku, wyślij na email itp.
}
</script>

<style scoped>
.contact-section {
  background-color: #f5f1fb;
  padding: 4rem 1.5rem;
}

.contact-container {
  max-width: 700px;
  margin: 0 auto;
}

.contact-heading {
  font-size: 2rem;
  font-weight: bold;
  color: #4b2c92;
  margin-bottom: 2rem;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-row label {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-row input,
.form-row select,
.form-row textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.form-row.checkbox label {
  font-weight: normal;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.submit-button {
  background-color: #4b2c92;
  color: white;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #362070;
}
</style>
