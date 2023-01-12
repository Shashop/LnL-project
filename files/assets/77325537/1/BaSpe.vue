<template>
<div>
<div class="ba-spe" ><slot></slot>

</div>


</div>
</template>
<script>

export default {
}
</script>

<style lang="scss" scoped>

.ba-spe {
       text-align: center;

         height: 100%;

       background-image: url("~assets/img/haikei/waku0.png"), url("~assets/img/haikei/wali2.png"), url("~assets/img/haikei/waku1.png"),url("~assets/img/haikei/Vintage.jpg");
         background-position: top center, bottom center, 50% 50%,top;
  background-repeat: no-repeat, no-repeat, repeat-y,repeat;

       /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
                width: 730px;
                
                padding: 15px 0px;
    
                margin: 0px  auto; 
       
       z-index: 0;
   
       display:block;
       


   

       }
       
img.ba-ck {z-index: 6;
    
}

</style>