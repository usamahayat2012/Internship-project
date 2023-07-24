<template>
<Header></Header>
<h1>Update Restaurant</h1>
<div class="add">
    <input type="text" name="nam" placeholder="Enter Name" v-model="restaurant.name">
    <input type="text" name="Address" placeholder="Enter Address" v-model="restaurant.address">
    <input type="text" name="Contact" placeholder="Enter Contact" v-model="restaurant.contact">
    <button v-on:click="UpdateRestaaurant">Update Restaurant</button>
</div>
</template>

<script>
import axios from 'axios';
import Header from '../components/Header.vue'
export default {
    name: 'UpdateRestaurant',

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

    methods:{
        async  UpdateRestaaurant(){
            let result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact

            });
            console.warn(result)
            if (result.status == 200) {
                this.$router.push({name:'Home'})
                // alert("Restaurant Updated Succesfully.....")

            }
        }
    },

    async mounted() {

        let user = localStorage.getItem('User_Info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        const result = await axios.get("http://localhost:3000/restaurants/" + this.$route.params.id)

        console.warn(result)
        this.restaurant = result.data
    }

}
</script>

<style>

  </style>
