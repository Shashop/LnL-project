<template>
<section>

    <div class="clock">

        <img src="~/assets/img/watch/tokei4.png" class="hand seconds" type="seconds" :rotate="seconds" :style="{'transform': 'rotate(' + seconds + 'deg)'}"/>
        <img src="~/assets/img/watch/tokei2.png" class="hand minutes" type="minutes" :rotate="minutes" :style="{'transform': 'rotate(' + minutes + 'deg)'}"/>
        <img src="~/assets/img/watch/tokei3.png" class="hand hours"   type="hours"   :rotate="hours" :style="{'transform': 'rotate(' + hours + 'deg)'}"/>
		<img src="~/assets/img/watch/tokei5.png" class="hand pon"   type="pon" >
			<div class="hand output" type="output">{{ new Date() | moment }}</div>
    </div>

</section>
</template>

<script>

import moment from 'moment'

export default {
    components: {

    },

    data() {
	
		

        return {
            intervalId: undefined,
			time: undefined,
			output: undefined,
			

        }
    },

    computed: {
		
        seconds() {
            let ss = moment(this.time).seconds()
            let nn = 0
            return 6 * (ss + nn / 360) 
        },

        minutes() {
            let mm = moment(this.time).minutes()
            return 6 * (mm + this.seconds / 360)
        },

        hours() {
            let hh = moment(this.time).hours()
            return 30 * (hh + this.minutes / 360)
		},

		
    },

    methods: {
        setTime() {
            this.intervalId = setInterval(() => {
                this.time = new Date()
            }, 10)
        }
    },

    mounted() {
        this.setTime()
    },

    beforeDestroy() {
        clearInterval(this.intervalId)
    },
}
</script>

<style scoped>
.clock {
	width:250px ;
	height:353px ;
	position: relative;
	background-image: url("~assets/img/watch/tokei.png");
}

.hand {
	position: absolute;
	
}

.seconds {
    left: 95px;
    top: 102px;
}

.minutes {
    left: 95px;
    top: 102px;
}

.hours {
    left: 95px;
    top: 102px;
}
.pon{
	    left: 95px;
    top: 102px;
}
.output{
	font-family: 'Special Elite', cursive;
	font-size: 14px;
	color: black;
		    left: 40px;
	bottom: 35px;
	z-index:500 ;
	font-weight: 600;
}
</style>