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
      text: '',
    }
  },
}
</script>
