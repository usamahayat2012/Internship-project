<template>
<Header></Header>
<h1>Hello,{{ name }} Welcome on Home Page</h1>
<div style="overflow-x:auto;">
    <table>
        <tr class="table_head">
            <td>ID</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id" class="table_body">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
            <router-link :to="'/UpdateRestaurant/'+item.id" style="color: #7ea6d8;margin-right: 3%;font-weight: bold;">Update</router-link> |
            <button v-on:click=" DeleteRestaurant(item.id)">Delete</button>
        </tr>
    </table>
</div>
</template>

<script>
import axios from 'axios';
import Header from '../components/Header.vue'
export default {
    name: 'HomeComponent',

    data() {
        return {
            name: '',
            restaurants: [],

        }
    },

    methods: {
        async DeleteRestaurant(id) {

            let result = await axios.delete("http://localhost:3000/restaurants/"+id)

            if (result.status == 200) {
                this.LoadData()
            }
            console.warn(id)

            // alert("Restaurant Deletted Successfully.....")

        },

        async LoadData() {
            let user = localStorage.getItem('User_Info');
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({
                    name: 'SignUp'
                })
            }
            let result = await axios.get("http://localhost:3000/restaurants")
            this.restaurants = result.data

        }

    },

    components: {
        Header,

    },

    mounted(){
        this.LoadData();

    } 

}


</script>

<style>
table {
    width: 1000px;
    margin: auto;
}

.table_head {
    background-color: #7ea6d8;
    color: white;
    font-weight: bolder;
    text-align: center;
    height: 35px;
}

.table_body {
    height: 30px;
    background-color: white;
    color: #7ea6d8;
    font-weight: bold;
    text-align: center;

}
.table_body button{
    color: #7ea6d8;
    background-color: white;
    font-weight: bold;
    border: #7ea6d8 1px solid;
    margin-left: 3% ;
}
</style>
