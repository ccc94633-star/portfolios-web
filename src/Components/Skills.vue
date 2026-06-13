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
    border: 1px solid var(--color-border);
    padding: 16px 12px;
    width: 100%;
    background: var(--color-surface-muted);
    transition: border-color 0.2s;
}

.card:hover {
    border-color: var(--color-primary);
    background: var(--color-accent-soft);
}

.skill-icon {
    height: 56px;
}

.skill-name {
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--color-primary-dark);
    letter-spacing: 0.02em;
}

.star {
    color: var(--color-border);
    font-size: 1rem;
}

.star.filled {
    color: var(--color-accent);
    text-shadow: 0 1px 0 var(--color-primary-dark);
}
</style>
