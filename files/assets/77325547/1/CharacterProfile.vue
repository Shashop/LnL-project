<template>
<section>
<section>
<div class="character-profile">

<sub-heading>
<div class="name" ><span v-if="emoji" class="emo" v-twemoji>{{ emoji }}</span><img v-if="doticon" class="dote" :src="doticon"><span v-else class="dote">&emsp;</span><b>{{ name }}</b><span v-if="emoji" class="emo" v-twemoji>&emsp;{{ emoji }}</span>
<nuxt-link id="edit"  to="/profile/edit" class="button" v-if="mode == 'home'">&ensp;<font-awesome-icon icon="pen-nib" />&ensp;Edit</nuxt-link>
<section class="relation"
 v-if="
 mode == 'profile' &&
 $store.getters['auth/isAuthenticated'] &&
  eno != $store.getters['auth/loginCharacter'].eno">
<div id="links"
    @click="relation('fav')"
    v-if="!isFaved && !isBlocked" class="button">
     <font-awesome-icon class="non" icon="heart" />&ensp;Favorite</div>
<div id="links2" 
    @click="relation('unfav')"
   v-if="isFaved && !isBlocked" class="button">
  <font-awesome-icon class="un"  icon="heart" size="lg"/>&ensp;Favorited</div><div class="minus">
<div id="block"  
    @click="relation('block')" class="button"
 v-if="!isBlocked">
 <font-awesome-icon class="non" icon="angry" />&ensp;Block</div>
<div id="block2"  
    @click="relation('unblock')" class="button"
 v-if="isBlocked">
 <font-awesome-icon class="un1" icon="angry" />&ensp;Blocked</div><br>
<div id="mute" 
    @click="relation('mute')" class="button"
  v-if="!isMuted">
  <font-awesome-icon class="non" icon="bell-slash" />&ensp;Mute</div>
<div id="mute2" 
    @click="relation('unmute')" class="button"
  v-if="isMuted"><font-awesome-icon class="un1" icon="bell-slash" />&ensp;Muted</div></div>
  </section></div></sub-heading></div>

</section>
<section class="image-wrapper">
<img v-if="profileImage" class="image" :src="profileImage">
</section>
<br>
<section>
<prof-data
:eno="eno"
:name="name"
:nickname="nickname"
:doticon="doticon"
:profileImage="profileImage"
:emoji="emoji"
:locdisclose="locdisclose"
:location="location"
:hp="hp"
:mhp="mhp"
:mp="mp"
:mmp="mmp"
:trunk="trunk"
:sex="sex"
:status="status"
:noimage="noimage"
:mainicon="mainicon"
:ability="ability"
:modelsheet="modelsheet"
 />
</section>

<section>
<div class="hidden_box">
    <label for="label1">　　▼詳細を見る　　</label>
    <input type="checkbox" id="label1" class="hoge">
    <div class="hidden_show">
      <!--非表示ここから-->    
      <div class="inline-block_1">
          <div class="inbl1" v-html="profile1">><p>{{ profile1 }}</p></div><div class="sukima"></div><div class="inbl1" v-html="profile2">>
              <p>{{ profile2 }}</p></div></div>

<br><br><div class="home" v-if="mode === 'home'">
<div class="character-icons-wrapper" v-for="i in iconmax" :key="i">
<div class="character-icon-wrapper"  v-for="l in 10" :key="l" >
<character-icon :src="icons[i - 1].url[l - 1]" :noimage="noimage"/>
    

</div>
</div> </div>

    <div class="home" v-if="mode === 'profile'">
<div class="character-icons-wrapper" v-for="i in 3" :key="i">
<div class="character-icon-wrapper"  v-for="l in 10" :key="l" >
<character-icon :src="icons[i - 1].url[l - 1]" :noimage="noimage"/></div>
    </div>


    </div>
    </div></div>
<br>
    </section>
    
</section>





</template>

<script>
import SubHeading from '~/components/SubHeading.vue'

import twemoji from 'twemoji'
import ProfData from '~/components/ProfData.vue'
import CharacterIcon from '~/components/CharacterIcon.vue'

