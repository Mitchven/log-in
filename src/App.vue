  <template>
    <div id="app">
      <Header></Header>
      <AppBody></AppBody>
    </div>
  </template>

  <script>
  import Header from "components/frame/Header.vue";
  import AppBody from 'modules/Login.vue'


  export default {
    name: "app",
    components: {
      Header,
      AppBody
    }
  };
  </script>

