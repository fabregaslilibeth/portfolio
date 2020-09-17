<template>
  <div class="beth-nav">
    <ul class=" ">
      <li class="">
        <a href="#skills" class="btn btn-outline-secondary">About</a>
      </li>
      <li class="">
        <a href="#projects" class="btn btn-outline-secondary">Projects</a>
      </li>
    </ul>
  </div>

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

.beth-nav {
  width: 100vw;
  padding-right: 50px;
}

.beth-nav ul {
  margin-right: auto;
  display: flex;
  max-width: 100vw;
  justify-content: flex-end;
}

.beth-nav ul li {
  list-style-type: none;
  padding: 0 15px;
}

.beth-nav ul li a {
  margin-top: 5px;
  padding: 5px 30px;
  width: 200px;
  color: black;
}

</style>