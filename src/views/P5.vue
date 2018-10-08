<template>
     <div>
         <!-- <vue-p5  v-on="{setup, draw, keypressed}"></vue-p5> -->
         <vue-p5 @draw="draw" @key-pressed="keypressed"></vue-p5>
    </div> 
</template>


<script>
import VueP5 from "vue-p5";
// import p5 from "./src/assets/js/p5.dom.js";
export default {
    name: "p5-example",
    components: {
    "vue-p5": VueP5
    },
    methods:{
        setup(sketch) {
        // sketch.background('green');
        // sketch.text('Hello p5!', 10, 10);

         //sketch.ellipse(50, 50, 80, 80);
        sketch.createCanvas(640, 480);
        },
        draw(sk) {
            // draw a line between the previous
            // and the current mouse position
            sk.line(sk.pmouseX, sk.pmouseY, sk.mouseX, sk.mouseY);
        },
        keypressed(sk) {
            // convert the key code to it's string
            // representation and print it
            const key = String.fromCharCode(sk.keyCode);
            sk.print(key);
        }

    },
    created() {
            function setup() {

            }

            function draw() {
                 ellipse(50, 50, 80, 80);
            }
    },
    
}
</script>
<style lang="scss" scoped>
  @import './node_modules/bootstrap/scss/bootstrap.scss';
 
</style>