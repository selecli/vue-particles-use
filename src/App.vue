<template>
  <div id="app">
    <!-- <vueParticlesUse
        :number="30"
        :area="2000"
        color="#ff0000"
        shape="star"
        :lineWidth="5"
        lineColor="#ff0000"
        :opacity="0.5"
        :speed="20"
        hoverMode="grab"
        clickMode="rbubble"
      ></vueParticlesUse> -->
    <router-view />
  </div>
</template>

<style lang="less">
html, body {
  margin:0;
  padding:0;
  height:100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #000;
  height:100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
