<template>
    <font-default>
 <div class="itemn2">
                        
                    <div class="inner1">
                    <table class="m">
                        
	<tbody>
		<tr>
			<th rowspan="6"><div class="tate">&emsp;</div></th>
			<td class="no">No.{{ eno|zeroPad }}</td>
			<td colspan="2" rowspan="2" class="nashi">

<div class="icon-wrapper">

  
    <img v-if="mainicon" class="icon" :src="mainicon">
<div v-else class="noimage"><img :src="noimage" class="icon" ></div>
</div>

            </td>
		</tr>
		<tr>
			<td class="name1"> 現在地：<span v-if="locdisclose === true">{{ location }}</span><span v-else-if="locdisclose === false">非公開</span>
                
            </td>
		</tr>
		<tr>
			<td rowspan="2" class="other1" frame="vsides" rules="cols"><b>アビリティ：{{ ability }}<br>体力：{{ status.vit }}　器用：{{ status.dex }}<br>精神：{{ status.mnd }}
        　社交：{{ status.soc }}<br>洞察：{{ status.ins }}　感性：{{ status.sen }}<br></b></td>
			<td colspan="2" class="nao"><div class="name1">【 {{ nickname }} 】</div><b>HP　{{ hp }}/{{ mhp }}<br>MP　{{ mp }}/{{ mmp }}</b></td>
		</tr>
		<tr>
			<td colspan="2" class="nao"><br></td>
		</tr>
		<tr>
			<td rowspan="2" class="other1"><b>トランクカラー：</b>
            <img v-bind:src="trunk" alt='トランク' class='trunksage'></td>
			<td class="naoi">性別：{{ sex }}</td>
			<td class="naoi">
        <template>
        <div class="example-modal-window"><button class="zenshin" @click="openModal">　　設定画　　</button>
  <MyModal @close="closeModal" v-if="modal">
    <div>
    <img v-if="modelsheet" class="image" :src="modelsheet">
    </div>
    </MyModal>
    </div>
    </template>
     </td>
		</tr>

	</tbody>
                         
</table> 


            </div>
            </div>
  </font-default>

</template>
<script>

import CharacterIcon from '~/components/CharacterIcon.vue'
import MyModal from '~/components/MyModal.vue'
export default {
components: {
MyModal,
CharacterIcon,

},

data() {
return {
  modal: false,
}},
props: {
    mode: String, // 表示モード home = ホーム、profile = キャラクターページ、preview = プレビュー
eno: Number,
name: String,
nickname: String,
profile: String,
profileImage: String,
icons: Array,
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
modelsheet: String,
},
    filters: {
  // ゼロ埋めフィルタ 引数に桁数を入力する
  // ※ String.prototype.padStart() は IEじゃ使えない
  zeroPad: function(value, num){
    var num = typeof num !== 'undefined' ? num : 6;
    return value.toString().padStart(num,"0");
  }
},
methods: {
          openModal() {
    this.modal = true
    },
    closeModal() {
      this.modal = false

    },
        doSend() {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('メッセージを入力してください')
      }
    },
}
}
</script>
<style lang="scss" scoped>
.icon {
  object-fit: cover;
width: 64px;
height: 64px;
}
.itemn2 {
    background-color: #bbb8b4;
background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png"),url("~assets/img/keshi.png"),url("~assets/img/ribon1.png");
    
        background-repeat: 
        repeat,
            no-repeat,
        no-repeat;
     background-position:
      top,
    right 0%,
    18% 30%;
line-height: 110%;
     max-width: 540px;
margin:  0 auto;   
font-family: 'Black Ops One', cursive;

}
.inner1{
    
    border: 1px solid #2a2929;
  border-width: 1px 0;
  position:relative;
   margin: 0px auto;
  padding: 20px 0;
    border-width: 1px 0;
max-width: 500px;
color:rgb(0, 0, 0);
}
table td.other1{
  font-family: 'Irish Grover', cursive;
  border-bottom: 1px #2a2929 solid;
    font-size: 16px;
        text-shadow: 1px 1px 0 #ffffff,
                 -1px 1px 0 #ffffff,
             1px -1px 0 #ffffff,
             -1px -1px 0 #ffffff;
             border-right: 1px #2a2929 solid;
             line-height:19px ;
}
td.no{
    
    text-shadow: none;
    font-size: 20px ;
    border-right: 1px #2a2929 solid;
}
table.m {
        background-color: #bbb8b4;
background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png"),url("~assets/img/keshi.png"),url("~assets/img/ribon2.png"),url("~assets/img/kiri.png");
    
        background-repeat: 
        repeat,
            no-repeat,
            no-repeat,
        no-repeat;
     background-position:
      top,
    right -18%,
    18% 40%,
         103% 70%;

   border-collapse: collapse;
  border-spacing: 0;
  margin: 0px auto;
 
  border: 1px solid #2a2929;
 
      position: relative;
  padding: 0px 40px;
  border-width: 0 1px;
  
  margin: 0 -20px;
    
    

   
    
}
table.m th{
 width: 1%;
  color: white;
  border-bottom: 1px #2a2929 solid;
    border-right: 2px #2a2929 solid;
    text-align: center;
    background-color: #2a2929;
}
.tate {  transform: rotate( -90deg );  /* 2D(平面)で回転 */
    
                
    

}
.naoi{
        font-size: 16px;
    color: black;
    text-shadow: none;
    border-right: 1px #2a2929 solid;
}
.zenshin{    padding: 6px;
  font-weight: bold;
  color: #f2f1e6 ;
  border: solid 2px #f2f1e6;
  cursor :pointer;
  border-radius: 50px;
  -webkit-border-radius: 50px;/* for Safari and Chrome 対応*/
  -moz-border-radius: 50px;/* for Firefox 対応*/
  background: #000;
  transition: .3s;
  text-decoration: none;
  font-size: 14px; }
