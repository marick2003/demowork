<template>
    <div>
        <div id="scene">
            <div data-depth="0.2">My first Layer!</div>
            <div data-depth="0.6">My second Layer!</div>
        </div>

          <!-- //Flex 的外容器與內元件 -->
	
       <!-- 這是一段很簡單的Code，主要就是將五個items放入FlexBox區塊當中 -->
		<div class="flex-container">
			<div class="item">1</div>
			<div class="item">2</div>
			<div class="item">3</div>
			<div class="item">4</div>
			<div class="item">5</div>
		</div>

		<!-- -->
		<div class="container">
		<div class="box">
			<div class="spin-container">
			<div class="shape">
				<div class="bd"></div>
			</div>
			</div>
		</div>
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

/*  宣告為 flex box */

.flex-container {
  display: flex;  
}

/*  將每一個items賦予border，讓我們比較好看出效果 */
.item{
  width: 20%; 
  border: 1px solid black;
  text-align:center;
}

.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.box {
  width: 60vmin;
  height: 60vmin;
  border: 1px dashed rgba(255,255,255,0.4);
  position: relative;

}
.box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    border: 1px dashed rgba(255,255,255,0.4);
    transform: scale(1.42);
  }

.spin-container {
  width: 100%;
  height: 100%;
  animation: spin 12s linear infinite;
  position: relative;
}

.shape {
  width: 100%;
  height: 100%;
  transition: border-radius 1s ease-out;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: morph 8s ease-in-out infinite both alternate;
  position: absolute;
  overflow: hidden;
  z-index: 5;
}

.bd {
  width: 142%;
  height: 142%;
  position: absolute;
  left: -21%;
  top: -21%;
  background: url(https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=2868fd5c3f30697d38732224e0ef51ed);
  background-size: 100%;
  background-position: center center;
  display: flex;
  color: #003;
  font-size: 5vw;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  animation: spin 12s linear infinite reverse;
  opacity: 1;
  z-index: 2;
}

@keyframes morph {
  0% {border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;} 
  100% {border-radius: 40% 60%;} 
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}


</style>
