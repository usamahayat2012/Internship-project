<template>
    <div>
        <h1>Teacher name is : {{ name }}</h1>
        <h1>Subjects are : {{ subjects }}</h1>
        <button v-on:click="setData">Click me</button>

    </div>
    </template>
    
    <script>
    export default {
        name: 'TeacherComponent',
    
        props: {
            name: String,
            subjects: Object,
            setData:Function,
    
        },
        // methods:{
        //     getData(){
        //         name: "usama"
        //         email: "usama@gmail.com"
        //     }
        // }

    
    }
    </script>
    
