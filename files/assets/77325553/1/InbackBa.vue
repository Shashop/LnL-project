<template>
<div id="inback-ba"><in-back><slot></slot></in-back>
</div>
</template>
<script>
import InBack from '~/components/InBack.vue'
export default {
components: {
    InBack
     }
    }
</script>
<style lang="scss" scoped>
#inback-ba {
      text-align: center;
      margin: 0px auto;
      
       height: 100%;
          position: static;
          display:block;
          width: 750px;
  
  }


</style>