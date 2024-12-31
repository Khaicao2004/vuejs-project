<template>
    <p>{{ text }}</p>
    <button type="button" @click="changeText">Change</button>
</template>
<script setup>
import { reactive, ref } from 'vue';
const text = ref('Chào mừng bạn đến với Vue!');

const changeText = () => {
    text.value = 'Bạn đã nhấn vào nút!';
}
</script>
