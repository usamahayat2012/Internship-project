<template>
<router-view></router-view>
</template>

<script>
//import liberaries here

export default {
    name: 'App',

}
</script>

<style>
.res {
    display: flex;
    flex-direction: row;
    margin-top: 5%;
}

body{
    padding: 0%;
    margin: 0%;
}

.register,
.login
 {

    margin-right: auto;
    margin-left: auto;
    margin-bottom: auto;
    margin-top: auto;
    padding: 2%;

    border-radius: 10%;
    padding-top: 3%;
    padding-bottom: 5%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.shadow {
    width: auto;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    padding: 2%;
    height: auto;

    border-radius: 20%;
    box-shadow: 10px 10px 5px #7ea6d8;
}

.logo {
    margin-top: 0px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
}

.register h1,
.login h1 {
    border: 1px solid #7ea6d8;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    font-style: oblique;
    color: #7ea6d8;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 50px;

}

.register input,
.login input,
.add input 

{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    height: 30px;
    padding-left: 10px;
    margin-bottom: 10px;
    border: 1px solid #7ea6d8;
    border-radius: 8px;

}

.register button,
.login button ,
.add button
{
    width: 516px;
    margin-left: auto;
    margin-right: auto;
    background-color: #7ea6d8;
    color: white;
    font-style: italic;
    font-size: 17px;
    font-weight: bold;
    margin-top: 30px;
    border: #7ea6d8;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
}

#app {
    background-color: #e8ecf1;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  
}
</style>
