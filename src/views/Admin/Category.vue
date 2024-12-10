<template>
    <div>
        <h1>Day la quan ly danh muc</h1>
        <input v-model="text"  placeholder="Type here">
        <h2>{{ text.toLowerCase() }}</h2>
        

    </div>
</template>

<script>
export default {
  name: "Lifecycle",
  data () {
    return {
      message: "hello",
      create: '',
    }
  },
  beforeCreate() {
    this.message = "xin chao"
    this.message2 = "xin chao";
  },
  created() {
    console.log(this.message);
    console.log(this.message2);
    this.create = "xin chao"
  },
}
</script>
