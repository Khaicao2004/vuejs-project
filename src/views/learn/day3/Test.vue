<template>
    <div>
      <h2>Ví dụ với ref và reactive</h2>
  
      <!-- Mảng sử dụng ref -->
      <h3>Mảng sử dụng ref:</h3>
      <p>{{ items.value }}</p>
      <button @click="addItem">Thêm phần tử vào mảng</button>
  
      <!-- Đối tượng sử dụng reactive -->
      <h3>Đối tượng sử dụng reactive:</h3>
      <p>{{ user.name }}</p>
      <button @click="changeUserName">Thay đổi tên người dùng</button>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  
  // Sử dụng ref để tạo mảng
  const items = ref([1, 2, 3])
  
  // Sử dụng reactive để tạo đối tượng
  const user = reactive({ name: 'John' })
  
  // Hàm thêm phần tử vào mảng
  const addItem = () => {
    items.value.push(4) // Thêm phần tử vào mảng
    console.log(items.value);
    
  }
  
  // Hàm thay đổi tên người dùng
  const changeUserName = () => {
    user.name = 'Jane' // Thay đổi tên người dùng
    console.log(user.name);
    
  }
  </script>
  
  <style scoped>
  h2 {
    color: #42b983;
  }
  
  button {
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }
  </style>
  