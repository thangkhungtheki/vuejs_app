<template>
    <div>
      <div ref="player"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const playerElement = this.$refs.player;
  
      // Khởi tạo trình phát JWPlayer
      const player = jwplayer(playerElement);
      
      // Thiết lập cấu hình cho trình phát video
      player.setup({
        file: "png/test1.m3u8",
        // Các tùy chọn khác của JWPlayer
        heigh: 360,
        width: 640
      });
    }
  }
  </script>