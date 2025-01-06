<template>
    <div>
        <input type="range" v-model="rangeInput" min="10" max="50">
        <p :style="{fontSize: rangeInput + 'px' }">Hello</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const rangeInput = ref(10);
    
</script>