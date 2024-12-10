<!-- Html -->
<template>
  <div class="container-fluid">
    <div class="row p-4">
      <div class="col-4 bg-info-subtle"><Sidebar/></div>
      <div class="col-8"><Header/></div>
    </div>
  </div>


  <!-- <li><RouterLink to="dashboard">Trang chủ</RouterLink></li>
  <div class="d-flex justify-content-center align-items-center">
    <button @click="decrement">-</button>
    <h4>Count is: {{ count }}</h4>
    <button @click="increment">+</button>
  </div>
  <div class="d-flex">
    <button @click="updateMessage">Update</button>
    <p>{{ message }}</p>
  </div>
  <div class="d-flex">
    <input type="text" v-model="text" />
    <p>{{ text }}</p>
  </div> -->
  <RouterView />
</template>

<!--  JS-->
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterView, RouterLink } from "vue-router";
import Sidebar from "@/components/Admin/Sidebar.vue";
import Header from "@/components/Admin/Header.vue";

export default {
  components: {
    Sidebar,
    Header,
  },
  data() {
    return {
      count: 0,
      message: "hello",
      text: "",
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    updateMessage() {
      this.message = "khaingaongo";
    },
  },
  mounted() {
    console.log(this);
    // const name = 'hâhh';
    // console.log(name)
  },
};
</script>

<!-- Css -->
<style lang="css"></style>