export default {
components: {
ProfData,
CharacterIcon,
SubHeading

},

data() {
return {
  emojin: '✒',
  i:'',
  l:''
}},
props: {
    mode: String, // 表示モード home = ホーム、profile = キャラクターページ、preview = プレビュー
eno: Number,
name: String,
profile1: String,
profile2: String,
profileImage: String,
icons: [Array,Object],
doticon: String,
ap: Number,
status: Object,
emoji: String,
locdisclose: Boolean,
location:  String,
ability:   String,
hp: Number,
mhp: Number,
mp: Number,
mmp: Number,
trunk: String,
sex: String,
noimage: String,
mainicon: String,
iconmax: Number,
modelsheet: String,
isFaved: Boolean,
isBlocked: Boolean,
isMuted: Boolean,
nickname: String,
},

methods: {
relation: function(action) {
this.$emit('relation', action);
}
}
}

</script>

<style lang="scss" scoped>
.character-profile{
    position: relative;
    top: -10px;
}
img.dot{

    margin:0 auto;
    display: block;
width: 64px;
height: 64px;


}
img.dote{vertical-align: middle;
filter: drop-shadow(2px 2px 5px rgb(0, 0, 0));}
.name{
 
    line-height: 64px;
    height: 64px;
    background-image: url("~assets/img/ribon1.png");
            background-repeat: 

        no-repeat;
     background-position:
       center 15px;
       position:relative;

}

.icon {
width: 100%;
height: 100%;
}
.image-wrapper{
     max-width: 700px;
  max-height: 500px;
padding: 0px 15px;
}
.icon-wrapper {
display: block;
width: 64px;
height: 64px;


}

.button{
    position:absolute;
    right:15px;
        padding: 6px;
    font-weight: bold;
    color: #e0dbac ;
    border: solid 1px #e0dbac;
    cursor :pointer;
    border-radius: 10px;
    -webkit-border-radius: 5px 0px 0px 20px;/* for Safari and Chrome 対応*/
    -moz-border-radius: 10px;/* for Firefox 対応*/
    background: #294238;
    font-size: 14px; 
   line-height: 20px;
    z-index: 5;
    transition: .3s;
    transition-duration: .200s;
    text-shadow: none;
}
.button:hover {
    background: #b7a547;
    width: 10%;
}

.sukima{
     display: inline-block;
     width: 25px;
}
.character-icons-wrapper {
display: flex;
flex-wrap: wrap;
justify-content: center;
.character-icon-wrapper {
margin: 2px;
}}
.minus{
    right:0px;
    position:absolute;
    top: 40px;
    width:200px ;
    line-height:32px ;
}
#links{
  
       transition: .500s;
    transition-duration: .200s;
    background: #753d23;

}
#block{
        transition: .500s;
    transition-duration: .200s;
    padding:2px ;
    background: #2e2a4e;
}
#mute{
       transition: .500s;
    transition-duration: .200s;
    padding:2px ;
}

#links:hover{
   
    width: 50%;
    background: #b7a547;
        
    .non{
      
        color:gold;
        
    }
}

#block:hover {
  width: 40%;
    background: #b7a547;
        .non{
      
        color:indianred;
        
    }
}
#mute:hover {
  width: 40%;
    background: #b7a547;
            .non{
      
        color:ghostwhite;
        
    }
    
}
#links2{
      transition: .3s;
    transition-duration: .200s;
   
    background: #753d23;
    .un{
    color:tomato;
}
}
#block2{
        transition: .3s;
    transition-duration: .200s;
    background: #2e2a4e;
        .un1{
    color:orangered;

}
}
#mute2{
     transition: .3s;
    transition-duration: .200s;
            .un1{
    color:orangered;
}
}

#links2:hover{
   color:mistyrose;
    width: 55%;
    background: #b7a547;
    .un{
font-size:15px ;
color:mistyrose;
    }

}

#block2:hover {
  width: 50%;
    background: #b7a547;

}
#mute2:hover {
  width: 45%;
    background: #b7a547;
}
.relation{
    
     right:0px;
    position:absolute;
    top:0px;
    line-height: 40px;
    width:200px ;
}
img .image{

  object-fit: cover; /* この一行を追加するだけ！ */
}
.image{
     max-width: 700px;
  max-height: 500px;
}
</style>
