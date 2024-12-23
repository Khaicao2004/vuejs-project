<template>
  <ul class="nav bg-success-subtle gap-4 p-4 ">
    <li class="nav-item">
      <RouterLink class="text-decoration-none text-black"  :to="{ name: 'dashboard' }">Dashboard</RouterLink>
    </li>
    <li class="nav-item">
        <RouterLink class="text-decoration-none text-black"  :to="{ name: 'categories' }">Categories</RouterLink>
    </li>
    <li class="nav-item">
        <RouterLink class="text-decoration-none text-black" :to="{ name: 'accounts' }">Accounts</RouterLink>
    </li>
    <li class="nav-item">
        <RouterLink class="text-decoration-none text-black" :to="{ name: 'test' }">Test</RouterLink>
    </li>
  </ul>
</template>
<script>
import { RouterLink } from "vue-router";    
export default {
 props: ['message']
};
</script>

<style lang="css"></style>
