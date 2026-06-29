<script setup>
import { useRouter } from 'vue-router'
import Nav from '@/Components/Nav.vue'
import Portfolio from '@/Components/Portfolio.vue'
import personal from '@/assets/data/PersonalData'
import homeBackground from '@/assets/Image/home-background.jpg'

const router = useRouter()

const goToDetail = (id) => {
    router.push('/skills/portfolios/' + id)
}
</script>

<template>
    <div class="portfolio-page scenic-page" :style="{ '--scenic-bg': `url(${homeBackground})`, '--scenic-bg-position': 'center' }">
        <div class="scenic-bg-layer scenic-sky-layer" aria-hidden="true"></div>
        <div class="scenic-bg-layer scenic-leaf-layer" aria-hidden="true"></div>
        <Nav />
        <main class="portfolio-main scenic-main">
            <section class="portfolio-panel scenic-panel">
                <header class="page-header">
                    <p class="section-label scenic-section-label">WORKS</p>
                    <h2 class="page-title scenic-page-title">作品集</h2>
                </header>
                <div class="work-container">
                    <Portfolio v-for="p in personal.portfolios" :key="p.id" :item="p" @view-detail="goToDetail" />
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
.portfolio-main {
    padding-bottom: 48px;
}

.portfolio-panel {
    width: min(100%, 860px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.page-header {
    text-align: center;
}

.page-title {
    margin-top: 6px;
}

.work-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
}

@media (max-width: 640px) {
    .portfolio-page :deep(nav) {
        background: rgba(255, 255, 255, 0.18);
        border-bottom-color: rgba(255, 255, 255, 0.34);
        backdrop-filter: blur(12px);
    }

    .portfolio-page :deep(nav a) {
        color: var(--color-primary-dark);
        background: rgba(255, 255, 255, 0.36);
        border: 1px solid rgba(255, 255, 255, 0.32);
        text-shadow: none;
    }

    .portfolio-page :deep(nav a:hover),
    .portfolio-page :deep(nav a:active),
    .portfolio-page :deep(nav a.router-link-active),
    .portfolio-page :deep(nav a.router-link-active:visited) {
        color: rgba(255, 255, 255, 0.94);
        background: var(--color-primary-dark);
        border-color: rgba(255, 255, 255, 0.62);
        text-shadow: none;
    }
}
</style>
