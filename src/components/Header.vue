<template>
<div class="nav">
    <nav>

        <router-link to="/">Home</router-link>
        <router-link to="/AddRestaurant">Add Restaurant</router-link>
        <a v-on:click="Logout" href="">Logout</a>
        <a style="float: right; border-left: 1px solid white; border-right: 0px solid white;">{{ name }}</a>

    </nav>
</div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            name: '',
        }
    },

    methods: {
        Logout() {
            localStorage.clear();
            this.$router.push({
                name: 'Login'
            })
        }
    },

    mounted() {
        let user = localStorage.getItem('User_Info');
        this.name = JSON.parse(user).name;
    }

}
</script>

<style>
.nav {
    background-color: #7ea6d8;
    overflow: hidden;

}

.nav a {
    margin-top: 0%;
    margin-bottom: 0%;
    border-right: 1px solid white;
    float: left;
    color: white;
    font-weight: bolder;
    text-align: center;
    padding: 0.6% 3%;
    padding-top: 1%;
    padding-bottom: 1%;
    font-size: larger;
    text-decoration: none;

}

.nav a:hover {
    background-color: white;
    color: #7ea6d8;
}
</style>
