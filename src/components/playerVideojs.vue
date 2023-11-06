<template>
    <div>
      <video-player ref="videoPlayer" class="video-player-box vjs-big-play-centered"></video-player>
      
    </div>
      <video></video>
  </template>
  
  <script>
  import videojs from 'video.js';
  
  export default {
    name: 'VideoPlayer',
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
      this.player = videojs(this.$refs.videoPlayer, this.options, () => {
        this.player.log('onPlayerReady', this);
      });
    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose();
      }
    }
  }
  </script>
  <style scoped>
  /* Điều chỉnh kiểu dáng của trình phát video ở đây */
  .video-js {
      color: #c40303;
  
  }
  </style>
    