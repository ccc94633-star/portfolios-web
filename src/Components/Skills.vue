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
    border-radius: 8px;
    border: 1px solid rgba(104, 190, 229, 0.42);
    padding: 16px 12px;
    width: 100%;
    background: rgba(255, 255, 255, 0.72);
    box-shadow: 0 10px 24px rgba(38, 53, 28, 0.08);
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-3px);
    border-color: rgba(159, 189, 111, 0.78);
    background: rgba(237, 245, 216, 0.58);
    box-shadow: 0 16px 34px rgba(63, 85, 41, 0.16);
    -webkit-backdrop-filter: blur(14px) saturate(1.16);
    backdrop-filter: blur(14px) saturate(1.16);
}

.skill-icon {
    height: 56px;
    filter: drop-shadow(0 6px 10px rgba(38, 53, 28, 0.08));
}

.skill-name {
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--color-primary-dark);
    letter-spacing: 0.02em;
}

.star {
    color: rgba(63, 85, 41, 0.22);
    font-size: 1rem;
}

.star.filled {
    color: var(--color-accent);
    text-shadow: 0 1px 0 var(--color-primary-dark);
}
</style>
