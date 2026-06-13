<script setup>
import { useRouter } from 'vue-router'
import Nav from '@/Components/Nav.vue';
import Portfolio from '@/Components/Portfolio.vue';
import personal from '@/assets/data/PersonalData';

const router = useRouter()

const goToDetail = (id) => {
    router.push('/skills/portfolios/' + id)
}
</script>

<template>
    <Nav />
    <div class="page-body">
        <h2 class="page-title">作品集</h2>
        <main class="work-container">
            <Portfolio v-for="p in personal.portfolios" :key="p.id" :item="p" @view-detail="goToDetail" />
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

.work-container {
    background: var(--color-surface);
    border: 1px solid var(--color-primary-border);
    border-top: 5px solid var(--color-primary);
    border-radius: 16px;
    box-shadow: var(--shadow-card);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 20px;
}

@media (max-width: 600px) {
    .page-body {
        padding: 24px 16px;
    }

    .work-container {
        grid-template-columns: 1fr;
        padding: 12px;
        gap: 14px;
    }
}
</style>
