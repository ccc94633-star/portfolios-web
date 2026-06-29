<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import personal from '@/assets/data/PersonalData'
import Personality from '@/Components/Personality.vue'
import Nav from '@/Components/Nav.vue'
import profileHero from '@/assets/Image/profile-portrait.jpg'
import homeBackground from '@/assets/Image/home-background.jpg'

const introLines = [
    '把任務做到位，把問題想清楚，',
    '持續用前端與 AI 工具創造更好的使用體驗。'
]
const parallaxY = ref(0)

const updateParallax = () => {
    parallaxY.value = Math.min(window.scrollY, window.innerHeight)
}

onMounted(() => {
    updateParallax()
    window.addEventListener('scroll', updateParallax, { passive: true })
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateParallax)
})
</script>

<template>
    <div class="home-page" :style="{ '--home-bg': `url(${homeBackground})`, '--parallax-y': parallaxY }">
        <div class="bg-layer sky-layer" aria-hidden="true"></div>
        <div class="bg-layer leaf-layer" aria-hidden="true"></div>
        <Nav />
        <main class="home-hero">
            <section class="hero-info">
                <div class="identity">
                    <figure class="avatar-frame">
                        <img :src="profileHero" :alt="personal.name">
                    </figure>
                    <div class="identity-copy">
                        <p class="section-label">FRONTEND / AI TOOLS</p>
                        <h1 class="page-title">{{ personal.name }}</h1>
                        <p class="position">{{ personal.position }}</p>
                    </div>
                </div>
                <p class="intro">
                    <span v-for="line in introLines" :key="line">{{ line }}</span>
                </p>
                <section class="personality" aria-label="Personal traits">
                    <Personality v-for="p in personal.personalities" :key="p.desc" :item="p" />
                </section>
            </section>
        </main>
    </div>
</template>

<style scoped>
.home-page {
    position: relative;
    width: 100%;
    min-height: 138vh;
    overflow-x: hidden;
    background: #78cff1;
    isolation: isolate;
}

.bg-layer {
    position: fixed;
    inset: 0;
    z-index: -2;
    pointer-events: none;
    will-change: transform;
}

.sky-layer {
    background:
        radial-gradient(circle at 52% 48%, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0) 34%),
        linear-gradient(180deg, #84d5f4 0%, #66c5ec 54%, #93dff7 100%);
    transform: translate3d(0, calc(var(--parallax-y) * 0.08px), 0) scale(1.04);
}

.leaf-layer {
    background-image: var(--home-bg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: translate3d(0, calc(var(--parallax-y) * -0.16px), 0) scale(1.08);
    -webkit-mask-image: radial-gradient(
        circle at center,
        transparent 0%,
        transparent 34%,
        rgba(0, 0, 0, 0.18) 47%,
        rgba(0, 0, 0, 0.82) 58%,
        #000 70%
    );
    mask-image: radial-gradient(
        circle at center,
        transparent 0%,
        transparent 34%,
        rgba(0, 0, 0, 0.18) 47%,
        rgba(0, 0, 0, 0.82) 58%,
        #000 70%
    );
}

.home-page::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    background: linear-gradient(
        180deg,
        rgba(5, 32, 17, 0.08) 0%,
        rgba(255, 255, 255, 0) 28%,
        rgba(255, 255, 255, 0) 70%,
        rgba(5, 32, 17, 0.12) 100%
    );
    pointer-events: none;
}

.home-page :deep(nav) {
    position: fixed;
    inset: 0 0 auto;
    z-index: 4;
    background: rgba(255, 255, 255, 0.14);
    border-bottom: 1px solid rgba(255, 255, 255, 0.28);
    box-shadow: none;
    backdrop-filter: blur(8px);
}

.home-page :deep(nav a) {
    color: var(--color-primary-dark);
    text-shadow: 0 1px 12px rgba(255, 255, 255, 0.7);
}

.home-page :deep(nav a.router-link-active) {
    color: var(--color-white);
    background: rgba(63, 85, 41, 0.86);
    text-shadow: none;
}

