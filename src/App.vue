<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
watch(() => route.fullPath, () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
})
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer/>
</template>

