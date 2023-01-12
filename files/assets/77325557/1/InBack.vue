<template>
<div class="in-back"><slot></slot></div>
</template>
<script>

export default {
components: {
    
     }
    }
</script>
<style lang="scss" scoped>

   .in-back {text-align: center;

      
                 background-image: url("~assets/img/haikei/yoru.png");     /* 背景画像指定 */

    background-attachment: fixed;
background-position: right top;
       

/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */

              width: 730px;
                
                padding: 15px 0px;
    
                margin: 0px auto; 
       
       z-index: 0;
   
       display:block;
       
    color: #f2f1e6 ;

    position: relative;
    text-shadow: 0 0 5px #fff,0 0 10px #fff;

}
img.in-back{z-index: 6;
    
}




.back2{   
    
    font-size: 16px; 
       color: #f2f1e6 ;
       text-shadow: 0 0 5px #fff,0 0 10px #fff;
    
    }

</style>