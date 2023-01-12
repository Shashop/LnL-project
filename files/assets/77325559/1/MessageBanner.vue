<template>
<div :class="['message-banner', type]">
<slot></slot>
</div>
</template>
<script>
export default {
props: {
type: String
}
}
</script>
<style lang="scss" scoped>
.message-banner {
width: 100%;
margin: 20px 0;
padding: 10px 20px;
box-sizing: border-box;
border: 1px solid gray;
display: flex;
flex-direction: column;
justify-content: center;
background-color: lightgray;
border-radius: 4px;
}
.success {
border: 1px solid #007243;
background-color: #9cd9ac;
}
.info {
border: 1px solid #005476;
background-color: #79baca;
}
.warning {
border: 1px solid #b39300;
background-color: #f2e6b8;
}
.error {
border: 1px solid #a61d39;
background-color: #e8c2bf;
}
</style>