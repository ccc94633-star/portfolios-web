<script setup>
import Nav from '@/Components/Nav.vue';
import Skills from '@/Components/Skills.vue';
import personal from '@/assets/data/PersonalData';
</script>

<template>
    <Nav />
    <div class="page-body">
        <h2 class="page-title">技能</h2>
        <main class="skills-container">
            <Skills v-for="skill in personal.skills" :key="skill.name" :item="skill" />
        </main>
    </div>
</template>

<style scoped>
.page-body {
    max-width: 840px;
    margin: 0 auto;
    padding: 40px 24px;
}

.page-title {
    color: var(--color-primary-dark);
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    padding-bottom: 10px;
    margin-bottom: 24px;
    border-bottom: 3px solid var(--color-accent);
}

.skills-container {
    background: var(--color-surface);
    border: 1px solid var(--color-primary-border);
    border-top: 5px solid var(--color-primary);
    border-radius: 16px;
    box-shadow: var(--shadow-card);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    justify-items: center;
    padding: 32px;
}

@media (max-width: 600px) {
    .page-body {
        padding: 24px 16px;
    }

    .skills-container {
        grid-template-columns: repeat(2, 1fr);
        padding: 16px;
        gap: 12px;
    }
}
</style>
