<template>
  <ul class="nav bg-success-subtle gap-4">
    <li class="nav-item">
      <RouterLink :to="{ name: 'dashboard' }">Dashboard</RouterLink>
    </li>
    <li class="nav-item">
        <RouterLink :to="{ name: 'categories' }">Categories</RouterLink>
    </li>
    <li class="nav-item">
        <RouterLink :to="{ name: 'accounts' }">Accounts</RouterLink>
    </li>
  </ul>
</template>
<script>
import { RouterLink } from "vue-router";
</script>

<style lang="css"></style>
