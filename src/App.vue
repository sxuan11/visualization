<template>
  <div id="app">
    <div class="nav">
      <div class="left">
        <Home />
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import Home from "./views/Home";
export default {
  components: {
    Home
  }
};
</script>
<style>
.class {
  display: flex;
}
.left {
  display: inline-block;
  width: 10%;
}
</style>
