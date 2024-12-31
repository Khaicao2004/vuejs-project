<template>
    <div :style="bindingStyle"></div>
    <button type="button" @click="changeColor('blue')">Change color ( Blue )</button>
    <button type="button" @click="changeColor('red')">Change color ( Red )</button>
    <button type="button" @click="changeColor('black')">Reset color</button>
</template>

<script setup>
import { ref } from 'vue';

   const bindingStyle = ref({
    width: '100px',
    height: '100px',
    backgroundColor: 'black',   
   })

   const changeColor = (color) => {
    bindingStyle.value.backgroundColor = color;
   }
  
</script>
