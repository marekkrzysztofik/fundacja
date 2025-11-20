<template>
    <section class="project-hero">
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
import { useRoute } from 'vue-router'
import langState from '@/lang/langState'

import WebinarDetails from '@/Actions/WebinarDetails.vue'
import WebinarSignUp from '@/Actions/WebinarSignUp.vue'

const route = useRoute()

// pobieramy projekt po ID z routingu
const project = computed(() =>
    langState.t.main.projects.find(p => p.id === route.params.id)
)
</script>

<style scoped>
.container {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    display: flex;
    gap: 2rem;
}

.project-hero {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    padding: 2rem 1rem;
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
    transition: transform 0.3s ease;
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


/* Responsive */

@media (max-width: 900px) {
    .project-content {
        flex-direction: column;
        gap: 2rem;
    }
}
</style>
