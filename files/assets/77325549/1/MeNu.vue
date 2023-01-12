<template>

    <div id="main-header">
            <div id="main-headernavi" class="clearfix">
<nuxt-link  id="main" to="/main"><img src="~/assets/img/logomark.png"  class="top"></nuxt-link >&emsp;&emsp;&emsp;&emsp;<div class="cc">
<menu-button id="EXPLORE" to="/explore" class="btn-flat-border">EXPLORE</menu-button>
<menu-button id="ITEM" to="/main" class="btn-flat-border">ITEM</menu-button>
<menu-button id="PROFILE" to="/character" class="btn-flat-border">PROFILE</menu-button>
<menu-button id="MAIL" to="/main" class="btn-flat-border">MAIL</menu-button>
<menu-button id="LOGS" to="/main" class="btn-flat-border">LOGS</menu-button>
<menu-button id="LINKS" to="/main" class="btn-flat-border">LINKS</menu-button>
                </div>
           <div class="headerbottom"><div class="headbot">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <nuxt-link id="RULES"  to="/main" class="btn-flat-border2">RULES</nuxt-link>
                    <nuxt-link id="PCLIST"  to="/list" class="btn-flat-border2">PCLIST</nuxt-link>
                    <nuxt-link id="BOARD"  to="/main" class="btn-flat-border2">BOARD</nuxt-link>
                    <nuxt-link id="NOTES"  to="/main" class="btn-flat-border2">NOTES</nuxt-link>
                    <nuxt-link id="CONFIG"  to="/config" class="btn-flat-border2">CONFIG</nuxt-link>
                    <a class="btn-flat-border2" :href="`${$router.options.base}api/logout`">LOGOUT</a>
                </div>
                </div>
                </div> 
                <div class="status">★★★HP &emsp;&emsp;MP &emsp;&emsp;AP /300&emsp;&emsp;<img src="~/assets/img/menu/coin.png" alt="コイン" class="coin"> G&emsp;
                </div>

</div>
</template>
<script>
import MenuButton from '~/components/MenuButton.vue'
export default {
components: {
    MenuButton
     }
    }
</script>
<style lang="scss" scoped>

    #main-header {      text-align: center; 
   
  }
  .clearfix {background-color: #48000e;
      
  
  
        background: -moz-linear-gradient(top, #48000e, #210014);
    background: -webkit-linear-gradient(top, #48000e, #210014);
    background: linear-gradient(to bottom, #48000e, #210014);
    /*グラデーション以外は省略*/
      
  
      position: relative;
  
      
  }
  
  
  
  
  
   img.top{
     
         width: 200px; z-index: 1;  /* 横幅を200pxに */
  }
  
  .top{
      position: absolute;
      top: 0px;
      z-index: 1;
  
  }
  .cc{display: inline-block; 
      background-color:  rgba(0,0,0,0.0);
      width: 680px;
      right: 10px;
  text-align: right;
      
      }
      
  .headerbottom {
      background-color: #700016;
  background-image: url("https://www.transparenttextures.com/patterns/black-twill.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
      
      
      
  }
  .headbot{display: inline-block;
      width: 750px;
      }
  .btn-flat-border2 {
      font-size: 14px; 
    display: inline-block;
    padding: 0.4em 1.2em;
    text-decoration: none;
    color: #fffeca;
  
  
    transition: .4s;
  }
  
  
  .btn-flat-border2:hover {
    background: #cbbe52;
    color: white;
  }
  .status {background-color: #2f3047;
  background-image: url("https://www.transparenttextures.com/patterns/concrete-wall.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.89));
      font-size: 16px; 
  text-align: right;
    padding: 0.4em ;
    text-decoration: none;
    color: #f2f1e6 ;
      text-shadow: 0 0 5px #fff,0 0 1px #fff;
  }


.coin{position: relative; /* 通常の文章の流れにある要素なので relative が適切 */
  top: 2px;}

</style>