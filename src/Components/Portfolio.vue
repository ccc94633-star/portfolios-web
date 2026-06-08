<script setup>
defineProps({ item: Object })
const emit = defineEmits(['view-detail'])
</script>

<template>
    <div class="work-card" @click="emit('view-detail', item.id)">
        <div class="card-img-wrap">
            <img :src="item.image" :alt="item.title">
        </div>
        <div class="card-body">
            <div class="card-tags">
                <span class="tag" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </div>
            <span class="card-title">{{ item.title }}</span>
            <p class="card-desc">{{ item.shortDesc }}</p>
            <button class="view-btn">查看作品 →</button>
        </div>
    </div>
</template>

<style scoped>
.work-card {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    aspect-ratio: 4 / 3;
    background: #1a1a1a;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.work-card:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    z-index: 10;
}

.card-img-wrap {
    position: absolute;
    inset: 0;
}

.card-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: brightness(0.82);
    transition: filter 0.3s ease, transform 0.3s ease;
}

.work-card:hover .card-img-wrap img {
    filter: brightness(0.45);
    transform: scale(1.04);
}

.card-img-wrap::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.92) 0%,
        rgba(0, 0, 0, 0.45) 40%,
        transparent 100%
    );
    transition: background 0.3s ease;
}

.work-card:hover .card-img-wrap::after {
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 1)   0%,
        rgba(0, 0, 0, 0.78) 55%,
        rgba(0, 0, 0, 0.28) 100%
    );
}

.card-body {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 14px 14px 14px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 4px;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.22s ease 0.0s, transform 0.22s ease 0.0s;
}

.tag {
    font-size: 0.6rem;
    padding: 2px 8px;
    border-radius: 20px;
    background: #c8d860cc;
    color: #2a3600;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.card-title {
    font-size: 0.92rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.3;
    letter-spacing: 0.02em;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.8);
}

.card-desc {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.5;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.22s ease 0.06s, transform 0.22s ease 0.06s;
}

.view-btn {
    width: 100%;
    padding: 7px;
    background: rgba(255, 255, 255, 0.13);
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 6px;
    color: #fff;
    font-size: 0.73rem;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    letter-spacing: 0.06em;
    margin-top: 4px;
    opacity: 0;
    transform: translateY(6px);
    transition: all 0.22s ease 0.12s;
    backdrop-filter: blur(4px);
}

.work-card:hover .card-tags,
.work-card:hover .card-desc,
.work-card:hover .view-btn {
    opacity: 1;
    transform: translateY(0);
}

.view-btn:hover {
    background: rgba(255, 255, 255, 0.24);
    border-color: rgba(255, 255, 255, 0.6);
}
</style>
