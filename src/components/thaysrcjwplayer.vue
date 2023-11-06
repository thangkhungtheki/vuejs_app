<template>
    <div>
      <!-- Đây là thành phần JWPlayer -->
      <div id="jwplayer-container"></div>
  
      <!-- Nút để thay đổi src -->
      <button @click="changeVideoSource">Thay đổi Video</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videoSource: "", // Đường dẫn video ban đầu
      };
    },
    methods: {
      changeVideoSource() {
        // Khi nút được nhấn, thay đổi videoSource
        //this.videoSource = "png/output.m3u8"; // Đường dẫn video mới
        window.jwplayer("jwplayer-container").load({
        file: "png/output.m3u8", // Đường dẫn video mới
      });
        // Làm mọi việc cần thiết để thay đổi src của JWPlayer ở đây
        // Ví dụ: window.jwplayer("jwplayer-container").load(this.videoSource);
      },
    },
    mounted() {
      // Sử dụng JWPlayer để phát video
      const player = window.jwplayer("jwplayer-container").setup({
        file: this.videoSource, // Sử dụng dữ liệu từ data
        width: "100%",
        aspectratio: "16:9",
      });
    },
  };
  </script>
  