<script setup></script>

<template>
    <RouterView />
</template>

<style>
:root {
    --color-primary: #3f5529;
    --color-primary-dark: #26351c;
    --color-primary-soft: #edf5d8;
    --color-primary-border: #9fbd6f;
    --color-accent: #cf8a13;
    --color-accent-soft: #fff4af;
    --color-sky: #68bee5;
    --color-sky-soft: #e0f5fb;
    --color-background: #f6faef;
    --color-surface: #ffffff;
    --color-surface-muted: #f4f8e8;
    --color-border: #c7d9a6;
    --color-text: #2d3924;
    --color-text-muted: #5d694f;
    --color-white: #fff;
    --shadow-card: 0 18px 42px rgba(38, 53, 28, 0.12);
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", "Microsoft JhengHei", sans-serif;
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.65;
    min-width: 320px;
}

.scenic-page {
    --scenic-bg-position: center;
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background: #78cff1;
    isolation: isolate;
}

.scenic-bg-layer {
    position: fixed;
    inset: 0;
    z-index: -2;
    pointer-events: none;
    will-change: transform;
}

.scenic-sky-layer {
    background:
        radial-gradient(circle at 52% 48%, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0) 34%),
        linear-gradient(180deg, #84d5f4 0%, #66c5ec 54%, #93dff7 100%);
    transform: scale(1.04);
}

.scenic-leaf-layer {
    background-image: var(--scenic-bg);
    background-size: cover;
    background-position: var(--scenic-bg-position);
    background-repeat: no-repeat;
    transform: scale(1.08);
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

.scenic-page::after {
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

.scenic-page.scenic-page > nav {
    position: fixed;
    inset: 0 0 auto;
    z-index: 4;
    background: rgba(255, 255, 255, 0.14);
    border-bottom: 1px solid rgba(255, 255, 255, 0.28);
    box-shadow: none;
    backdrop-filter: blur(8px);
}

.scenic-page.scenic-page > nav a {
    color: var(--color-primary-dark);
    text-shadow: 0 1px 12px rgba(255, 255, 255, 0.7);
}

.scenic-page.scenic-page > nav a.router-link-active {
    color: var(--color-white);
    background: rgba(63, 85, 41, 0.86);
    text-shadow: none;
}

.scenic-page.scenic-page > nav a:visited {
    color: var(--color-primary-dark);
}

.scenic-page.scenic-page > nav a.router-link-active:visited {
    color: var(--color-white);
}

.scenic-main {
    position: relative;
    z-index: 2;
    min-height: 100vh;
    padding: 76px 24px 48px;
}

.scenic-panel {
    position: relative;
    padding: clamp(22px, 4.8vw, 44px);
    border: 2px solid rgba(104, 190, 229, 0.38);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.34);
    box-shadow: 0 22px 60px rgba(38, 53, 28, 0.14);
    backdrop-filter: blur(3px);
}

.scenic-section-label {
    color: var(--color-accent);
    font-size: 0.76rem;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.18em;
    text-shadow: 0 1px 12px rgba(255, 255, 255, 0.9);
}

.scenic-page-title {
    color: var(--color-primary-dark);
    font-size: clamp(2.1rem, 5vw, 3.8rem);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: 0;
    text-shadow: 0 2px 18px rgba(255, 255, 255, 0.85);
}

@media (max-width: 640px) {
    .scenic-main {
        padding: 68px 14px 40px;
    }
}
</style>
