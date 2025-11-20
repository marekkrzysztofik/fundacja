<template>
    <section class="project-hero">

        <!-- 🔥 Nawigacja między projektami -->
        <div class="project-nav">
            <button class="nav-btn" @click="prevProject" aria-label="Poprzedni projekt">
                <ChevronLeft class="icon" />
            </button>

            <button class="nav-btn" @click="nextProject" aria-label="Następny projekt">
                <ChevronRight class="icon" />
            </button>
        </div>

        <h1 class="title">{{ project.title }}</h1>

        <div class="container">
            <p class="intro">{{ project.desc }}</p>
            <img :src="project.image" class="hero-img" />
        </div>
    </section>

    <section class="project-content">
        <div class="left">
            <WebinarDetails :project="project" />
        </div>

        <div class="right">
            <WebinarSignUp :project="project" />
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import langState from '@/lang/langState'
import WebinarDetails from '@/Actions/WebinarDetails.vue'
import WebinarSignUp from '@/Actions/WebinarSignUp.vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

// wszystkie projekty (webinary)
const projects = computed(() => langState.t.main.projects)

// aktualny projekt
const project = computed(() =>
    projects.value.find(p => p.id === route.params.id)
)

// aktualny index
const currentIndex = computed(() =>
    projects.value.findIndex(p => p.id === route.params.id)
)

// przejście do next / previous
const nextProject = () => {
    const nextIndex = (currentIndex.value + 1) % projects.value.length
    router.push(`/webinar/${projects.value[nextIndex].id}`)
}

const prevProject = () => {
    const prevIndex =
        currentIndex.value === 0
            ? projects.value.length - 1
            : currentIndex.value - 1
    router.push(`/webinar/${projects.value[prevIndex].id}`)
}
</script>

<style scoped>
.project-hero {
    margin: 0 auto;
    position: relative;
    width: 90%;
    padding: 2rem 1rem;
}

/* 🔥 Strzałki w prawym górnym rogu */
.project-nav {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: 0.5rem;
}

.nav-btn {
    background: var(--violet);
    border: none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    transition: 0.2s;
}

.nav-btn:hover {
    background: #5a33a1;
    transform: scale(1.1);
}

.icon {
    width: 22px;
    height: 22px;
    color: white;
}

.container {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    display: flex;
    gap: 2rem;
}

.hero-img {
    max-width: 600px;
    width: 100%;
    height: fit-content;
    border-radius: 20px;
    box-shadow: 0 6px 30px rgba(91, 44, 111, 0.25);
}

.title {
    font-size: 2.2rem;
    color: var(--violet);
    margin-bottom: 0.5rem;
}

.intro {
    font-size: 0.9rem;
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 3px 15px rgba(91, 44, 111, 0.1);
    border-left: 5px solid var(--violet);
}

.project-content {
    display: flex;
    justify-content: center;
    gap: 3rem;
    padding: 3rem 1rem;
    max-width: 90%;
    margin: 0 auto;
}

/* MOBILE - pełna optymalizacja */
@media (max-width: 900px) {

    /* Nawigacja strzałkami */
    .project-nav {
        top: 0.5rem;
        right: 0.5rem;
        gap: 0.3rem;
    }

    .nav-btn {
        width: 34px;
        height: 34px;
    }

    .icon {
        width: 18px;
        height: 18px;
    }

    .project-hero {
        width: 100%;
        padding: 1.5rem 1rem;
    }

    .title {
        font-size: 1.6rem;
        margin-top: 2.5rem;
        text-align: center;
    }

    .container {
        flex-direction: column-reverse;
        
        gap: 1.5rem;
        margin-top: 1rem;
    }

    .intro {
        font-size: 0.95rem;
        padding: 1.2rem;
        border-radius: 12px;
        border-left-width: 4px;
    }

    .hero-img {
        max-width: 100%;
        width: 100%;
        border-radius: 15px;
        box-shadow: 0 4px 18px rgba(91, 44, 111, 0.2);
    }

    .project-content {
        flex-direction: column;
        gap: 2.5rem;
        padding: 2rem 1rem;
        max-width: 100%;
    }

    .left, .right {
        width: 100%;
    }
}

/* Bardzo małe ekrany (np. iPhone SE) */
@media (max-width: 500px) {

    .title {
        font-size: 1.4rem;
    }

    .intro {
        font-size: 0.9rem;
        padding: 1rem;
    }

    .nav-btn {
        width: 30px;
        height: 30px;
    }

    .icon {
        width: 16px;
        height: 16px;
    }
}

</style>
