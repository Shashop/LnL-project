<template>
    <section>
    </section>
</template>
<script>
export default {
    props: ['rooms'],
data() {
return {
unmanned: undefined,
};
},
computed: {
    unmanned: function () {
        var loca = this.rooms.filter(e => e.location == 1);
        if(loca.length < 1){
    console.log("誰も居ません");}

    if(unmanned == true){
       var mul = loca.character.chara.filter(e => e.id == 153);

    }

    }
}



}
</script>
<style scoped>

</style>