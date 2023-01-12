<template>
    <div>
        <!-- Note that 'ref' is important here (value can be anything). read the description about `ref` below. -->
        <vue-croppie 
            ref="croppieRef" 
            :viewport="{ width: 650, height: 100 }"
            :boundary="{ width: 700, height: 500}"
            
          
            @result="result"
            @update="update"
            
            >
        </vue-croppie>
        <div >
      {{ mau }}

        </div>
        <!-- the result -->
        <img v-bind:src="cropped">

<br><message-banner type="error" v-if="errorMessage">{{ errorMessage }}</message-banner>
        <!-- Rotate angle is Number -->
        <!-- Rotate angle is Number -->
  
        <button @click="rotate(-90)">左回転</button>
        <button @click="rotate(90)">右回転</button>
        <button @click="crop()">クロップ</button>
        <button @click="onon">決定</button>
   
    </div>
</template>

<script>
import MyModal from '~/components/MyModal.vue'
import MessageBanner from '~/components/MessageBanner.vue'
export default {
    components: {
        MessageBanner,

    },
 mounted () {
      // Randomize cat photos, nothing special here.
      let url = this.joinedProfileImages
      // Just like what we did with .bind({...}) on
      // the mounted() function above.
      this.$refs.croppieRef.bind({
        url: url
      })
  },
    props: {
             modal: Boolean,
        joinedProfileImages: String,
        listImage: String,
    },
    data() {
        return {
            cropped: null,
      
            resizedImg: "",
            waitingResponse: false,
            mau: "",

            val: "",
            errorMessage: "",
            zom: "",
            modal: true,
            listImage: "",
            lisime: {
                point1: '',
                point2: '',
                point3: '',
                point4: '',
                zoom: '',
            }

        }
    },
        asyncData: async function(context) {
const response = await context.$axios.get('/api/characters/main/list');
  

return {
 
listImage: response.data.listImage,
lisime: response.data.lisime,


}
},
    


    methods: {

        // CALBACK USAGE
        crop() {
            // Here we are getting the result via callback function
            // and set the result to this.cropped which is being 
            // used to display the result above.
            let options = {
                type: 'base64',
                format: 'png', 
                circle: true
            }
            this.$refs.croppieRef.result(options, (output) => {
                this.cropped = output;

               
                const resizedBlob = this.base64ToBlob(this.cropped);
                this.resizedImg = window.URL.createObjectURL(resizedBlob);  
            });

        },


        // EVENT USAGE
        cropViaEvent() {
            this.$refs.croppieRef.result(options);
        },
        result(output) {
            this.resizedImg = output;
        },
    

        result(options) {
            console.log(this.cropped);
        },

            base64ToBlob(base64) {
      const bin = atob(base64.replace(/^.*,/, ''));
      const buffer = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
      }
      return new Blob([buffer.buffer], {
        type: 'image/png'
      });},


           
               update(val) {
console.log(this.cropped);

                  this.mau = val.points;
                  
                    
                 this.zom = val.zoom;
                 this.listImage = this.cropped
                   },
           
               


        rotate(rotationAngle) {
            // Rotates the image
            // Rotates the image
            this.$refs.croppieRef.rotate(rotationAngle);

        },
    
        onon: async function() {
   　　　
if (this.waitingResponse) {
// 接続待ち状態であればアラートを表示しreturn、以降の処理を行わない
return alert('しばらくお待ち下さい');
}
if (!this.mau) {
return this.errorMessage = 'アカン';
}
if (!this.zom) {
return this.errorMessage = 'アホ'
}
if (!this.joinedProfileImages) {
return this.errorMessage = 'ホンマにアホ'
}
// 問題がなければ接続に入る、接続待ち状態をON(true)に
this.waitingResponse = true;

try {
    
            this.lisime.point1 = this.mau[0];
            this.lisime.point2 = this.mau[1];
            this.lisime.point3 = this.mau[2];
            this.lisime.point4 = this.mau[3];
            this.lisime.zoom = this.zom;
          
  alert(this.resizedImg)
   
// 更新を行う
await this.$axios.put('/api/characters/main/list', {
 
  csrf: this.$store.getters['auth/loginCharacter'].csrf,
listImage: this.resizedImg,
});

// 更新したら/profile/mainへリダイレクト
this.errorMessage = '登録が完了しました！';
this.$router.push('/profile/edit');
} catch (e) {
// エラーが発生した場合エラーメッセージを表示して接続待ち状態をOFF(false)に
this.errorMessage = '登録中にエラーが発生しました';
this.waitingResponse = false;
}
}
  
},

}

</script>
