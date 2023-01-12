<template>
<div id="back-spe"><ba-spe><slot></slot></ba-spe>
</div>
</template>
<script>
import BaSpe from '~/components/BaSpe.vue'
export default {
components: {
    BaSpe
     }
    }
</script>
<style lang="scss" scoped>
#back-spe {
      text-align: center;
      margin: 0px auto;
      
       height: 100%;
          position: static;
          display:block;
          width: 750px;
  
  }



</style>