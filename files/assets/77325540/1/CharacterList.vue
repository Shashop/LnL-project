<template>

<ul class="character-list">

<li v-for="(character,index) in characters" :key="character.eno" >

    <div class="nya" :style="{background: 'linear-gradient( 135deg, rgba(0,0,0,0.8),rgba(43,43,43,0.1), rgba(176,159,153,0.7)), URL(' + character.listImage +')no-repeat  center/cover '}" v-on:mouseover="mouseOverAction(index)" v-on:mouseleave="mouseLeaveAction(index)" ontouchstart=””>
 
  <div class="imo">
    </div>
    <nuxt-link class="profile-link1" :to="`/profile/${character.eno}`">
<character-icon :src="character.mainicon"/></nuxt-link>

<nuxt-link class="profile-link" :to="`/profile/${character.eno}`"><span class="eno" >No.{{ character.eno|zeroPad }}</span></nuxt-link>
<div class="profile">
<div class="info">

<div class="inu">
<nuxt-link class="profile-link" :to="`/profile/${character.eno}`"><span class="name">{{ character.name }}</span></nuxt-link>
<br>
<nuxt-link class="profile-link" :to="`/profile/${character.eno}`"><span class="hp">Ability:</span></nuxt-link>
<nuxt-link class="profile-link" :to="`/profile/${character.eno}`"><span class="abi">{{ character.ability }}</span></nuxt-link></div></div>
</div>

</div>

<div class="summary" v-show="hoverFlag && index === hoverIndex " v-if="character.summary" v-on:mouseover="mouseOverAction(index)" v-on:mouseleave="mouseLeaveAction(index)" ontouchstart=””>
    <img v-if="character.doticon" class="dote" :src="character.doticon"><img v-else src="~/assets/img/mu.png" class="dote" >
<div class="aho" v-sanitaize >{{ character.summary }}</div>

</div>

</li>

</ul>


    
</template>
<script>
import twemoji from 'twemoji'
import VueSanitizeHtml from 'vue-sanitize-html-plugin';
import CharacterIcon from '~/components/CharacterIcon.vue'
export default {
components: {
    CharacterIcon
    },
    props: ['characters'],
 asyncData: async function(context) {
const response = await context.$axios.get('/api/characters');
  

return {
 
listImage: response.data.listImage,
lisime: response.data.lisime,


}
},
               data() {
return {
                heroimage: "",
                poin: "",
                poipoi: "",
             

                message: 'hoverしてください',
                hoverFlag: false,
                hoverIndex: null,
               
                } },
                computed: {
                 styles () {
      return {
        '--poin': poin,
      '--poipoi': poipoi,
      '--heroimage': url(heroImage)
      }
         } },        
            methods: {

                meme(){
      this.heroimage = this.listImage
                   
},


               

                
                mouseOverAction(index){
                    this.hoverFlag = true
                    this.hoverIndex = index


                },
                mouseLeaveAction(){
                    this.hoverFlag = false
                },
  
          },
    filters: {
  // ゼロ埋めフィルタ 引数に桁数を入力する
  // ※ String.prototype.padStart() は IEじゃ使えない
  zeroPad: function(value, num){
    var num = typeof num !== 'undefined' ? num : 6;
    return value.toString().padStart(num,"0");
  }
}
                }






</script>
<style lang="scss" scoped>
.character-list {
list-style: none;

text-decoration: none;

width: 650px;


li {


margin: 0px 0px;
padding: 10px;

height: 100px;
.nya {
    height: 100%;
    width: 100%;
    display: flex;
  position: relative;
   z-index: 0;



}
.nyao{
    position:relative;
width: 650px;
height: 100px;
overflow: hidden;

    display: flex;
  position: relative;
   z-index: 0;

    

}
img.nyao{
     z-index: -100;
}
.imo {
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url("~assets/img/tag.png");
    z-index: 50;
    background-size: 22%;
    background-repeat: 
        no-repeat;
    background-position:
        right,;
    filter: drop-shadow(2px 0px 3px rgba(0, 0, 0, 0.89));
 

}
.icon-wrapper {
    border: 2px solid;
    border-color: #c8c9af;
}
.profile-link1{
       z-index: 200;
       height: 64px;
}
.eno {
font-size: 30px;
margin-left: -64px;
color: rgb(255, 255, 255);
position: absolute;
bottom: 0px;
font-family: 'Bigshot One', cursive;
text-shadow: none;
z-index: 200;
filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.89));
}
.profile {
padding-left: 10px;


.name {
font-size: 25px;

position: relative; top:2px;
font-weight: bold;
font-family: 'Sawarabi Mincho', sans-serif;
color: #222222;
   text-shadow: 1px 1px 0 #ffffff,
                 -1px 1px 0 #ffffff,
             1px -1px 0 #ffffff,
             -1px -1px 0 #ffffff;
             z-index: 200;
             filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.89));
}
.hp {
font-size: 15px;

font-weight: bold;
font-family: 'Kosugi Maru', sans-serif;
color: #222222;
   text-shadow: 1px 1px 0 #ffffff,
                 -1px 1px 0 #ffffff,
             1px -1px 0 #ffffff,
             -1px -1px 0 #ffffff;
             z-index: 201;
}
.abi {
font-size: 20px;


font-weight: bold;
font-family: 'Kosugi Maru', sans-serif;
color: #867b1e;
   text-shadow: 1px 1px 0 #ffffff,
                 -1px 1px 0 #ffffff,
             1px -1px 0 #ffffff,
             -1px -1px 0 #ffffff;
             z-index: 201;
}
}
}
.inu{
text-align: left;
width: 400px;
line-height:25px ;
}
.summary {
    text-align: left;
    color:black;
background-color: rgba(240, 238, 232, 0.8);
border: 1px solid  rgba(136, 111, 0, 0.623);
  border-radius: 5px;
width: 270px;
height: 50px;
position: relative;
left: 350px;
top: -40px;
z-index: 100;
filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.89));

img.dote{vertical-align: top;
position: relative;
top: -10px;
right: 12px;
display: inline-block; 
filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.568));
}
.aho{
    font-size: 14px;
    display: inline-block; 
padding: 8px 0px;
width: 190px;
height: 20px;
font-weight: bold;
font-family: 'Kosugi Maru', sans-serif;
 text-shadow: 1px 1px 0 #ffffff,
                 -1px 1px 0 #ffffff,
             1px -1px 0 #ffffff,
             -1px -1px 0 #ffffff;
}
}




}
</style>