<script setup>
defineProps({ item: Object })
</script>

<template>
    <div class="card">
        <img :src="item.icon" :alt="item.name" class="skill-icon">
        <div class="skill-name">{{ item.name }}</div>
        <div class="rating">
            <span v-for="n in 5" :key="n" :class="n <= item.rating ? 'star filled' : 'star'">★</span>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #e8e8e2;
    padding: 16px 12px;
    width: 100%;
    background: #fafaf7;
    transition: border-color 0.2s;
}

.card:hover {
    border-color: #c8d860;
}

.skill-icon {
    height: 56px;
}

.skill-name {
    font-size: 0.82rem;
    font-weight: 500;
    color: #5a5a50;
    letter-spacing: 0.02em;
}

.star {
    color: #ddd;
    font-size: 1rem;
}

.star.filled {
    color: #a8c400;
}
</style>
