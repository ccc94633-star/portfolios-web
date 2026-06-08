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
    background: #f8f8f4;
    border-bottom: 1px solid #e8e8e2;
    padding: 0 24px;
}

ul {
    display: flex;
    list-style: none;
    gap: 4px;
    max-width: 840px;
    margin: 0 auto;
    padding: 0;
}

li { flex: 1; }

a {
    display: block;
    text-align: center;
    padding: 14px 0;
    margin: 6px 0;
    color: #888880;
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.04em;
    border-radius: 6px;
    transition: all 0.18s ease;
}

a:hover {
    color: #5a7a00;
    background: #f5facc;
}

a.router-link-active {
    color: #5a7a00;
    background: #edf7a9;
    font-weight: 500;
}

a:visited { color: #888880; }
a:active  { color: #3d4d00; }
</style>
