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
    background: var(--color-primary);
    border-bottom: 3px solid var(--color-accent);
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
    padding: 14px 0;
    margin: 6px 0;
    color: rgba(255, 255, 255, 0.82);
    text-decoration: none;
    white-space: nowrap;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.04em;
    border-radius: 6px;
    transition: all 0.18s ease;
}

a:hover {
    color: var(--color-white);
    background: rgba(255, 255, 255, 0.12);
}

a.router-link-active {
    color: var(--color-primary-dark);
    background: var(--color-accent);
    font-weight: 600;
}

a:visited { color: rgba(255, 255, 255, 0.82); }
a.router-link-active:visited { color: var(--color-primary-dark); }
a:active  { color: var(--color-primary-dark); }

@media (max-width: 480px) {
    nav {
        padding: 0 8px;
    }

    a {
        font-size: 12px;
        padding: 10px 4px;
        letter-spacing: 0;
    }
}
</style>
