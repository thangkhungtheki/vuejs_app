<template>
    <div>
      <video ref="videoPlayer" class="video-js"></video>
    </div>
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
    watch: {
      options: {
        handler(newOptions) {
          // Khi options thay đổi, hủy bỏ player hiện tại (nếu có)
          if (this.player) {
            this.player.dispose();
          }
          // Tạo player mới với options mới
          this.player = videojs(this.$refs.videoPlayer, newOptions, () => {
            this.player.log('onPlayerReady', this);
          });
        },
        deep: true
      }
    },
      mounted() {
          this.$nextTick(() => {
              this.player = videojs(this.$refs.videoPlayer, this.options, () => {
                  this.player.log('onPlayerReady', this);
              });
          });
      },
      beforeDestroy() {
          if (this.player) {
              this.player.dispose();
          }
      }
  }
  </script>
  