<template>
    <div class="container" :style="{ backgroundColor:  background, height: heightLayout}">
        <h1 class="mt-5 text-center mb-5">Background Color Changer</h1>
        <div class="d-flex justify-content-center gap-2">
            <button type="button" class="btn btn-danger" @click="changeColor('red')">Red</button>
            <button type="button" class="btn btn-primary" @click="changeColor('blue')">Blue</button>
            <button type="button" class="btn btn-warning" @click="changeColor('yellow')">Yellow</button>
            <button type="button" class="btn btn-secondary" @click="changeColor('gray')">Gray</button>
            <button type="button" class="btn btn-light" @click="colorReset">Reset</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const background = ref('white');
const heightLayout = ref('100vh');

const changeColor = (color) => {
    background.value = color;
};

const colorReset = () => {
    background.value = 'white';
}

</script>

<style lang="css">
    
</style>