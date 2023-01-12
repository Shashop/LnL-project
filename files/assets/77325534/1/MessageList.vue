<template>
<section >
     
<div class="message-wrapper" v-for="m in mess.length" :key="m">
  
<div class="con2" v-if="mess[m - 1].name"><img v-if="mess[m - 1].icon" class="icon" :src="mess[m - 1].icon"/>
<b>{{ mess[m - 1].name }}：</b>{{ mess[m - 1].message }}
</div>

    </div>
   
</section>
</template>
<script>
import CharacterIcon from '~/components/CharacterIcon.vue'
export default {
components: {
CharacterIcon
},
props: ['mess'],
methods: {

}
}
</script>
<style lang="scss" scoped>
.con2{    border-bottom: double 3px #8ba1afb2;
     width: 600px;
 display: inline-block;
    vertical-align: top;
}
.con2 img{
    display: inline-block;
    vertical-align: -50%;
    width: 32px;
    height: 32px;
}
</style>