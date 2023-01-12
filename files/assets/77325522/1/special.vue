<template>
<div>

<in-menu v-if="auth"></in-menu>
<me-nu v-if="!auth"></me-nu>

<back-spe><nuxt /></back-spe>


</div>

</template>
<script>
import MeNu from '~/components/MeNu.vue';
import BackSpe from '~/components/BackSpe.vue';
import FontDefault from '~/components/FontDefault.vue';
export default {
components: {
    MeNu,
    BackSpe,
    FontDefault
}
}
</script>
<style lang="scss">
