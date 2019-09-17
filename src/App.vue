<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

//import Form from './form/Form.vue'

export default {
  // data() {
  //   return {};
  // },
  beforeCreate() {
    //eslint-disable-next-line
    /*eslint-disable*/
    console.log("before created");
  },
  created() {
    console.log("created");
  },
  beforeMount(){
    console.log("before mounted")
  },
  mounted(){
    console.log("mounted")
  },
  beforeUpdate(){
    console.log("before updated")
  },
  updated(){
    console.log("updated")
  },
  beforeDestroy(){
    console.log("before destroyed")
  },
  destroyed(){
    console.log("destroyed")
  },
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Times New roman", Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: white;
  font-size: 50px;
  margin-top: block;
}
body{
        background-image: url(http://www.sclance.com/backgrounds/key-background/key-background_1376694.jpg);
        background-size: cover;
        background-repeat: no-repeat;
    } 

</style>