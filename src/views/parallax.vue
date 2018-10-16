<template>
    <div>
        <div id="scene">
            <div data-depth="0.2">My first Layer!</div>
            <div data-depth="0.6">My second Layer!</div>
        </div>

          <!-- //Flex 的外容器與內元件 -->

        <div class="bg">
            
        </div>
    </div>

</template>
<script>
import Parallax from 'parallax-js/dist/parallax'

export default {
  data () {
    return {
      
    }
  },created() {

  },mounted(){

      var scene = document.getElementById('scene');
      var parallaxInstance = new Parallax(scene);
  } 
}
</script>
<style>
.bg{
    background: #fffc00;
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 1200px;
    margin-top: 0px;
    padding-bottom: 100vh;
}
.bg:before, .bg:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.bg:before{

    background: url(../assets/campaign_bg_1.png) repeat;
    background-position: 0;
    -webkit-animation: campaign_before 3.2s infinite forwards;
    animation: campaign_before 3.2s infinite forwards;
}
@-webkit-keyframes campaign_before {
	0% {
		background-position: 0px;
	}
	30% {
		background-position: 100px;
	}
	100% {
		background-position: 100px;
	}
}
@keyframes campaign_before {
	0% {
		background-position: 0px;
	}
	30% {
		background-position: 100px;
	}
	100% {
		background-position: 100px;
	}
}
.bg:after {
	background: url(../assets/campaign_bg_2.png) repeat;
	background-position: 60px;
	-webkit-animation: campaign_after 3.2s infinite forwards;
	animation: campaign_after 3.2s infinite forwards;
}
@-webkit-keyframes campaign_after {
	0% {
		background-position: 160px;
	}
	50% {
		background-position: 60px;
	}
	100% {
		background-position: 60px;
	}
}
@keyframes campaign_after {
	0% {
		background-position: 160px;
	}
	50% {
		background-position: 60px;
	}
	100% {
		background-position: 60px;
	}
}
</style>
