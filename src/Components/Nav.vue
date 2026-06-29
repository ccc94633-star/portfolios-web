<script setup>
import { RouterLink } from 'vue-router';
import nav from '@/assets/data/NavData.js';
</script>

<template>
    <nav>
        <ul>
            <li v-for="item in nav" :key="item.path">
                <RouterLink :to="item.path">{{ item.funcName }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(248, 239, 151, 0.9);
    border-bottom: 2px solid rgba(63, 85, 41, 0.18);
    box-shadow: 0 10px 30px rgba(38, 53, 28, 0.08);
    backdrop-filter: blur(10px);
    padding: 0 24px;
}

ul {
    display: flex;
    width: 100%;
    list-style: none;
    gap: 4px;
    max-width: 840px;
    margin: 0 auto;
    padding: 0;
}

li {
    min-width: 0;
    flex: 1;
}

a {
    display: block;
    text-align: center;
    padding: 12px 0;
    margin: 6px 0;
    color: var(--color-primary-dark);
    text-decoration: none;
    white-space: nowrap;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.02em;
    border-radius: 6px;
    transition: all 0.18s ease;
}

a:hover {
    color: var(--color-primary-dark);
    background: rgba(255, 255, 255, 0.38);
}

a.router-link-active {
    color: var(--color-white);
    background: var(--color-primary);
    font-weight: 600;
    box-shadow: 0 8px 18px rgba(63, 85, 41, 0.22);
}

a:visited { color: var(--color-primary-dark); }
a.router-link-active:visited { color: var(--color-white); }
a:active  { color: var(--color-primary-dark); }

@media (max-width: 480px) {
    nav {
        padding: 0 8px;
        background: rgba(255, 255, 255, 0.18);
        border-bottom-color: rgba(255, 255, 255, 0.34);
        box-shadow: 0 10px 30px rgba(38, 53, 28, 0.08);
        backdrop-filter: blur(12px);
    }

    a {
        font-size: 12px;
        padding: 10px 4px;
        letter-spacing: 0;
        color: var(--color-primary-dark);
        background: rgba(255, 255, 255, 0.36);
        border: 1px solid rgba(255, 255, 255, 0.32);
    }

    a:hover,
    a:active {
        color: rgba(255, 255, 255, 0.94);
        background: var(--color-primary-dark);
        border-color: rgba(255, 255, 255, 0.62);
    }

    a.router-link-active,
    a.router-link-active:visited {
        color: rgba(255, 255, 255, 0.94);
        background: var(--color-primary-dark);
    }
}
</style>
