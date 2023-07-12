<template>
    <h2>Name : {{msg}}</h2>
    <h2>Full Name : {{user.name}}</h2>
    <h2>Email : {{user.email}}</h2>
    <button v-on:click="setData()">Call Function</button>
</template>

<script>

    export default {
       name: 'ChildComponent',

       props:{
        msg: String,
        user:Object,
        setData:Function
       },



    }

</script>
