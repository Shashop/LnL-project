<template>
<section>
<div class="editor-wrapper">


Icon:
<select v-model="icon">
<option disabled value="">
--select icon--
</option>
<option v-for="(iconOption, index) in icons" :value="index" :key="index">
<img :src="iconOption.url[0]">{{ iconOption.name }}
</option>

</select>


<input class="editor" v-model="message" placeholder="to speak">

<button class="button" @click="sendClick">送信</button>


 <br>
<div v-if="icon || icon == 0">

 <div  v-for="l in 10" :key="l"  class="character-icons-wrapper">
         <input :id="l" class="aoo" type="radio" name="select" :value="icons[icon].url[l -1]" v-model="select">
         <label class="nono" :for= l >
             <img v-if="icons[icon].url[l -1]" class="icon" :src="icons[icon].url[l -1]"/>
<img v-else :src="noimage" class="icon" >
</label></div></div>

</div>
</section>
</template>
<script>
import CharacterIcon from '~/components/CharacterIcon.vue'
import MessageList from '~/components/MessageList.vue'
export default {
components: {
MessageList,
CharacterIcon
},
props: {
icons: Array,
reply: Object,
noimage: String,
nickname: String
},
data() {
return {
name: '',
icon: null,
message: '',
select: null,
isdisabled: undefined
}
},
methods: {
reset: function() {
this.message = '';
},
cancelReply: function() {
this.$emit('cancel-reply');
},
sendClick: function() {
    this.$emit('send-click', {
name: this.nickname,
icon: this.select,
message: this.message
});
}
}
}
</script>
<style lang="scss" scoped>
.editor-wrapper {
margin: 0 0px;
}

.editor {
height:22px ;
width:400px ;
margin: 0;
}
.name-input {
margin-right: 0px;
width:150px ;
}
.button {
margin-bottom: 0;
}
.character-icons-wrapper {
display: inline-block;
width:64px ;
height:64px ;
flex-wrap: wrap;
justify-content: center;
}
.character-icons-wrapper:hover{
    outline: 1px dashed rgb(233, 226, 206);
    outline-offset: -1px;
    border-radius: 10px;
}
.character-icons-wrapper input[type=radio]:checked + label img{
  outline: 1px dashed rgb(233, 226, 206);
    outline-offset: -1px;
    border-radius: 10px;
}

.character-icons-wrapper label{
    cursor: pointer;
}
.character-icons-wrapper input[type=radio]{
   display: none;
}
input[type=text][disabled]{
    background:#ffffff;
   
}
</style>