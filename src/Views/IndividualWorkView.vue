<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import IndividualWork from '@/Components/IndividualWork.vue';
import Nav from '@/Components/Nav.vue';
import personal from '@/assets/data/PersonalData';

const route = useRoute()
const item = computed(() => personal.portfolios.find(p => p.id === Number(route.params.id)))
</script>

<template>
    <Nav />
    <div class="page-body">
        <IndividualWork :item="item" />
    </div>
</template>

<style scoped>
.page-body {
    max-width: 640px;
    margin: 0 auto;
    padding: 40px 24px;
}

@media (max-width: 600px) {
    .page-body {
        padding: 24px 16px;
    }
}
</style>
