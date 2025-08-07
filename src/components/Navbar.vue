<template>
  <header class="navbar" :class="{ hidden: isNavbarHidden }">
    <div class="navbar-container">
      <div class="navbar-logo">
        <a @click="goHome">Fundacja ISEF</a>
      </div>

      <!-- 🌐 Dropdown wyboru języka -->


      <button class="hamburger" @click="isMenuOpen = !isMenuOpen">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </button>

      <transition name="mobile-menu">
        <nav class="navbar-menu" :class="{ open: isMenuOpen }" v-show="isMenuOpen || isDesktop">
          <a v-for="(link, index) in navLinks" :key="index" @click.prevent="handleNavClick(link.href)">
            {{ link.label }}
          </a>
          <a @click="visible = true" class="contact-button">{{ langState.t.main.navbar.contact }}</a>
          <div class="lang-switch" @click="toggleLangMenu">
            <span>{{ currentLangLabel }}</span> ⌄
            <ul v-if="langMenuOpen" class="lang-menu">
              <li v-for="lang in languages" :key="lang.code" @click.stop="changeLang(lang.code)">
                <span>{{ lang.flag }}</span> {{ lang.label }}
              </li>
            </ul>
          </div>
        </nav>

      </transition>
    </div>
  </header>

  <Dialog v-model:visible="visible" modal>
    <ContactForm />
  </Dialog>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import langState from '@/lang/langState'
import Dialog from 'primevue/dialog'
import ContactForm from '@/components/ContactForm.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 🔹 Navbar scroll
let lastScroll = 0
const isNavbarHidden = ref(false)
const isMenuOpen = ref(false)
const windowWidth = ref(window.innerWidth)
const visible = ref(false)
const isDesktop = computed(() => windowWidth.value > 768)

// 🔹 Linki nawigacji
const navLinks = computed(() => [
  { href: '#mission', label: langState.t.main.navbar.mission },
  { href: '#priorities', label: langState.t.main.navbar.priorities },
  { href: '#projects', label: langState.t.main.navbar.projects },
  { href: '#team', label: langState.t.main.navbar.about },
])

// 🔹 Obsługa języka
const languages = [
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ua', label: 'Українська', flag: '🇺🇦' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' }
]
const currentLang = ref('pl')
const langMenuOpen = ref(false)

const currentLangLabel = computed(() => {
  const lang = languages.find(l => l.code === langState.lang) || languages[0]
  return `${lang.flag} ${lang.label}`
})

function toggleLangMenu() {
  langMenuOpen.value = !langMenuOpen.value
}

function changeLang(code) {
  langState.lang = code
  langMenuOpen.value = false
}

// 🔹 Funkcje scroll i resize
const handleNavClick = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  isMenuOpen.value = false
}

function goHome() {
  if (route.path === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
  else router.push('/')
}

function handleScroll() {
  const currentScroll = window.pageYOffset
  if (currentScroll <= 0) { isNavbarHidden.value = false; return }
  isNavbarHidden.value = currentScroll > lastScroll && currentScroll > 100
  lastScroll = currentScroll
}

function handleResize() {
  windowWidth.value = window.innerWidth
  if (isDesktop.value) isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ✅ Podstawowe style navbara */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
  transition: transform 0.3s ease;
}

.navbar.hidden {
  transform: translateY(-100%);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

/* 🔹 LOGO */
.navbar-logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4b2c92;
  cursor: pointer;
  text-decoration: none;
}

/* 🔹 MENU */
.navbar-menu {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.navbar-menu a {
  cursor: pointer;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s;
}

.navbar-menu a:hover {
  color: #4b2c92;
}

.contact-button {
  background: #4b2c92;
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.3s;
}

.contact-button:hover {
  background: #362070;
}

/* 🔹 DROPDOWN JĘZYKOWY */
.lang-switch {
  position: relative;
  cursor: pointer;
  font-weight: 500;
  color: #333;
  background: #f7f7f7;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #ddd;
  transition: background 0.3s;
}

.lang-switch:hover {
  background: #eee;
}

.lang-menu {
  position: absolute;
  right: 0;
  top: 120%;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  min-width: 140px;
  animation: fadeIn 0.2s ease;
}

.lang-menu li {
  padding: 0.4rem 1rem;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.2s;
}

.lang-menu li:hover {
  background: #f0f0f0;
}

/* 🔹 ANIMACJA */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 🔹 HAMBURGER */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #333;
  transition: transform 0.3s, opacity 0.3s;
}

.hamburger span.open:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* 🔹 MOBILE */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navbar-menu {
    flex-direction: column;
    align-items: flex-end;
    background: white;
    width: 100%;
    position: absolute;
    top: 100%;
    right: 0;
    padding: 1.5rem;
    gap: 1rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }
}
</style>
