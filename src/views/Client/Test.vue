<template>
    <div class="p-4">
        <h1 class="text-center">TO-DO-LIST</h1>
        <div class="d-flex mb-5">
            <input type="text" v-model="newTask">
            <button type="button" @click="addTask">Add task</button>
        </div>
        <table class="table table-bordered text-center" v-if="tasks.length > 0">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Change</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <td>{{ index+1}}</td>
                    <td>{{ task.name }}</td>
                    <td>{{ task.completed == true ? 'Resolved' : 'In Progress' }}</td>
                    <td>
                        <div class="d-flex justify-content-center gap-4">
                            <button type="button" class="btn btn-primary" @click="inprogress(index)" :disabled="!task.completed">In Progress</button>
                            <button type="button" class="btn btn-success" @click="resolved(index)" :disabled="task.completed">Resolved</button>
                        </div>
                    </td>
                  <td><button type="button" class="btn btn-danger" @click="removeTask(index)">Delete</button></td>
                </tr>
            </tbody>
        </table>
        <div v-else class="text-center">No tasks found. Please add a new task!</div>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const tasks = ref([]);
const STATUS = {
    IN_PROGRESS: false,
    RESOLVED: true
}
const newTask = ref('');
const addTask = () => {
    if(newTask.value.trim() == ''){
        alert('Can not empty');
        return;
    }

    tasks.value.push({
        name: newTask.value.trim(),
        completed: STATUS.IN_PROGRESS
    });
    
    newTask.value = '';
}
const inprogress = (index) => {
    tasks.value[index].completed = STATUS.IN_PROGRESS; 
}
const resolved = (index) => {
    tasks.value[index].completed = STATUS.RESOLVED;
}
const removeTask = (index) => {
    tasks.value.splice(index, 1);
}
</script>

<style lang="css" scoped></style>
