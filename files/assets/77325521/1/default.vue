<template>
<div class="mumu">
<in-menu v-if="!auth"></in-menu>
<me-nu v-if="auth"></me-nu>


<back-ba><nuxt /></back-ba>



<foo-ter :height="height" />
</div>

</template>
<script>

import FooTer from '~/components/FooTer.vue';
import InMenu from '~/components/InMenu.vue';
import MeNu from '~/components/MeNu.vue';
import BackBa from '~/components/BackBa.vue';
import FontDefault from '~/components/FontDefault.vue';
export default {
components: {
    MeNu,
    BackBa,
    InMenu,
    FooTer,
    FontDefault
},

computed: {
auth: {
get() {
return this.$store.getters['auth/isAuthenticated'];
}
}
}
}
</script>
<style lang="scss">

</style>
