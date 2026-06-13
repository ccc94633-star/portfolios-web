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
    border: 1px solid var(--color-border);
    padding: 14px 10px 12px;
    border-radius: 8px;
    text-align: center;
    background: var(--color-primary-soft);
}

img {
    display: block;
    width: 68px;
    height: 68px;
    margin: 0 auto 8px;
}

.label {
    font-size: 0.82rem;
    color: var(--color-primary-dark);
    letter-spacing: 0.02em;
}
</style>
