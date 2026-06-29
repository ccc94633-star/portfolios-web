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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-width: 148px;
    min-height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.52);
    padding: 9px 18px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.66);
    box-shadow:
        0 0 22px 8px rgba(255, 255, 255, 0.32),
        0 10px 26px rgba(42, 112, 156, 0.12),
        inset 0 -8px 16px rgba(104, 190, 229, 0.08);
    backdrop-filter: blur(5px);
}

img {
    display: block;
    width: 32px;
    height: 32px;
    flex: 0 0 auto;
    filter: drop-shadow(0 4px 7px rgba(38, 53, 28, 0.12));
}

.label {
    min-width: 0;
    font-size: 0.84rem;
    font-weight: 800;
    color: var(--color-primary-dark);
    letter-spacing: 0;
    overflow-wrap: anywhere;
    text-shadow: 0 1px 8px rgba(255, 255, 255, 0.9);
}

@media (max-width: 480px) {
    .personality-item {
        width: 100%;
        min-width: 0;
        min-height: 44px;
        padding: 7px 10px;
        gap: 7px;
    }

    img {
        width: 24px;
        height: 24px;
    }

    .label {
        font-size: 0.78rem;
    }
}
</style>
