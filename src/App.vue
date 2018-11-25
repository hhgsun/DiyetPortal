<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/*google-font*/
@import url("https://fonts.googleapis.com/css?family=Quicksand");

body {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
    to top,
    #fbc2eb 0%,
    #a6c1ee 100%
  ); /*https://webgradients.com/*/
  background-color: #fbc2eb;
  height: 100%;
}

#app {
  font-family: "Quicksand", sans-serif,
    sans-serif /* "Avenir", Helvetica, Arial, sans-serif */;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
}

* {
  padding: 0;
  margin: 0;
}
</style>
