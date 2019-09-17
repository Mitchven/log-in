<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a class="navbar-brand" href="#">Easakay</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Register</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <h1 class="text-primary">Login using VueJs</h1>
    <div class="row loginPage">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="container">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <div class="form-group">
                <label for="username" class="bmd-label-floating">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="uname"
                  placeholder="Enter your username here!"
                />
              </div>
              <div class="form-group">
                <label for="pwd" class="bmd-label-floating">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="passw"
                  placeholder="Enter your password!"
                />
              </div>
              <center>
                <button type="button" class="btn btn-outline-success login-btn" id="btnLogin">Login</button>
                <!-- <input type = "login" class = "form -control" id = "login" value = "Login" v-on:> -->
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
//eslint-disable-next-line
/*eslint-disable*/
window.$ = require("jquery");
window.JQuery = require("jquery");
$(document).ready(function() {
  $("input").attr("required", true);
  // $("#email").prop('required', 'required');
  $("#btnLogin").click(function() {
    let input = $("#uname").val();
    let pass = $("#passw").val();
    $("#passw").attr({
      pattern: "[A-Za-z]{8,}",
      title: "This field is required"
    });
    if (input != "" && pass != "") {
      console.log($("#uname").val());
      console.log($("#passw").val());
    }
  });

  // $("#btnSignup").click(function(){
  //     $("#homepage").hide();
  //     $("#test").show();
  // })
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* body{
        background-image: url(http://www.sclance.com/backgrounds/key-background/key-background_1376694.jpg);
        background-size: cover;
        background-repeat: no-repeat;
    } */
.card {
  background-color: black;
  margin-top: 40px;
}
  

.h3 {
  margin-left: 500px;
  margin-top: 300px;
  font-size: 40px;
  font-family: Times new;
}
.nav {
  margin-block: auto;
}
</style>
