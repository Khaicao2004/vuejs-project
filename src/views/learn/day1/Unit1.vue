<template>
  <h1 class="text-center mt-5">Counter with Multiple Instances</h1>
  <div class="p-4">
    <button type="button" class="btn btn-primary mb-3" @click="addCounter">Add</button>
    <table class="table table-bordered text-center" v-if="counters.length > 0">
      <thead>
        <tr>
          <th>STT</th>
          <th>Value</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(counter, index) in counters" :key="index">
          <td>{{ index+1  }}</td>
          <td>{{ counter }}</td> 
          <td>
            <div class="d-flex justify-content-center gap-4">
              <button type="button" class="btn btn-secondary" @click="decrement(index)">Decrement</button>
              <button type="button" class="btn btn-success" @click="increment(index)">Increment</button>
              <button type="button" class="btn btn-danger" @click="deleteCount(index)">Delete</button>
            </div>
          </td>
        </tr> 
      </tbody>
    </table>
   <div class="d-flex justify-content-center" v-else><span class="text-center text-danger">No data</span></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const counters = ref([]);
const addCounter = () => {
  counters.value.push(0);
}
const decrement = (index) => {
  counters.value[index]--;
}
const increment = (index) => {
  counters.value[index]++;
}
const deleteCount = (index) => {
  counters.value.splice(index,1);
}
</script>

<style lang="css" scoped></style>
