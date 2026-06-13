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
    color: var(--color-primary-dark);
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    padding-bottom: 10px;
    margin-bottom: 24px;
    border-bottom: 3px solid var(--color-accent);
}

.page-wrapper {
    background: var(--color-surface);
    border: 1px solid var(--color-primary-border);
    border-top: 5px solid var(--color-primary);
    border-radius: 16px;
    box-shadow: var(--shadow-card);
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
    border: 4px solid var(--color-accent);
}

.position {
    color: var(--color-primary);
    font-size: 0.9rem;
    letter-spacing: 0.04em;
}

@media (max-width: 600px) {
    .page-body {
        padding: 24px 16px;
    }

    .page-wrapper {
        flex-direction: column;
        padding: 20px 16px;
        gap: 20px;
    }

    .personality {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
    }

    #myphoto {
        width: 110px;
    }
}
</style>
