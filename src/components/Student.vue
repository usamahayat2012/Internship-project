<template>
<div>
    <h1>Student Data</h1>
    <br/>
    <button v-on:click="getUserName(userName)">Click to get user name</button>
</div>
</template>

<script>
export default {
    name: 'StudentComponent',
    data(){
        return {
            userName: "usama"
        }
    },
    // methods:{
    //     getUserName(val){
    //         this.$emit('sendUser',val)
    //     }
    // },
    props: {

        getUserName: Function

    }

}
</script>
