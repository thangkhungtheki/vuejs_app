<template>
    <div>
        <h1>{{ msg }}</h1> 
    </div>
</template>
<script>
    export default {
        name: 'hello',
        props: {
            msg: String
        }
    }
</script>
