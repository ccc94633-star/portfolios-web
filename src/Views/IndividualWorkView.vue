<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import IndividualWork from '@/Components/IndividualWork.vue';
import Nav from '@/Components/Nav.vue';
import personal from '@/assets/data/PersonalData';
import portfolioBackground from '@/assets/Image/IndividualWorkGB.jpg'

const route = useRoute()
const item = computed(() => personal.portfolios.find(p => p.id === Number(route.params.id)))
</script>

<template>
    <div class="work-detail-page scenic-page" :style="{ '--scenic-bg': `url(${portfolioBackground})` }">
        <div class="scenic-bg-layer scenic-sky-layer" aria-hidden="true"></div>
        <div class="scenic-bg-layer scenic-leaf-layer" aria-hidden="true"></div>
        <Nav />
        <main class="work-detail-main scenic-main">
            <div class="page-body">
                <IndividualWork :item="item" />
            </div>
        </main>
    </div>
</template>

<style scoped>
.work-detail-main {
    display: grid;
    align-items: start;
}

.page-body {
    max-width: 640px;
    margin: 0 auto;
    width: 100%;
}

@media (max-width: 600px) {
    .page-body {
        max-width: 100%;
    }
}
</style>
