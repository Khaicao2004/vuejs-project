<template>
    <div>
      <h1>Danh sách người dùng</h1>
      <div class="p-4">
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="list in users">
                      <td>{{ list.id }}</td>
                      <td>{{ list.name }}</td>
                      <td>{{ list.email }}</td>
                      <td>
                         <RouterLink :to="{ name: 'accounts-detail', params: {id: list.id }}">Detail</RouterLink>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
import {  RouterLink } from "vue-router";
  
  export default {
    data() {
      return {
        users: [], // Dữ liệu danh sách người dùng
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
    },
  };
  </script>
  