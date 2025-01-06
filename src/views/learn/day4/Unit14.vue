<template>
    <div>
        <p>{{ countText.length }}</p>
        <input type="text" v-model="countText">
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const countText = ref('');
watch(() => countText.value, (newValue) => {
  if (newValue.length > 50) {
    alert('Text exceeds 50 characters!');
  }
});

// watch( countText.value, (newValue) => {
//   if (newValue.length > 50) {
//     alert('Text exceeds 50 characters!');
//   }
// });

</script>