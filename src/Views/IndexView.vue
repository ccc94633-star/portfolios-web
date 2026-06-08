<script setup>
import personal from '@/assets/data/PersonalData'
import Personality from '@/Components/Personality.vue';
import Nav from '@/Components/Nav.vue';
</script>

<template>
    <Nav />
    <div class="page-body">
        <h1 class="page-title">{{ personal.name }}</h1>
        <main class="page-wrapper">
            <section class="hero-section">
                <img src="../assets/Image/me.jpeg" :alt="`${personal.name}的照片`" id="myphoto">
                <p class="position">{{ personal.position }}</p>
            </section>
            <section class="personality">
                <Personality v-for="p in personal.personalities" :key="p.desc" :item="p" />
            </section>
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
    color: #5a5a50;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    padding-bottom: 10px;
    margin-bottom: 24px;
    border-bottom: 2px solid #edf7a9;
}

.page-wrapper {
    background: #fff;
    border: 1px solid #e8e8e2;
    border-radius: 16px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    display: flex;
    gap: 32px;
    align-items: center;
    padding: 32px;
}

.hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
    flex-shrink: 0;
}

.personality {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

#myphoto {
    width: 160px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 10px;
}

.position {
    color: #888880;
    font-size: 0.9rem;
    letter-spacing: 0.04em;
}
</style>
