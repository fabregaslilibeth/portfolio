<template>
  <nav class="d-flex justify-content-between mb-md-4 mx-md-4 p-4 sticky-top">
    <p><a class="navbar-brand d-block d-md-none">Beth</a></p>
    <div class="form-inline">
      <button class="btn btn-outline-secondary px-4 mx-2" type="button">About</button>
      <button class="btn btn-outline-secondary px-4 mx-2" type="button">Projects</button>
    </div>
  </nav>

<!--      <a href="#" @click.prevent="home()">Home</a>-->
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    home() {
      this.$router.push({name: 'Home'});
    },
  }
}
</script>

<style lang="scss" scoped>


</style>