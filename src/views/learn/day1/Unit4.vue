<template>
    <h1 class="text-center mt-5">Temperature Converter</h1>
    <div class="d-flex justify-content-center gap-2 mt-4">
        <div class="">
            <label for="" class="">Enter Temperature in °C:</label>
            <input type="number" v-model.number="celsius" placeholder="C">
        </div>
        <div class="">
            <p>Temperature in °F: <strong>{{ fahrenheit }}</strong></p>
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <button type="button" @click="resetValue" class="btn btn-primary">Reset</button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const celsius = ref(null);
const fahrenheit = computed(() => {
    if (celsius.value == null) {
        return 'N/A';
    }
    return (celsius.value * 9 / 5) + 32
});

const resetValue = () => {
    celsius.value = null;
}

</script>

<style lang="">
    
</style>