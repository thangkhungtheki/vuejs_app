<template>
    <div>
      <div ref="player"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        player: null
      }
    },
    mounted() {
      const playerElement = this.$refs.player;
  
      // Khởi tạo trình phát JWPlayer
      this.player = jwplayer(playerElement);
      
      // Thiết lập cấu hình cho trình phát video
      // player.setup({
      //   file: "pngs/test.m3u8",
      //   // Các tùy chọn khác của JWPlayer
      //   heigh: 360,
      //   width: 640
      // });
      this.player.setup(this.options)
    },
    watch: {
      options(options){
        this.player.setup(options)
      }
    }
  }
  </script>