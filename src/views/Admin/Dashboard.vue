<template>
   <h1>Đây là dashboard!</h1>
   <p>Using text interpolation: {{ rawHtml }}</p>
   <p>Using v-html directive: <span v-html="rawHtml"></span></p>
   <div :id>222</div>
   <button :disabled="isButtonDisabled" @click="handleClick">Button</button>
   <div v-bind="objectOfAttrs">BC</div>
</template>

<script>
   export default{
      data() {
         return {
            rawHtml: '<span><strong>hello</strong></span>',
            id: 'kahahah',
            isButtonDisabled: false,
            objectOfAttrs: {
            id: 'container',
            class: 'wrapper'
    }
         }
      },
      methods: {
         handleClick(){
            this.isButtonDisabled = true;
           console.log(this.isButtonDisabled);
           
         }
      },
      mounted() {
         console.log(this.isButtonDisabled);
      },
   }
</script>
<style lang="css" scoped></style>