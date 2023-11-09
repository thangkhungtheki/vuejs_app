<template>
    <div>
      <input v-model="sotap" type="text" placeholder="Số tập" />
      <input v-model="idfilm" type="text" placeholder="ID Film" />
      <button @click="handleButtonClick">nhấn vào Play</button>
    </div>
    <jwplayer :options = 'jwoptions'></jwplayer>
    
  </template>
  
  <script>
  import axios from "axios"
  import jwplayer from './jwplayer.vue'

  export default {
    
    data() {
      return {
        sotap: "",
        idfilm: "",
        jwoptions: {
          file: "pngs/output.m3u8",
          heigh: 360,
          width: 640,
          mute: true
        },
       
      };
    },
    components: {
      jwplayer
    },
    methods: {
      
    async fetchM3U8URL(url) {
      try {
        const response = await axios.get(url);
        const m3u8URL = response.data;
        return m3u8URL;
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
        return null;
      }
    },
    async changeVideoSource(url) {
      const m3u8 = await this.fetchM3U8URL(url);
      if (m3u8) {
        console.log('có file m3u8 nhé dm')
        
        //console.log(m3u8)
      //   // Gọi JWPlayer API để thay đổi nguồn video
        // jwplayer(this.$id.player).setup({
        //   file: m3u8,
        //   heigh: 360,
        //   width: 640
        // });
        this.jwoptions = {
          file: 'pngs/test.m3u8',
          heigh: 360,
          width: 640,
          mute: true,
        }
        
        alert('Video đã thay đổi thành: ')
      } else {
        alert('Không thể thay đổi video.');
      
    }
    },
    handleButtonClick() {
        // Xử lý sự kiện khi nút được nhấn
        alert("Số tập: " + this.sotap + " & idfilm: " + this.idfilm);
        let url = '//127.0.0.1:3000/g?idunique=' + this.sotap + '&idfilm=' + this.idfilm
        this.changeVideoSource(url)
      },
    },
    
  };
  </script>