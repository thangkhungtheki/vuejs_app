<template>
    <button v-on:click="xulyclick">{{ buttonText }}</button>
  </template>
  
  <script>
  export default {
    props: {
      buttonText: String // Thuộc tính để đặt nội dung của nút
    },
    methods: {
      xulyclick() {
        // Xử lý sự kiện khi nút được nhấn
        console.log('Nút đã được nhấn!');
      }
    }
  }
  </script>
  <style scoped>
    button {
        margin: 10px;
    }

</style>