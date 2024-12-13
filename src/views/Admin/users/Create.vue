<template>
    <div class="container">
        <h1 class="text-center">khaicao</h1>
        <div class="d-flex justify-content-center">
            <form @submit.prevent="createUser" class="bg-secondary p-4 w-50">
                <div>
            <label for="name" class="form-label">Tên:</label>
            <input id="name" class="form-control" v-model="newRecord.name" type="text" placeholder="Nhập tên" />
          </div>
          <div>
            <label for="email" class="form-label">Email:</label>
            <input id="email" class="form-control" v-model="newRecord.email" type="email" placeholder="Nhập email" />
          </div>
            <button type="submit" class="mt-3 btn btn-primary">Add user</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
           newRecord: {
            name : '',
            email: ''
           },
           newUser: []
        }
    },
    methods: {
        async createUser() {
            try {
                const response = await axios.post("http://localhost:3000/users", this.newRecord);
                this.newUser.push(response.data);
                // Xóa dữ liệu form
                this.newRecord.name = "";
                this.newRecord.email = "";
                this.$router.push({name: 'accounts'})

            } catch (error) {
                console.log(error);
                
            }
        }
    }
}
</script>