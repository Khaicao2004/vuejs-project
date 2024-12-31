<template>
    <div :class="isActive ? '' : 'd-none'">
        Xin chao!
    </div>
    <input type="checkbox"  v-model="isActive">
    <p>{{ isActive }}</p>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(true);
</script>