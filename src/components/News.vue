<template>
  <section id="news" class="news-section">
    <div class="slider-wrapper" ref="slider" @touchstart="startTouch" @touchmove="moveTouch">
      <!-- DESKTOP ONLY ARROWS -->
      <button v-if="!isMobile" @click="prevSlide" class="slider-btn left">
        <ChevronLeft class="icon" />
      </button>

      <div class="viewport">
        <div class="slides" :style="{
          width: `${newsList.length * (100 / itemsPerView)}%`,
          transform: `translateX(-${currentIndex * (100 / newsList.length)}%)`,
        }">
          <div v-for="(item, index) in newsList" :key="index" class="news-box"
            :style="{ width: 100 / itemsPerView + '%' }">
            <img :src="item.image" class="news-img" :alt="item.title" />

            <h3 class="news-title">{{ item.title }}</h3>

            <p class="news-text">{{ item.text }}</p>

            <button v-if="item.button" @click="linkTo('webinars')" class="btn news-btn">
              {{ item.button }}
            </button>

            <p class="news-date">{{ item.date }}</p>
          </div>
        </div>
      </div>

      <button v-if="!isMobile" @click="nextSlide" class="slider-btn right">
        <ChevronRight class="icon" />
      </button>
    </div>

    <!-- MOBILE HINT -->
    <p v-if="isMobile" class="swipe-hint">← Przesuń palcem →</p>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { useRouter } from "vue-router";
import langState from "@/lang/langState";

const router = useRouter();

// DATA
const newsList = computed(() => langState.t.main.news);

// RESPONSIVE
const isMobile = window.innerWidth < 768;
const itemsPerView = isMobile ? 1 : 2;

// SLIDER INDEX
const currentIndex = ref(0);

// MAX INDEX
const maxIndex = computed(() => newsList.value.length - itemsPerView);

// NEXT / PREV
const nextSlide = () => {
  currentIndex.value =
    currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1;
};

const prevSlide = () => {
  currentIndex.value =
    currentIndex.value <= 0 ? maxIndex.value : currentIndex.value - 1;
};

function linkTo(href) {
  router.push(`/${href}`);
}

/* SWIPE SUPPORT */
const touchStartX = ref(0);

const startTouch = (e) => {
  touchStartX.value = e.touches[0].clientX;
};

const moveTouch = (e) => {
  if (!touchStartX.value) return;

  const diff = touchStartX.value - e.touches[0].clientX;

  if (diff > 50) {
    nextSlide();
    touchStartX.value = 0;
  }
  if (diff < -50) {
    prevSlide();
    touchStartX.value = 0;
  }
};
</script>

<style scoped>
.news-section {
  width: 100%;
  padding: 4rem 0;
  background-color: var(--light);
}

.slider-wrapper {
  width: 100%;
  max-width: 1150px;
  margin: auto;
  position: relative;
}

.viewport {
  overflow: hidden;
  width: 100%;
}

.slides {
  display: flex;
  transition: transform 0.5s ease;
}

/* BOXY */
.news-box {
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
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.news-title {
  font-size: 1.2rem;
  font-weight: 700;
  min-height: 4.4rem;
  color: #4b2c92;
}

.news-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
  flex-grow: 1;
}

.news-btn {
  margin-top: 1rem;
  width: 200px;
}

.news-date {
  margin-top: 1rem;
  text-align: right;
  color: #777;
  font-size: 0.9rem;
}

/* DESKTOP ARROWS */
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

/* MOBILE */
@media (max-width: 768px) {
  .slider-btn {
    display: none;
  }

  .news-img {
    height: 200px;
  }
}

.swipe-hint {
  text-align: center;
  margin-top: 1rem;
  color: #777;
  font-size: 0.9rem;
}
</style>
