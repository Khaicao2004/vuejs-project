<template>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input v-model="formData.name" type="text" id="name" />
        </div>
        <div>
          <label for="img_thumb">Image Thumbnail:</label>
          <input type="file" @change="handleFileUpload" id="img_thumb" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        formData: {
          name: "", // Dữ liệu khác, ví dụ như "name"
          img_thumb: null, // File upload
        },
      };
    },
    methods: {
      handleFileUpload(event) {
        this.formData.img_thumb = event.target.files[0];
      },
      async submitForm() {
        const form = new FormData();
        form.append("name", this.formData.name);
        
        if (this.formData.img_thumb) {
            form.append("img_thumb", this.formData.img_thumb);
        }
  
        try {
          const response = await axios.post("http://127.0.0.1:8000/api/categories", form, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log("Response:", response.data);
          alert("Thêm thành công!");
        } catch (error) {
          console.error("Error:", error.response.data);
          alert("Có lỗi xảy ra!");
        }
      },
    },
  };
  </script>
  