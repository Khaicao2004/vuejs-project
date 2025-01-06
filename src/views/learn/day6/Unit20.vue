<template>
    <div>
        <input type="checkbox" v-model="typeColor">
        <p>{{ typeColor }}</p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';


const typeColor = ref(false);

watch(typeColor, (newValue) => {
    document.body.style.backgroundColor = newValue ? 'black' : 'white';
})

</script>