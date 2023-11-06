<template>
    <div>
      <video ref="videoPlayer" class="video-js"></video>
    </div>
  </template>
  
  <script>
  import videojs from 'video.js';
  import 'video.js/dist/video-js.css';
  
  export default {
    data() {
      return {
        player: null,
      };
    },
    mounted() {
      // Khởi tạo trình phát video
      this.player = videojs(this.$refs.videoPlayer, {
        // Các tùy chọn của trình phát video ở đây
        autoplay: false,
        controls: true,
        muted: true, // Đặt trạng thái tắt tiếng ở đây
        width: 640,
        heigh: 360,
        sources: [
          {
            src: 'png/test1.m3u8', // Đường dẫn đến tệp M3U8 của bạn
            type: 'application/x-mpegURL', // Kiểu MIME cho M3U8
          },
        ],
      });
    },
    beforeDestroy() {
      // Hủy trình phát video trước khi component bị hủy
      if (this.player) {
        this.player.dispose();
      }
    },
  };
  </script>
  
  <style scoped>
  /* Điều chỉnh kiểu dáng của trình phát video ở đây */
  .video-js {
   
    
  }
  </style>
  