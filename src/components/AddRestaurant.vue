<template>
<Header></Header>
<div class="add">
    <h1>Add Restaurant</h1>
    <input type="text" name="nam" placeholder="Enter Name" v-model="restaurant.name">
    <input type="text" name="Address" placeholder="Enter Address" v-model="restaurant.address">
    <input type="text" name="Contact" placeholder="Enter Contact" v-model="restaurant.contact">
    <button v-on:click="AddRestaurant">Add New Restaurant</button>
</div>
</template>

<script>
import axios from 'axios';
import Header from '../components/Header.vue'
export default {
    name: 'AddRestaurant',

    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: '',
            }

        }

    },

    components: {
        Header,

    },

    methods: {
        async AddRestaurant() {
            let result = await axios.post("http://localhost:3000/restaurants",{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            console.warn(result)
            if (result.status == 201) {
                this.$router.push({
                    name: 'Home'
                })
                // alert("Restaurant Added Succesfully.....")

            }

        }
    },

    mounted() {
        let user = localStorage.getItem('User_Info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
    }
}
</script>

<style>

  </style>
