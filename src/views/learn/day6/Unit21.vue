<template>
<h1 class="text-center">Unit21</h1>˜˜
<div class="p-4">
    <input type="text" v-model="searchQuery" class="mb-2">
    <div class="d-flex gap-3 mb-2">
        <label for="">Under Price 100k</label>
        <input type="checkbox" v-model="showUnderPrice">
    </div>
    <table class="table table-bordered">
    <thead>
        <tr>    
            <th>STT</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(product, index) in filterProducts">
            <td>{{ index+1}}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price.toLocaleString() + ' VND'}}</td>
           
        </tr>
    </tbody>
</table>
</div>
</template>      

<script setup>
import { computed, ref } from 'vue';
    const searchQuery = ref('');
    const showUnderPrice = ref(false);
    const products = ref([
        {name: 'Điện thoại', price: 100000},
        {name: 'Laptop', price: 190000},
        {name: 'Macbook', price: 160000},
        {name: 'Chuột máy tính', price: 100000},
        {name: 'Bàn phím', price: 90000},
    ]);
    const filterProducts = computed(() => {
        return products.value.filter((product) => {
           const matchesName = product.name.toLowerCase().includes(searchQuery.value.toLowerCase());
           const matchesPrice = !   showUnderPrice.value || product.price < 100000;
           return matchesName  && matchesPrice;
        });
    })
</script>