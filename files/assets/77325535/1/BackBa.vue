<template>
<div id="back-ba"><ba-ck><slot></slot></ba-ck>
</div>
</template>
<script>
import BaCk from '~/components/BaCk.vue'
export default {
components: {
    BaCk
     }
    }
</script>
<style lang="scss" scoped>
#back-ba {
      text-align: center;
      margin: 0px auto;
  
       height: 100%;
          position: static;
          display:block;
          width: 750px;
          
 
  
  }


</style>