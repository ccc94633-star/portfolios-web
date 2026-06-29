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
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.52);
    color: var(--color-primary-dark);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    box-shadow: 0 8px 18px rgba(42, 112, 156, 0.1);
    backdrop-filter: blur(6px);
    transition: transform 0.2s ease, background-color 0.2s ease;
}

.back-btn:hover {
    transform: translateY(-2px);
    background: rgba(255, 244, 175, 0.86);
}

.individual-work-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    border-radius: 8px;
    border: 2px solid rgba(104, 190, 229, 0.38);
    background: rgba(255, 255, 255, 0.66);
    box-shadow: 0 22px 60px rgba(38, 53, 28, 0.14);
    padding: 28px 24px;
    backdrop-filter: blur(4px);
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
    color: var(--color-primary-dark);
    letter-spacing: 0.04em;
}

.short-desc {
    color: var(--color-text-muted);
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
    background-color: var(--color-accent-soft);
    color: var(--color-primary-dark);
    border: 1px solid rgba(207, 138, 19, 0.42);
    border-radius: 20px;
    padding: 3px 12px;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.02em;
}

.desc {
    color: var(--color-text-muted);
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
    border: 1px solid rgba(255, 244, 175, 0.68);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    transition: transform 0.2s ease, filter 0.2s ease;
}

.link-btn:hover {
    transform: translateY(-2px);
    filter: brightness(1.04);
}

.github-btn {
    background-color: var(--color-primary-dark);
    color: var(--color-white);
}

.demo-btn {
    background-color: var(--color-primary);
    color: var(--color-white);
}
</style>
