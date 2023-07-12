<template>
<div class="user">
    <H2>{{data.name}}</H2>
    <H2>{{data.email}}</H2>
    <button v-on:click="newData(data.name)">Get Data</button>
</div>
</template>

<script>
export default {
    name: "UserComponent",
    props: {
        data: Object,
        newData:Function,
    },
  

}
</script>

<style>
.user {
    background-color: skyblue;

    padding: 10px;

    border-bottom: 1px solid;

    margin-bottom: 20px;
}
</style>
