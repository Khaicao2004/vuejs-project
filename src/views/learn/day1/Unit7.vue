<template>
    <h1 class="text-center mt-5">Sum and Average Calculator</h1>
    <div class="d-flex justify-content-center">
        <button type="button" @click="resetValue">Reset value</button>
        <input type="number" v-model.number="input" placeholder="Enter value">
        <button type="button" @click="addValue">Add value</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const input = ref(null);
    const valueInput= ref([]);
    const addValue = () => {
        if (input.value != null) {
            valueInput.value.push(input.value)
            console.log(valueInput.value);
        }
        
    }
    const resetValue = () => {
        valueInput.value = [];
        console.log(valueInput.value);  
    }
</script>