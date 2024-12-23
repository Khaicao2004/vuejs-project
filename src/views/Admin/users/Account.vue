<template>
      <h1 class="text-center">Danh sách người dùng</h1>
      <div class="p-4">
        <RouterLink :to="{ name: 'accounts-create' }" class="btn btn-primary">Create</RouterLink>
      </div>
      <div class="p-4" v-if="users.length">
          <table class="table table-bordered text-center">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="list in users" :key="list.id">
                      <td>{{ list.id }}</td>
                      <td>{{ list.name }}</td>
                      <td>{{ list.email }}</td>
                      <td>
                         <RouterLink :to="{ name: 'accounts-detail', params: {id: list.id} }" class="text-decoration-none text-white btn btn-primary">Detail</RouterLink>
                        <button @click="deleteUser(list.id)" class="btn btn-danger mx-2">Delete</button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="" v-else>No data</div>
  </template>
  
  <script>
  import axios from "axios";
import {  RouterLink } from "vue-router";
  
  export default {
    data() {
      return {
        users: [], // Dữ liệu danh sách người dùng
        loading: true
      };
    },
    created() {
      // Gọi API ngay khi component được khởi tạo
      this.fetchUsers();
    },
    methods: {
      
      async fetchUsers() {
        try {
          const response = await axios.get(
            "http://localhost:3000/users"
          );  
            this.users = response.data;
        } catch (error) {
          console.error("Lỗi khi gọi API:", error);
        }
      },
      async deleteUser(id){
        console.log(id);      
       await axios.delete( `http://localhost:3000/users/${id}`);
       this.users = this.users.filter((user) => user.id !== id); 
      }

},
    mounted() {
        
    },
  };
  </script>
  