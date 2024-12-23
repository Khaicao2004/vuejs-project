<!-- Html -->
<template>
  <div class="container-fluid">
    <div class="row p-4">
      <div class="col-12"><Header :message="parentsMs"/></div>
    </div>

    <RouterView />
  </div>
</template>

<!--  JS-->
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterView } from "vue-router";
import Header from "@/components/Admin/Header.vue";

 
export default {
  components: {
    Header,
  },
  data() {
    return {
      count: 0,
      parentsMs: "hello",
      text: "",
    };
  },
  methods: {
    
  },
  mounted() {
  },
};
</script>

<!-- Css -->
<style lang="css" scoped></style>
