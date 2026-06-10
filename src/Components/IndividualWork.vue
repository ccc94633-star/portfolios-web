<script setup>
defineProps({ item: Object })
</script>

<template>
    <RouterLink to="/skills/portfolios" class="back-btn">
        ← 回到作品列表
    </RouterLink>

    <div class="individual-work-card" v-if="item">
        <img :src="item.image" :alt="item.title">
        <h3>{{ item.title }}</h3>
        <p class="short-desc">{{ item.shortDesc }}</p>

        <div class="tags">
            <span class="tag" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
        </div>

        <p class="desc">{{ item.desc }}</p>

        <div class="links">
            <a v-if="item.gitHubUrl" :href="item.gitHubUrl" class="link-btn github-btn" target="_blank">
                GitHub
            </a>
            <RouterLink
                v-if="item.demoUrl?.startsWith('/')"
                :to="item.demoUrl"
                class="link-btn demo-btn"
            >
                ↗ Demo
            </RouterLink>
            <a v-else-if="item.demoUrl" :href="item.demoUrl" class="link-btn demo-btn" target="_blank">
                ↗ Demo
            </a>
        </div>
    </div>
</template>

<style scoped>
.back-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 16px;
    padding: 7px 14px;
    border-radius: 8px;
    border: 1px solid #c8d860;
    background-color: #edf7a9;
    color: #5a7a00;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: opacity 0.2s;
}

.back-btn:hover {
    opacity: 0.75;
}

.individual-work-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    border-radius: 16px;
    border: 1px solid #e8e8e2;
    background: #fff;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 28px 24px;
}

.individual-work-card img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 10px;
}

h3 {
    font-size: 1.15rem;
    font-weight: 500;
    color: #3c3c38;
    letter-spacing: 0.04em;
}

.short-desc {
    color: #888880;
    font-size: 0.88rem;
    margin: 0;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: center;
}

.tag {
    background-color: #edf7a9;
    color: #5a7a00;
    border: 1px solid #c8d860;
    border-radius: 20px;
    padding: 3px 12px;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.02em;
}

.desc {
    color: #5a5a50;
    font-size: 0.88rem;
    text-align: center;
    line-height: 1.7;
}

.links {
    display: flex;
    gap: 12px;
    margin-top: 4px;
}

.link-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 16px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    transition: opacity 0.2s;
}

.link-btn:hover {
    opacity: 0.8;
}

.github-btn {
    background-color: #24292e;
    color: #fff;
}

.demo-btn {
    background-color: #1a73e8;
    color: #fff;
}
</style>
