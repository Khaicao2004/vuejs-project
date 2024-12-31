<template>
    <div>
      <label for="subscribe">Nhận thông báo:</label>
      <input type="checkbox" id="subscribe" v-model="isSubscribed">
      <!-- <p v-if="isSubscribed">Bạn đã đăng ký nhận thông báo!</p>
      <p v-else>Bạn chưa đăng ký nhận thông báo.</p> -->
      <p>{{ isSubscribed }}</p>
      <p>Now: {{ now }}</p>
      <!-- <input type="text" v-model="lastName">
      <input type="text" v-model="firstName">
      <p>{{ fullName }}</p> -->
    </div>
  </template>
  
  <script setup>
  import { computed, ref, watch } from 'vue';
  
  // Dữ liệu để kiểm tra trạng thái của checkbox
  const isSubscribed = ref(false);
//  n 
  const now = computed(() => {
   let now = new Date();
    return now.getFullYear();
  })
// Watchers để theo dõi sự thay đổi của firstName và lastName
// watch(firstName, (newValue) => {
//  fullName.value = lastName.value + newValue  ;
// });

// watch(lastName, (newValue) => {
//     fullName.value = newValue + firstName.value;
// });
  </script>
  