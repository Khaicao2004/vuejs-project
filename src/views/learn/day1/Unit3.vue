<template>
    <h1 class="text-center mt-5">Click Counter</h1>
    <p class="text-center">Count: {{ count }}</p>
        <div class="d-flex justify-content-center gap-2">
            <button type="button" class="btn btn-danger" @click="resetValue">Reset</button>
            <button type="button" class="btn btn-primary" @click="countValue">Count</button>
        </div>
</template>

<script setup>
import { ref } from 'vue';

    const count = ref(0);
    const countValue = () => {
        count.value++;
    }
    const resetValue = () => {
        count.value = 0;
    }
</script>

<style lang="css">
    
</style>