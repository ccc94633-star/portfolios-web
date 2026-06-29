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
            <div class="card-title-row">
                <span class="card-title">{{ item.title }}</span>
                <div class="card-tags">
                    <span class="tag" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
                </div>
            </div>
            <p class="card-desc">{{ item.shortDesc }}</p>
            <button class="view-btn">查看作品 →</button>
        </div>
    </div>
</template>

<style scoped>
.work-card {
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    overflow: hidden;
    height: 160px;
    background: rgba(255, 255, 255, 0.86);
    border: 1px solid rgba(104, 190, 229, 0.32);
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    box-shadow: 0 4px 18px rgba(38, 53, 28, 0.1);
    backdrop-filter: blur(4px);
}

.work-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 36px rgba(38, 53, 28, 0.2);
}

.card-img-wrap {
    width: 38%;
    flex-shrink: 0;
    overflow: hidden;
}

.card-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}

.work-card:hover .card-img-wrap img {
    transform: scale(1.06);
}

.card-body {
    flex: 1;
    padding: 16px 22px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    min-width: 0;
}

.card-title-row {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}

.tag {
    font-size: 0.65rem;
    padding: 2px 8px;
    border-radius: 20px;
    background: rgba(255, 244, 175, 0.96);
    border: 1px solid rgba(207, 138, 19, 0.34);
    color: var(--color-primary-dark);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.card-title {
    font-size: 1.06rem;
    font-weight: 800;
    color: var(--color-primary-dark);
    line-height: 1.3;
    letter-spacing: 0.01em;
}

.card-desc {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    line-height: 1.55;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.view-btn {
    align-self: flex-start;
    margin-top: 4px;
    padding: 5px 14px;
    background: var(--color-primary);
    border: 1px solid rgba(63, 85, 41, 0.4);
    border-radius: 6px;
    color: #fff;
    font-size: 0.72rem;
    font-weight: 800;
    cursor: pointer;
    font-family: inherit;
    letter-spacing: 0.06em;
    transition: background 0.2s ease, box-shadow 0.2s ease;
}

.view-btn:hover {
    background: var(--color-accent);
    border-color: var(--color-accent-soft);
    box-shadow: 0 2px 8px rgba(207, 138, 19, 0.3);
}

@media (max-width: 600px) {
    .work-card {
        flex-direction: column;
        height: auto;
        background: rgba(22, 32, 14, 0.92);
        border-color: rgba(80, 120, 50, 0.4);
    }

    .card-img-wrap {
        width: 100%;
        height: 200px;
        flex-shrink: 0;
    }

    .card-body {
        padding: 14px 16px 18px;
        gap: 8px;
        justify-content: flex-start;
    }

    .card-title-row {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }

    .card-title {
        color: rgba(255, 255, 255, 0.95);
        font-size: 1.1rem;
        flex-shrink: 0;
    }

    .card-tags {
        justify-content: flex-end;
    }

    .card-desc {
        color: rgba(195, 210, 180, 0.82);
    }

    .view-btn {
        align-self: stretch;
        text-align: center;
        padding: 11px;
        font-size: 0.82rem;
        margin-top: 4px;
    }
}
</style>
