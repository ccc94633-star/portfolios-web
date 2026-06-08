<script setup>
defineProps({ item: Object })
</script>

<template>
    <div class="personality-item">
        <img :src="item.icon" :alt="item.desc">
        <div class="label">{{ item.desc }}</div>
    </div>
</template>

<style scoped>
.personality-item {
    border: 1px solid #e8e8e2;
    padding: 16px 12px;
    border-radius: 10px;
    text-align: center;
    background: #fafaf7;
    transition: border-color 0.2s;
}

.personality-item:hover {
    border-color: #c8d860;
}

img {
    width: 72px;
    margin-bottom: 6px;
}

.label {
    font-size: 0.82rem;
    color: #5a5a50;
    letter-spacing: 0.04em;
}
</style>
