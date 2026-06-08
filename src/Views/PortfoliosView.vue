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
    color: #5a5a50;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    padding-bottom: 10px;
    margin-bottom: 24px;
    border-bottom: 2px solid #edf7a9;
}

.work-container {
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
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
        grid-template-columns: repeat(2, 1fr);
        padding: 12px;
        gap: 8px;
    }
}

@media (max-width: 380px) {
    .work-container {
        grid-template-columns: 1fr;
    }
}
</style>
