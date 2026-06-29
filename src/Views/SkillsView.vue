<script setup>
import Nav from '@/Components/Nav.vue'
import Skills from '@/Components/Skills.vue'
import personal from '@/assets/data/PersonalData'
import skillsBackground from '@/assets/Image/home-background.jpg'
</script>

<template>
    <div class="skills-page scenic-page" :style="{ '--scenic-bg': `url(${skillsBackground})`, '--scenic-bg-position': 'bottom' }">
        <div class="scenic-bg-layer scenic-sky-layer" aria-hidden="true"></div>
        <div class="scenic-bg-layer scenic-leaf-layer" aria-hidden="true"></div>
        <Nav />
        <main class="skills-main scenic-main">
            <section class="skills-panel scenic-panel">
                <p class="section-label scenic-section-label">SKILLS</p>
                <h2 class="page-title scenic-page-title">技能</h2>
                <div class="skills-container">
                    <Skills v-for="skill in personal.skills" :key="skill.name" :item="skill" />
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
.skills-main {
    display: grid;
    place-items: center;
}

.skills-panel {
    width: min(100%, 920px);
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: center;
}

.section-label {
    text-align: center;
}

.page-title {
    text-align: center;
}

.skills-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
}

@media (max-width: 720px) {
    .skills-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 440px) {
    .skills-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>
