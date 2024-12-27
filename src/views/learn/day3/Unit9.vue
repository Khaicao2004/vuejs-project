<template>
    <div class="d-flex justify-content-center">
        <form @submit.prevent="submitForm" class="w-50">
            <div class="mt-3">
                <label for="" class="form-label">Name</label>
                <input type="text" v-model="newRecord.name" class="form-control">
            </div>
            <div class="mt-3">
                <label for="" class="form-label">Email</label>
                <input type="text" v-model="newRecord.email" class="form-control">
            </div>
            <div class="mt-3 mb-3">
                <label for="" class="form-label">Password</label>
                <input type="password" v-model="newRecord.password" class="form-control">
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
    <div class="p-4">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(record, index) in records">
                    <td>{{ index+1 }}</td>
                    <td>{{ record.name }}</td>
                    <td>{{ record.email }}</td>
                    <td>{{ record.password }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useToast } from 'vue-toast-notification';

const toast = useToast();
const records = reactive([]);
const newRecord = reactive({
    name: '',
    email: '',
    password: '',

});
    const submitForm = () => {
        if(newRecord.name.length < 3 ){
          toast.error("Name is required!", {
            position: 'top-right',
            duration: 5000,
            closeButton: true
          });
        }else if(newRecord.email.length < 3){
          toast.error("Email is required!", {
            position: 'top-right',
            duration: 5000,
            closeButton: true
          });
        }else if(newRecord.password.length < 10){
          toast.error("Password is required!", {
            position: 'top-right',
            duration: 5000,
            closeButton: true
          });
        }else{
            records.push({ ...newRecord });
            toast.success("Chúc mừng bạn!", {
            position: 'top-right',
            duration: 5000,
            closeButton: true
          });
            newRecord.name = '';
            newRecord.email = '';
            newRecord.password =  '';
        }
    }
</script>



<!-- <template>
    <div class="d-flex justify-content-center">
      <form @submit.prevent="submitForm" class="w-50">
        <div class="mt-3">
          <label for="" class="form-label">Name</label>
          <input type="text" v-model="name" class="form-control" placeholder="Enter your name">
        </div>
        <div class="mt-3">
          <label for="" class="form-label">Email</label>
          <input type="email" v-model="email" class="form-control" placeholder="Enter your email">
        </div>
        <div class="mt-3 mb-3">
          <label for="" class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control" placeholder="Enter your password">
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
    </div>
    <div class="mt-5">
      <h3 class="text-center">Submitted Records</h3>
      <ul class="list-group w-50 mx-auto">
        <li class="list-group-item" v-for="(item, index) in record" :key="index">
          <strong>{{ item.name }}</strong> - {{ item.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Khai báo biến reactive
  const record = ref([]);
  const name = ref('');
  const email = ref('');
  const password = ref('');
  
  const submitForm = () => {
    // Kiểm tra form validation
    if (!name.value || !email.value || !password.value) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Thêm dữ liệu mới vào mảng record
    record.value.push({
      name: name.value,
      email: email.value,
      password: password.value, // Lưu password nếu cần
    });
  
    // Reset form sau khi submit
    name.value = '';
    email.value = '';
    password.value = '';
  };
  </script>
   -->