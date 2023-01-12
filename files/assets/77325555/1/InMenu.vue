<template>
<div id="main-header">
    
        
            <div id="main-headernavi" class="clearfix">
<nuxt-link  id="main" :to="$store.getters['auth/isAuthenticated'] ? '/main' : '/'"><img src="~/assets/img/logomark.png" alt="ロゴ" class="top"></nuxt-link >&emsp;&emsp;&emsp;&emsp;<div class="cc">
<menu-button id="INTRODUCTION" to="/" class="btn-flat-border">INTRODUCTION</menu-button>
<menu-button id="RULES" to="/" class="btn-flat-border">RULES</menu-button>
<menu-button id="NEWS" to="/" class="btn-flat-border">NEWS</menu-button>
<menu-button id="PCLIST" to="/pclist" class="btn-flat-border">PCLIST</menu-button>
<menu-button id="LOGIN" to="/login" class="btn-flat-border">LOGIN</menu-button>

                </div>
           <div class="headerbottom"><div class="headbot">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <nuxt-link id="BOARD"  to="/" class="btn-flat-border2">BOARD</nuxt-link>
                    
                    <nuxt-link id="COMMISSION"  to="/" class="btn-flat-border2">COMMISSION</nuxt-link>
                </div>
                </div>
                </div> </div>
               
     


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
    background-color: #000000;
   margin: 0px auto;
    }

.clearfix {background-color: #700016;
    

 text-align: center; 
      background: -moz-linear-gradient(top, #000000, #52002c);
  background: -webkit-linear-gradient(top, #000000, #52002c);
  background: linear-gradient(to bottom, #000000, #52002c);
  /*グラデーション以外は省略*/
    

    position: relative;

    
}




 img.top{
      
       width: 200px; z-index: 5  /* 横幅を200pxに */
}

.top{
    position: absolute;
    top: 0px;
 
    

    
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


.button{  
    padding: 6px;
    font-weight: bold;
    color: #fffeca ;
    border: solid 2px #fffeca;
    cursor :pointer;
    border-radius: 10px;
    -webkit-border-radius: 10px;/* for Safari and Chrome 対応*/
    -moz-border-radius: 10px;/* for Firefox 対応*/
    background: #302d60;
    font-size: 14px; 
    position: relative;
    z-index: 5;
        
              background: -moz-linear-gradient(top, #302d60, #2d4860);
  background: -webkit-linear-gradient(top, #302d60, #2d4860);
  background: linear-gradient(to bottom, #302d60, #2d4860);
    
    transition: .4s;
}

/*ボタンホバー時*/
.button:hover {
    background: #b7a547;
}
.shinki {
    padding: 8px;
    font-weight: bold;
    color: #fffeca ;
    border: solid 2px #fffeca;
    cursor :pointer;
    border-radius: 15px;
    -webkit-border-radius: 15px;/* for Safari and Chrome 対応*/
    -moz-border-radius: 15px;/* for Firefox 対応*/
    background: #55001a;
    font-size: 16px; 
    text-decoration: none;
      background: -moz-linear-gradient(top, #55001a, #4d2e28);
  background: -webkit-linear-gradient(top, #55001a, #4d2e28);
  background: linear-gradient(to bottom, #55001a, #4d2e28);
    
    transition: .4s;
    
    
}

/*ボタンホバー時*/
.shinki:hover {
    background: #b7a547;
}

.p{
    font-size:11px;
}

</style>