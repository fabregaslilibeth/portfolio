<template>
  <div class="row">
    <banner></banner>
    <about></about>
    <projects></projects>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import About from "../components/About";
import Projects from "../components/Projects";

export default {
  name: 'Home',
  components: { Banner , About , Projects }
}
</script>

<style scoped>
</style>
