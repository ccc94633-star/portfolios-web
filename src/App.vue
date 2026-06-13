<script setup></script>

<template>
    <RouterView />
</template>

<style>
:root {
    --color-primary: #556f41;
    --color-primary-dark: #30372c;
    --color-primary-soft: #e9efdf;
    --color-primary-border: #b8c5aa;
    --color-accent: #f8c532;
    --color-accent-soft: #fff3c4;
    --color-background: #faf7e8;
    --color-surface: #fffdf7;
    --color-surface-muted: #f4f1e4;
    --color-border: #dedccf;
    --color-text: #30372c;
    --color-text-muted: #6f7568;
    --color-white: #fff;
    --shadow-card: 0 8px 24px rgba(48, 55, 44, 0.08);
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: '微軟正黑體', 'Noto Sans TC', sans-serif;
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.65;
}
</style>
