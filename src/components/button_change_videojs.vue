<template>
    <div>
        <video ref="videoPlayerjs" class="video-js"></video>

    </div>
    <div>
        <button @click="changeVideoSource">Thay đổi video</button>
    </div>
</template>
  
<script>
import videojs from 'video.js';

export default {
    data() {
        return {
            player: null,

        };
    },
    mounted() {
        // Khởi tạo trình phát video ban đầu
        this.initializeVideoPlayer('png/output.m3u8');
        
    },
    methods: {
        initializeVideoPlayer(source) {
            // Hủy trình phát video hiện tại nếu có
            if (this.player) {
                this.player.dispose();
            } else {
                // Khởi tạo trình phát video với nguồn mới
                this.player = videojs(this.$refs.videoPlayerjs, {
                    // Các tùy chọn của trình phát video ở đây
                    autoplay: false,
                    controls: true,
                    width: 640,
                    heigh: 360,
                    muted: true,
                    sources: [
                        {
                            src: source, // Đường dẫn đến tệp M3U8 của bạn
                            type: 'application/x-mpegURL', // Kiểu MIME cho M3U8
                        },
                    ],
                });
                this.player.poster('png/nenden.jpg');

        this.player.on('pause', () => {
            console.log('Video paused')

        });

        this.player.on('play', () => {
            console.log('Video played')
        });

            }


        },
        changeVideoSource() {
            // Gọi phương thức này khi bạn muốn thay đổi nguồn video
            
            //this.initializeVideoPlayer('png/test1.m3u8');
            //this.player.src({ src: 'png/test1.m3u8', type: 'application/x-mpegURL' })
            //this.player.load()
           
        },
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
    color: #c40303;

}
</style>
  