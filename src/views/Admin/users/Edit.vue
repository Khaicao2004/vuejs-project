<template>
    <h1 class="text-center">Chi tiết người dùng</h1>
    <div class="p-4">
      <RouterLink
        :to="{ name: 'accounts' }"
        class="text-decoration-none text-white mb-3 btn btn-primary"
        >Back</RouterLink
      >
      <table class="table table-bordered text-center">
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
    created() {
      const id = this.$route.params.id;
      this.fetchUserDetail(id);
    },
    methods: {
      async fetchUserDetail(id) {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        this.userDetail = response.data;
      },
    },
    mounted() {},
  };
  </script>
  