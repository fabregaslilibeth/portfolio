<template>
  <div>
    <section-one></section-one>
    <about></about>
    <projects></projects>

  </div>
</template>

<script>
import SectionOne from "../components/SectionOne";
import About from "../components/About";
import Projects from "../components/Projects";

export default {
  name: 'Home',
  components: { SectionOne , About , Projects }
}
</script>

<style scoped>
</style>
