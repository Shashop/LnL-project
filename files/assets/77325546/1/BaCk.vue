<template>
<div>
<div class="ba-ck" ><slot></slot>

</div>


</div>
</template>
<script>

export default {
}
</script>

<style lang="scss" scoped>

.ba-ck {
       text-align: center;

         height: 100%;

       background-image: url("~assets/img/haikei/waku0.png"), url("~assets/img/haikei/wali2.png"), url("~assets/img/haikei/waku1.png"),url("~assets/img/haikei/dark-exa.png");
         background-position: top center, bottom center, 50% 50%,top;
  background-repeat: no-repeat, no-repeat, repeat-y,repeat;

       /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
                width: 730px;
                
                padding: 15px 0px;
    
                margin: 0px  auto; 
       
       z-index: 0;
   
       display:block;
       
    color: #f2f1e6 ;

    line-height: 25px;

       }
       
img.ba-ck {z-index: 6;
    
}

</style>