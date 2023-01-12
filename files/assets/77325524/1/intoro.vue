<template>
<section>
    <div class="iremon"><div class="kakusi">
<div class="manyu">
<img src="~/assets/img/top1.png"></div></div></div>
<in-menu></in-menu>
<inback-ba><nuxt /></inback-ba>



</section>
</template>
<script>
import InMenu from '~/components/InMenu.vue';
import InbackBa from '~/components/InbackBa.vue';
import FontDefault from '~/components/FontDefault.vue';
export default {
components: {
    InMenu,
    InbackBa,
    FontDefault
},
        beforeDestroy() {
            document.body.className = '';
            this.$root.headerHide = false;
            this.$root.footerHide = false;
        },

        mounted() {
            document.body.className = 'int';
            this.$root.headerHide = true;
            this.$root.footerHide = true;
        },
}
</script>
<style lang="scss">

.manyu{
    text-align: center; 

   
    width:750px ;

 
}

.iremon{

     background-color: #000000;
}
.kakusi{
 overflow: hidden;
  width:750px ;
  margin:0 auto;
       position: relative;
    
}

    </style>
