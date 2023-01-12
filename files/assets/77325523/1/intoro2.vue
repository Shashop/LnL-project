<template>
<div>
<in-menu></in-menu>
<inback-ba><nuxt /></inback-ba>


</div>

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
#main-header {      text-align: center; 
    background-color: #000000;}
    </style>
