<template>
  <header class="navbar" :class="{ hidden: isNavbarHidden }">
    <div class="navbar-container">
      <div class="navbar-logo">
        <a @click="goHome">Fundacja</a>
      </div>

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
import Dialog from 'primevue/dialog';
import ContactForm from '@/components/ContactForm.vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()


let lastScroll = 0
const isNavbarHidden = ref(false)
const isMenuOpen = ref(false)
const windowWidth = ref(window.innerWidth)
const visible = ref(false);
const isDesktop = computed(() => windowWidth.value > 768)

const navLinks = computed(() => [
  { href: '#mission', label: langState.t.main.navbar.mission },
  { href: '#priorities', label: langState.t.main.navbar.priorities },
  { href: '#projects', label: langState.t.main.navbar.projects },
  { href: '#team', label: langState.t.main.navbar.about },
  { href: '#partners', label: langState.t.main.navbar.partners },
  { href: '#news', label: langState.t.main.navbar.news },
])

const handleNavClick = (href) => {
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}

function goHome() {
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}

function handleScroll() {
  const currentScroll = window.pageYOffset

  if (currentScroll <= 0) {
    isNavbarHidden.value = false
    return
  }

  if (currentScroll > lastScroll && currentScroll > 100) {
    isNavbarHidden.value = true
  } else if (currentScroll < lastScroll) {
    isNavbarHidden.value = false
  }

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
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
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

.navbar-logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4b2c92;
  cursor: pointer;
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.navbar-menu a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
}

.navbar-menu a:hover {
  color: #4b2c92;
}

.contact-button {
  background-color: #4b2c92;
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #362070;
}

/* HAMBURGER */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
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

/* TRANSITION - mobile-menu */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  overflow: hidden;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;
}

/* RESPONSYWNOŚĆ */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navbar-menu {
    flex-direction: column;
    align-items: flex-end;
    background-color: white;
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
