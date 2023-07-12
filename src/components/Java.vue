<template>
    <h3>Java Content</h3>
    <button @click="tab='Front'">Front-End (Nested Dynamic Component)</button>
    <button @click="tab='Back'">Back-End (Nested Dynamic Component)</button>

    <component :is="tab"/>

    </template>
    
    <script>
    import Front from './FrontEnd.vue'
    import Back from './BackEnd.vue'
    export default{
        name:'JavaComponet',
        data(){
            return{
                tab:'',

            }
        },
        components:{
            Front,
            Back,

        }

    }
    
    </script>