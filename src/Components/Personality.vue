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
    padding: 14px 10px 12px;
    border-radius: 8px;
    text-align: center;
    background: #fdfdfb;
    transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.personality-item:hover {
    border-color: #cbd2ad;
    background: #f8f9f2;
    transform: translateY(-2px);
}

img {
    display: block;
    width: 68px;
    height: 68px;
    margin: 0 auto 8px;
}

.label {
    font-size: 0.82rem;
    color: #62655d;
    letter-spacing: 0.02em;
}
</style>
