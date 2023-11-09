<template>

<loichao msg="Day la components loi chao nhe"/>
<hello id='linkhello' msg="Click vào !!! đến trang login"/>
<button1 buttonText="NUT BUTTON"></button1>
<!-- <jwplayer></jwplayer> -->
<br>
<bodemso></bodemso>
<!-- <sotapid></sotapid> -->
<h1> Đây là test VIDEOJS</h1>
<!-- <changevideojs></changevideojs> -->
<jwplayer></jwplayer>
</template>

<script>
import hello from './components/hello.vue'
import loichao from './components/loichao.vue'
//import jwplayer from './components/jwplayer.vue'
import button1 from './components/button.vue'
import bodemso from './components/bodemso.vue'
//import sotapid from './components/id-sotap-nutPlay.vue'
//import videojs from './components/videojs.vue'
//import changevideojs from './components/button_change_videojs.vue'
import jwplayer from './components/jwplayer.op.vue'

export default {
    name: 'App',
    components: {
        hello,
        loichao,
        //jwplayer,
        button1,
        bodemso,
        //sotapid,
       // videojs
        //changevideojs,
        // playerVideojsOp
        jwplayer
    }
}
</script>