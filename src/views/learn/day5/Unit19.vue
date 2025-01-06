<template>
    <div>
        <input type="number" v-model="kilometers" placeholder="kilometers" class="mt-5 mx-5">
        <p class="mx-5 mt-2">Milimeters: {{ milimetersValue  }} MM</p>
    </div>
    <div class="">
        <input type="number" v-model="milimeters" placeholder="milimeters" class="mt-3 mx-5">
        <p class="mx-5 mt-2">Kilometers:  {{ kilometersValue }} KL</p>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';


const kilometers = ref(null);
const milimeters = ref(null);

const milimetersValue = computed(() => {
    return kilometers.value * 1000000;
})

const kilometersValue = computed(() => {
    return milimeters.value *  0.000001;
})
</script>