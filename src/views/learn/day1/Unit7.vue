<template>
    <h1 class="text-center mt-5">Sum and Average Calculator</h1>
    <div class="d-flex justify-content-center">
        <button type="button" @click="resetValue">Reset value</button>
        <input type="number" v-model.number="input" placeholder="Enter value">
        <button type="button" @click="addValue">Add value</button>
    </div>
    <p class="text-center">value in array: <span>{{ valueInput.join(', ') }}</span> </p>
    <div class="d-flex justify-content-center mt-3 gap-4">
        <p>Sum: {{ sum }}</p>
        <p>Average: {{ average }}</p>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

    const input = ref(null);
    const valueInput= ref([]);
    const addValue = () => {
        if (input.value != null) {
            valueInput.value.push(input.value)
        }
        
    };
    const resetValue = () => {
        valueInput.value = [];
        console.log(valueInput.value);  
    };

    const sum = computed(() => {
        return valueInput.value.reduce((acc, value) => acc + value, 0);
    });

    const average = computed(() => {
        return valueInput.value.length > 0 ? sum.value / valueInput.value.length : 0;
    })

</script>