.home-hero {
    position: sticky;
    top: 0;
    z-index: 2;
    height: 100vh;
    display: grid;
    place-items: center;
    padding: 76px 24px 24px;
}

.hero-info {
    position: relative;
    width: min(100%, 600px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    padding: clamp(14px, 3vw, 28px);
    color: var(--color-primary-dark);
}

.hero-info::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: min(84vmin, 760px);
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    z-index: -1;
    border-radius: 50%;
    background: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.72) 0%,
        rgba(245, 252, 255, 0.58) 34%,
        rgba(235, 249, 255, 0.32) 56%,
        rgba(235, 249, 255, 0.12) 74%,
        rgba(235, 249, 255, 0) 92%
    );
    filter: blur(18px);
}

.identity {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: min(92vw, 760px);
}

.identity-copy {
    width: 100%;
    min-width: 0;
    text-align: center;
}

.avatar-frame {
    width: 70%;
    height: clamp(96px, 16vw, 150px);
    padding: 0;
    border: 0;
    border-radius: 0;
    overflow: hidden;
    background: transparent;
    box-shadow:
        0 0 24px 10px rgba(255, 255, 255, 0.32),
        0 12px 28px rgba(42, 112, 156, 0.12);
    -webkit-mask-image: radial-gradient(
        ellipse at center,
        #000 0%,
        #000 54%,
        rgba(0, 0, 0, 0.72) 70%,
        transparent 100%
    );
    mask-image: radial-gradient(
        ellipse at center,
        #000 0%,
        #000 54%,
        rgba(0, 0, 0, 0.72) 70%,
        transparent 100%
    );
}

.avatar-frame img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 56%;
    border-radius: inherit;
}

.section-label {
    color: var(--color-accent);
    font-size: 0.76rem;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.18em;
    text-shadow: 0 1px 12px rgba(255, 255, 255, 0.9);
}

.page-title {
    color: var(--color-primary-dark);
    font-size: clamp(2.2rem, 4.6vw, 3.6rem);
    font-weight: 900;
    line-height: 1.02;
    letter-spacing: 0;
    text-shadow: 0 2px 18px rgba(255, 255, 255, 0.85);
}

.position {
    color: var(--color-primary);
    font-size: clamp(1rem, 2vw, 1.18rem);
    font-weight: 800;
    letter-spacing: 0.04em;
    text-shadow: 0 1px 12px rgba(255, 255, 255, 0.85);
}

.intro {
    max-width: 520px;
    color: var(--color-text);
    font-size: clamp(0.94rem, 1.8vw, 1.08rem);
    font-weight: 700;
    line-height: 1.65;
    text-shadow: 0 1px 14px rgba(255, 255, 255, 0.92);
}

.intro span {
    display: block;
}

.personality {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin-top: 4px;
}

@media (max-width: 640px) {
    .leaf-layer {
        background-position: center;
    }

    .home-page :deep(nav) {
        background: rgba(255, 255, 255, 0.18);
        border-bottom-color: rgba(255, 255, 255, 0.34);
        backdrop-filter: blur(12px);
    }

    .home-page :deep(nav a) {
        color: var(--color-primary-dark);
        background: rgba(255, 255, 255, 0.36);
        border: 1px solid rgba(255, 255, 255, 0.32);
        text-shadow: none;
    }

    .home-page :deep(nav a:hover),
    .home-page :deep(nav a:active),
    .home-page :deep(nav a.router-link-active),
    .home-page :deep(nav a.router-link-active:visited) {
        color: rgba(255, 255, 255, 0.94);
        background: var(--color-primary-dark);
        border-color: rgba(255, 255, 255, 0.62);
        text-shadow: none;
    }

    .home-hero {
        padding: 68px 14px 18px;
    }

    .hero-info {
        width: min(100%, 420px);
        padding: 12px 10px;
    }

    .identity {
        width: min(100%, 420px);
    }

    .hero-info::before {
        width: min(96vmin, 520px);
    }

    .personality {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 460px) {
    .avatar-frame {
        width: min(100%, 420px);
        height: 108px;
    }

    .personality {
        gap: 6px;
    }
}
</style>
