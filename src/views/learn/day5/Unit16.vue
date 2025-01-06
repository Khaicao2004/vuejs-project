<template>
    <div class="p-4">
        <table class="table border table-bordered text-center">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name product</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(list, index) in listProducts" :key="list.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ list.name }}</td>
                    <td>{{ list.price }}</td>
                    <td>
                        <img :src="list.image" alt="" width="100px">
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger" @click="deleteProduct(index)">Delete</button>
                    </td>
                   
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { reactive } from 'vue';


const listProducts = reactive([
    { id: 1, name: 'T-shirt', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQO2ga7Jsm-619O8lg9wp5S0uZtqppyDakw&s' },
    { id: 2, name: 'Baby three', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQO2ga7Jsm-619O8lg9wp5S0uZtqppyDakw&s' },
    { id: 3, name: 'Pen', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQO2ga7Jsm-619O8lg9wp5S0uZtqppyDakw&s' },
    { id: 4, name: 'Snack', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQO2ga7Jsm-619O8lg9wp5S0uZtqppyDakw&s' },
    { id: 5, name: 'Vegetable', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQO2ga7Jsm-619O8lg9wp5S0uZtqppyDakw&s' }
]);

const deleteProduct = (index) => {
    listProducts.splice(index,1);
}
</script>   