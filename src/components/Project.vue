<template>
  <div class="card px-4">
    <img class="card-img-top" :src=project.image :alt="`${project.name}-image`">
    <div class="card-body p-4">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text"><small>{{project.description}}</small></p>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary"><i class="fas fa-code" title="view code"></i></button>
        <button type="button" class="btn btn-secondary"><i class="fas fa-globe-europe" title="visit site"></i></button>
        <button type="button" class="btn btn-secondary"><i class="fas fa-laptop" title="watch demo"></i></button>
        <button type="button" class="btn btn-secondary"><i class="fas fa-info-circle" title="more info" @click.prevent="more()"></i></button>
        <!--      <a href="#" @click.prevent="home()">Home</a>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['project'],
  methods: {
    more() {
      //this.$router.push({name: 'project', params: { name: this.project.name } });
     this.$router.push({ path: `/projects/${this.project.name}`})
    },
  }
}
</script>

<style scoped>

</style>
