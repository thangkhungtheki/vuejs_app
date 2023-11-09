<template>
    <div>
      <VideoPlayer :options="videoOptions"/>
    </div>
    <div>
        <button @click="changeVideoSource">Đổi video</button>
    </div>
  </template>
  
  <script>
  import VideoPlayer from './playerVideojsByAI.vue';
  // import videojs from 'video.js';
  // import Vue from 'vue';
  export default {
    name: 'VideoExample',
    components: {
      VideoPlayer,
      
    },
    data() {
      return {
        videoOptions: 
        {
            showVideoPlayer: true,
            autoplay: false,
            controls: true,
            muted: true,
            
            width: 640,
            height: 360,
            sources: [
                        {
                            src: 'pngs/output.m3u8',
                            type: 'application/x-mpegURL'
                        }
                    ],
            poster: 'pngs/1920x1080.png',
        }
      };
    },
    methods: {
          changeVideoSource() {       
            // this.$refs.videoPlayer.player.pause()
            // this.videoOptions.sources[0].src = 'png/test1.m3u8'; // Đổi video nguồn
            // this.videoOptions.sources[0].type = 'video/mp4';
            // this.$refs.videoPlayer.player.load(); // Cần reset player để áp dụng thay đổi nguồn
            //this.$refs.videoPlayer.player.play()
            // var vid = document.createElement('video');
            // vid.classList.add('videojs')
            // document.body.appendChild(vid);
            // var player = videojs(vid, {});
            this.videoOptions = {
                showVideoPlayer: true,
                autoplay: false,
                controls: true,
                muted: true,
                
                width: 640,
                height: 360,
                sources: [
                            {
                                src: 'pngs/test.m3u8',
                                type: 'application/x-mpegURL'
                            }
                        ],
                poster: 'pngs/1920x1080.png',
            }
            
          }
    }
    
    
  };
  </script>