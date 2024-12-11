<template>
    <div>
      <h1>Chi tiet người dùng</h1>
      <div class="p-4">
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>{{ userDetail.id }}</td>
                      <td>{{ userDetail.name }}</td>
                      <td>{{ userDetail.email }}</td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
import { RouterLink } from "vue-router";
  export default {
    data() {
      return {
        userDetail: {}, // Dữ liệu danh sách người dùng
      };
    },
    methods: {
        async fetchUserDetail(id){
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        this.userDetail  =  response.data;   
      }
    },
    mounted() {
      const id = this.$route.params.id;
      this.fetchUserDetail(id);
    },
  };
  </script>
  