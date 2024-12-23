<template>
  <h1 class="text-center">Danh sách danh mục</h1>
  <div class="p-4">
        <RouterLink :to="{ name: 'categories-create' }" class="btn btn-primary">Create</RouterLink>
  </div>
  <div class="p-4" v-if="categories.length">
      <table class="table table-bordered text-center">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="list in categories" :key="list.id">
                  <td>{{ list.id }}</td>
                  <td>{{ list.name }}</td>
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
    inputValue: '',
    categories: [], // Dữ liệu danh sách người dùng
  };
},
created() {
  // Gọi API ngay khi component được khởi tạo
  this.fetchCategories();
},
methods: {
  async fetchCategories() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/categories"
      );  
        this.categories = response.data;
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  },
},
mounted() {
    
},
};
</script>
