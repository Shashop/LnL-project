<template>
<div class="icon-wrapper">
    <img v-if="src" class="icon" :src="src"/>
<img v-else :src="noimage" class="icon" >
</div>
</template>
<script>
export default {
props: {
src: String,
noimage: String,

},

}
</script>
<style lang="scss" scoped>
.icon-wrapper {
display: block;
width: 64px;
height: 64px;


}
.icon {
  object-fit: cover;
width: 64px;
height: 64px;
}
</style>