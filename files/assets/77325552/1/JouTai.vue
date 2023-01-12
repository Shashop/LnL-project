<template>
    <section>
<div class="inline-block_3">
    <b>―――――――――――――――
        <div class="nyu">
        体力：{{ characters.status.vit }}　器用：{{ characters.status.dex }}　精神：{{ characters.status.mnd }}<br>
        社交：{{ characters.status.soc }}　洞察：{{ characters.status.ins }}　感性：{{ characters.status.sen }}

        </div>
        ―――――――――――――――</b>
    </div>

    </section>
</template>
<script>
export default {
    props: {
        characters: Object
},
}
</script>
<style scoped>
.nyau{
 font-family: 'Irish Grover', cursive;
}
.inline-block_3 {
    background-color:  #000;    /* 背景色指定 */
    padding:  10px;             /* 余白指定 */
                 /* 高さ指定 */
    width: 220px;

    border: 1px solid #f2f1e6;
   
    font-size: 14px;
    color: #f2f1e6 ;
      display: inline-block; 
    
   
   
    
    
}




</style>