<template>
<div class="res">
    <div class="shadow">
        <img class="logo" src="../assets/app-logo.png" alt="app_logo">
    </div>

    <div class="login">
        <h1>Login</h1>
        <input type="text" placeholder="Enter Email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button v-on:click="Login">Login</button>
        <p>
            <router-link to="/SignUp">Don't have an account?</router-link>
        </p>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LogIn',

    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        async Login() {
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            );
            console.warn(result);
            if (result.status == 200 && result.data.length > 0) {
                alert("Login Succesfull.....")

                localStorage.setItem('User_Info', JSON.stringify(result.data[0]))
                this.$router.push({
                    name: 'Home'
                })
            }
            if (result.status == 200 && result.data.length == 0) 
            {
                alert("Please enter corect email and password......")
            }

            // http://localhost:3000/user?email=y&password=z
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
