<script setup>
defineProps({ item: Object })
const emit = defineEmits(['view-detail'])
</script>

<template>
    <div class="work-card" @click="emit('view-detail', item.id)">
        <img :src="item.image" :alt="item.title">
        <span class="title">{{ item.title }}</span>
        <p class="short-desc">{{ item.shortDesc }}</p>
        <span class="view-btn">查看作品 →</span>
    </div>
</template>

<style scoped>
.work-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    border-radius: 12px;
    border: 1px solid #e8e8e2;
    padding: 16px;
    background: #fafaf7;
    cursor: pointer;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.work-card:hover {
    border-color: #c8d860;
    box-shadow: 0 4px 12px rgba(90, 122, 0, 0.1);
}

.work-card img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 8px;
}

.title {
    font-weight: 500;
    color: #3c3c38;
    font-size: 0.9rem;
    text-align: center;
}

.short-desc {
    color: #888880;
    font-size: 0.82rem;
    margin: 0;
    text-align: center;
}

.view-btn {
    background-color: #edf7a9;
    color: #5a7a00;
    border: 1px solid #c8d860;
    border-radius: 20px;
    padding: 4px 14px;
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: auto;
}
</style>
