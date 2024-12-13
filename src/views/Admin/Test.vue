<template>
    <p>Full Name: {{ fullName }}</p>
    <p>Calculator: {{ calculator }}</p>
    <div class="flex">
        <input type="number" v-model="a">
        <input type="number" v-model="b">
        <button @click="resetValues">Reset Values</button>
    </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       firstName: "John",
       lastName: "Doe",
       a: 0,
       b: 0,
     };
   },
   computed: {
     fullName() {
       return this.firstName + " " + this.lastName;
     },
     calculator() {
       return this.a + this.b;
     }
   },
   methods: {
    resetValues() {
      this.a = 0;
      this.b = 0;
    }
  }
 };
 </script>