<template>
<section>
     <button class="button" v-if="umu == 0" @click="sakusei">Join1</button>
  <button class="button" v-if="umu == 1" @click="sanka">Join2</button>
</section>
</template>
<script>
export default {
    props: {
        umu: Number,
    },
    methods: {

sakuseiClick: function() {
this.$emit('sakusei-click');
},
sankaClick: function() {
    this.$emit('sanka-click');
}
}
}
</script>