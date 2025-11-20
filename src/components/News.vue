<template>
  <section class="news-section">
    <div class="slider-wrapper">
      <button @click="prevSlide" class="slider-btn left">
        <ChevronLeft class="icon" />
      </button>

      <div class="viewport">
        <div class="slides" :style="{
          transform: `translateX(-${currentIndex * slideWidth}%)`,
        }">
          <div v-for="(item, index) in newsList" :key="index" class="news-box">
            <img :src="item.image" class="news-img" :alt="item.title" />

            <h3 class="news-title">{{ item.title }}</h3>

            <p class="news-text">{{ item.text }}</p>
            <button v-if="item.button" @click="linkTo('webinars')" class="btn news-btn">{{ item.button }}</button>

            <p class="news-date">{{ item.date }}</p>
          </div>
        </div>
      </div>

      <button @click="nextSlide" class="slider-btn right">
        <ChevronRight class="icon" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import langState from '@/lang/langState'
import { useRouter } from 'vue-router'

const router = useRouter()
const newsList = computed(() => langState.t.main.news)

const itemsPerSlide = window.innerWidth < 768 ? 1 : 2

const currentIndex = ref(0)


const slideWidth = 100 / itemsPerSlide

const maxIndex = computed(() =>
  Math.ceil(newsList.value.length / itemsPerSlide)
)

const nextSlide = () => {
  console.log(maxIndex.value)
  currentIndex.value = currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value <= 0 ? maxIndex.value : currentIndex.value - 1
}

function linkTo(href) {
  router.push(`/${href}`);
}
</script>

<style scoped>
.news-section {
  width: 100%;
  padding: 4rem 0;
  background-color: var(--light);
}


.slider-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
}

.viewport {
  overflow: hidden;
  width: 100%;
}

.slides {
  display: flex;
  transition: transform 0.6s ease;
}

.news-box {
  flex: 0 0 47%;
  background: white;
  margin: 1rem;
  border-radius: 14px;
  padding: 1.5rem;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.07);
  border: 1px solid rgba(210, 210, 210, 0.4);
  display: flex;
  flex-direction: column;
}

.news-img {
  height: 230px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}
.news-btn {
 width: 200px;
}
.news-title {
  min-height: 5rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #4b2c92;
  
}
.news-text {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #333;
  flex-grow: 1;
}

.news-date {
  margin-top: 1rem;
  text-align: right;
  color: #777;
  font-size: 0.95rem;
}


.slider-btn {
  background: var(--violet);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  z-index: 20;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  transition: 0.2s;
}

.slider-btn:hover {
  transform: translateY(-50%) scale(1.1);
  background: #5a33a1;
}

.slider-btn.left {
  left: -50px;
}

.slider-btn.right {
  right: -30px;
}

.icon {
  width: 28px;
  height: 28px;
  color: white;
}

@media (max-width: 900px) {
  .news-box {
    flex: 0 0 100%;
    margin: 0.5rem;
  }

  .slider-btn.left {
    left: 5px;
  }

  .slider-btn.right {
    right: 5px;
  }
}

@media (max-width: 600px) {
  .news-img {
    height: 200px;
  }

  .news-title {
    font-size: 1.4rem;
  }

  .news-text {
    font-size: 1rem;
  }
}
</style>
