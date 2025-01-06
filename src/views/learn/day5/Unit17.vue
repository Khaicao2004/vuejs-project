<template>
    <input type="color" v-model="colorValue" class="w-100">
    <div :style="{backgroundColor: colorValue, width: 100 + 'px', height: 100 + 'px', marginTop: 200 + 'px' }">

    </div>
</template>

<script setup>
import { ref } from 'vue';

    const colorValue = ref('#FF0000');
</script>