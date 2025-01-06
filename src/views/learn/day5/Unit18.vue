<template>
    <div class="d-flex justify-content-center">
        <form action="" class="w-50 border bg-info p-4">
            <div class="mt-3">
                <label for="" class="form-label">Name</label>
                <input type="text" v-model="formData.name" class="form-control w-75">
            </div>
            <div class="mt-3">
                <label for="" class="form-label">Email</label>
                <input type="email" v-model="formData.email" class="form-control w-75">
            </div>
            <div class="mt-3">
                <label for="" class="form-label">Password</label>
                <input type="password" v-model="formData.password" class="form-control w-75">
            </div>
        </form>

    </div>
    <p>Name: {{ formData.name }}</p>
    <p>Email: {{ formData.email }}</p>
    <p>Password: {{ formData.password }}</p>
</template>

<script setup>
import { reactive } from 'vue';

    const formData = reactive({
        name: '',
        email: '',
        password: '',
    })
</script>