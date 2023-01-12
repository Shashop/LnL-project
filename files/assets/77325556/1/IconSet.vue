<template>
<section>
  
    <div class="form-title">アイコン（横64px 縦64px）</div>
<div class="form-description">
アイコンは現在最大{{ iconmax }}セット({{ iconmax * 10 }}個)まで登録できます。
</div> 
<div class="icon" v-for="i in iconmax" :key="i" >
  
<div class="hidden_box">
    <label :for="'label.' + i"  :value="i" v-on:click="clickCheckbox" v-if="icons[i - 1].name === !'セット'"> 　　{{ icons[i - 1].name }}　　</label>
    <label :for="'label.' + i"  :value="i" v-on:click="clickCheckbox" v-else> 　　セット{{ i }}　　</label>
    <input type="checkbox" :id="'label.' + i"   :value="label" :v-model="checked" class="hoge">{{ value }}
 <div class="hidden_show">
      <!--非表示ここから-->    

      <!--非表示ここから-->    
   
<table class="tablecell" >
 

<div class="icon-name">
 セット名：<input type="text" v-model="icons[i - 1].name" class="icon-nyu" ></div>

 <td>
 <div v-for="l in 10" :key="l"  class="icons.url"><div class="mama">
 <character-icon :src="icons[i - 1].url[l -1]" :noimage="noimage"/></div>
<input type="text" class="mumu" v-model="icons[i - 1].url[l -1]"/></div></td>

 
 
 </table>


 </div>   </div>    </div>


<br>


<div class="form-title">ドットアイコン（横64px 縦64px）</div>
<div class="form-description">
アイコンは現在最大{{ dotmax }}セット({{ dotmax * 10 }}個)まで登録できます。
</div> 
<div class="icon" v-for="u in dotmax" :key="u" >
  
<div class="hidden_box">
    <label :for="'labeldot.' + u"  :value="u" v-on:click="clickCheckbox" v-if="dots[u - 1].name === !'ドット'"> 　　{{ dots[u - 1].name }}　　</label>
    <label :for="'labeldot.' + u"  :value="u" v-on:click="clickCheckbox" v-else> 　　ドット{{ u }}　　</label>
    <input type="checkbox" :id="'labeldot.' + u"   :value="label" :v-model="checked" class="hoge">{{ value }}
 <div class="hidden_show">
      <!--非表示ここから-->    

      <!--非表示ここから-->    
   
<table class="tablecell" >
 

<div class="icon-name">
 セット名：<input type="text" v-model="dots[u - 1].name" class="icon-nyu" ></div>

 <td>
 <div v-for="a in 10" :key="a"  class="icons.url"><div class="mama">
 <character-icon :src="dots[u - 1].url[a -1]" :noimage="noimage"/></div>
<input type="text" class="mumu" v-model="dots[u - 1].url[a - 1]"/></div></td>

 
 
 </table>


 </div>   </div>    </div>
</section>
</template>
<script>

import CharacterIcon from '~/components/CharacterIcon.vue'

export default {
components: {

CharacterIcon

},

data() {
return {
 
}},
props: {
icons: Array,
iconmax: Number,
dots: Array,
dotmax: Number,
noimage: String,
},
}
</script>

<style lang="stylus" scoped>


.form-textarea1{height: 300px;
width: 250px;
}
.form-textarea{height: 100px;

}
td.icon-url{
  width: 400px;
}
.icon-name{
   margin: auto;
  width: 650px;
  height: 50px;
    display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px; 
}
.icon-nyu{

   top: 50%;

   width: 150px;
   
}
.tablecell{

  text-align: center;

  height:64px;

}
tbody{
  height: 64px;
  padding: 10px; 
}
.mama{
display:inline-block;
vertical-align: middle;

}
.mumu{
  width: 400px;
display:inline-block;
}
.hidden_box label {

  padding: 6px;
  font-weight: bold;
  color: #f2f1e6 ;
  border: solid 2px #f2f1e6;
  cursor :pointer;
  border-radius: 50px;
  -webkit-border-radius: 50px;/* for Safari and Chrome 対応*/
  -moz-border-radius: 50px;/* for Firefox 対応*/
  background: #000;
  font-size: 12px; 
  transition: .3s;
  text-shadow: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/*全体*/

/*ボタン装飾*/
.hidden_box label {
  margin: 1.5em auto;/*前後の余白*/
  padding: 3px;
  font-size: 14px;

}

  

table {
  border-collapse: none;
  border-spacing: 0px;
  display: inline-table;
    border-collapse: none;
    box-sizing: none;
    border-spacing: 1px;
    border-color: rgba(128, 128, 128, 0);
}
td{
  display: inline-block;
    vertical-align: top;
}

</style>