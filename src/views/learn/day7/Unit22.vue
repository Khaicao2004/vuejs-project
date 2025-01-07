<template>
    <h1 class="text-center">To do list</h1>
    <div class="p-4">
        <div class="d-flex mb-3">
            <input type="text" v-model="newTask.name">
            <button type="button" @click="addTask">Add task</button>
        </div>
        <table class="table table-bordered text-center" v-if="tasks.length">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name task</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <td>{{ index+1 }}</td>
                    <td :class="task.status == true ? 'text-decoration-line-through' : null">{{ task.name }}</td>
                    <td><input type="checkbox" v-model="task.status"></td>
                    <td><button type="button" class="btn btn-danger" @click="deleteTask(index)">Delete</button></td>
                </tr>
            </tbody>
        </table> 
        <span v-else>No task</span>   
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const tasks = ref([
        {name: 'Task1', status: false }
    ]);
    const newTask = ref({
        name: '',
        status: false
    })
   const addTask = (() =>{
    console.log(!newTask.value.name.trim());
    
    if(!newTask.value.name.trim()){
        alert('Task no spacing');
        return;
    }
    tasks.value.push({
        name: newTask.value.name,
        status: newTask.value.status,
    });
    newTask.value.name = '';
   })
   const deleteTask = ((index) => {
        tasks.value.splice(index,1);
   })
    
</script>