table td.nashi{
  font-family: 'Kosugi', sans-serif;
    line-height: 17px;
  font-family: 'Trade Winds';
   text-align: center;

}
td.name1{
  font-family: 'Sawarabi Mincho', sans-serif;
  border-top: 1px #2a2929 solid ;
    width: 50%;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    padding: 6px;

    text-shadow: 1px 1px 0 #ffffff,
                 -1px 1px 0 #ffffff,
             1px -1px 0 #ffffff,
             -1px -1px 0 #ffffff;

    background-position: 50% 80%;
    background-repeat: no-repeat;
    
    
}
.name1{
  font-family: none;
  font-size: 16px;
  font-weight: 600;
  }
table td.other{
    font-family: 'Kosugi', sans-serif;
    padding: 5px 15px;
  font-size: 13px;
  border-bottom: 1px #2a2929 solid;
   text-align: left;
}
td.nao{font-size: 25px;
 line-height:23px ;
font-family: 'Racing Sans One', cursive;
    text-shadow: 1px 1px 0 #ffffff,
                 -1px 1px 0 #ffffff,
             1px -1px 0 #ffffff,
             -1px -1px 0 #ffffff;}

.zenshin:hover {
    background: #efefef;
}

.inner1:before{
  top: -40px;
  left: -60px;
  clip: rect(39px, auto, auto, 39px); /* CSS 2.1 way - deprecated */
  -webkit-clip-path: rectangle(50%, 50%, 100%, 100%, 0, 0); /* CSS 3 */
}

.inner1:after{
  top: -40px;
  right: -59px;
  clip: rect(39px, 21px, auto, auto);
  -webkit-clip-path: rectangle(0, 50%, 50%, 100%, 0, 0);
}
.inner1:before, .inner1:after,
table.m:before, table.m:after {
  content:'';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 20px solid #2a2929;
  border-radius: 50%;
  background: transparent;
  box-shadow: 0px 0px 1px 2px #525252;
    
}

.inner:before{
  top: -40px;
  left: -60px;
  clip: rect(39px, auto, auto, 39px); /* CSS 2.1 way - deprecated */
  -webkit-clip-path: rectangle(50%, 50%, 100%, 100%, 0, 0); /* CSS 3 */
}

.inner:after{
  top: -40px;
  right: -59px;
  clip: rect(39px, 21px, auto, auto);
  -webkit-clip-path: rectangle(0, 50%, 50%, 100%, 0, 0);
}
.inner1:before{
  top: -40px;
  left: -60px;
  clip: rect(39px, auto, auto, 39px); /* CSS 2.1 way - deprecated */
  -webkit-clip-path: rectangle(50%, 50%, 100%, 100%, 0, 0); /* CSS 3 */
}

.inner1:after{
  top: -40px;
  right: -59px;
  clip: rect(39px, 21px, auto, auto);
  -webkit-clip-path: rectangle(0, 50%, 50%, 100%, 0, 0);
}
table.m:before {
  bottom: -60px;
  left: -40px;
  clip: rect(auto, auto, 21px, 39px);
  -webkit-clip-path: rectangle(50%, 0, 100%, 50%, 0, 0);
}

table.m:after {
  bottom: -60px;
  right: -40px;
  clip: rect(auto, 21px, 21px, auto);
  -webkit-clip-path: rectangle(0, 0, 50%, 50%, 0, 0);
}

</style>