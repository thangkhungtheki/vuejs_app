<template>
    <div>
        <div class="oneline">
            <h1> {{ bodem }}</h1> 
        </div>     
            <button1 buttonText="BỘ ĐẾM 1" v-on:click="tangso"></button1>
            <button1 buttonText="BỘ ĐẾM 2" v-on:click="giamso"></button1>
    </div>
</template>

<script >
import button1 from "./button.vue"
export default {
    name: 'bodemso',
    components: {
        button1
    },
    data() {
        return {
            bodem: 0,
        }
    },
    methods: {
        tangso(){
            this.bodem = this.bodem + 1
        },
        giamso(){
            this.bodem = this.bodem - 1
        }
    }
}
</script>

<style>
    .oneline{
        display: inline-block
    }
</style>