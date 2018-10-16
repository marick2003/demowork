<template>
  <div class='sketch' id="sketch">
  </div>
</template>


<script>
//import VueP5 from "vue-p5";
//import p5 from "./src/assets/js/p5.dom.js";

import p5 from 'p5/lib/p5';
import p5dom from 'p5/lib/addons/p5.dom';
import p5sound from 'p5/lib/addons/p5.sound';
import sketch from '../components/sketch.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      myp5: null,
    }
  }, 
  mounted() {
        // this.myp5 = new p5(sketch, document.getElementById('sketch'))
        this.myp5= new p5('',document.getElementById('sketch'));
        this.myp5.createCanvas(400, 400);
        this.myp5.background(220);
        this.myp5.ellipse(random(0,200),random(0,200), 10,10);
        //sketch.ellipse(sketch.random(0,width), sketch.random(0,height), 10,10);
  },
}

</script>
<style lang="scss" scoped>
  @import './node_modules/bootstrap/scss/bootstrap.scss';
 
</style>