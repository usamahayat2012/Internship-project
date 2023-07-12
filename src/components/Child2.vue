<template>
<div>
    <h3>usama</h3>
    <h3 v-bind="$attrs">{{ data }}</h3>
</div>
</template>

<script>
export default {
    name: 'Child2Component',
    inheritAttrs:false,
    props:{
        data:String
    }
}
</script>
