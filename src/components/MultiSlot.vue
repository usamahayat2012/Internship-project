<template>
<div class="card">
    <header>
        <slot name="header"></slot>

    </header>

    <content>
        <slot name="main"></slot>
    </content>

    <footer>
        <slot name="footer"><button>CLick Me</button></slot>
    </footer>
</div>
</template>

<script>
export default {
    name: 'MultiSlot',

}
</script>

<style>
.card{
    text-align: center;
    border: 1px solid;
    padding: 5px;
    width: 300px;
    background-color: rgb(90, 128, 163);
    border-radius: 20px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 30px;
}
</style>