<template>
<div class="res">
    <div class="shadow">
        <img class="logo" src="../assets/app-logo.png" alt="app_logo">
    </div>

    <div class="register">
        <h1>SignUp</h1>
        <input type="text" placeholder="Enter Name" v-model="name">
        <input type="text" placeholder="Enter Email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button v-on:click="SignUp">SignUp</button>
        <p>
            <router-link to="/Login">already have an account?</router-link>
        </p>
        
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "SignUp",

    data() {
        return {

            name: '',
            email: '',
            password: '',

        }
    },
    methods: {
        async SignUp() {
            let result = await axios.post("http://localhost:3000/user", {
                name: this.name,
                email: this.email,
                password: this.password

            });
            console.warn(result)
            if (result.status == 201) {
                alert("SignUp Succesfull.....")

            }
            localStorage.setItem('User_Info', JSON.stringify(result.data))
            this.$router.push({
                name: 'Home'
            })
        }

    },
    mounted() {
        let user = localStorage.getItem('User_Info');
        if (user) {
            this.$router.push({
                name: 'Home'
            })
        }
    }
}
</script>

<style>


</style>
