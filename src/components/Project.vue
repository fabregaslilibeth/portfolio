<template>
  <div class="card">
    <img class="card-img-top" :src=project.image :alt="`${project.name}-image`">
    <div class="card-body p-4">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text"><small>{{ project.description }}</small></p>
      <div class="m-4">
        <small v-for="icon in icons" :key="icon">
          <i :class="icon.icon" class="mx-2" :style="`color: ${icon.color}`"></i>{{ icon.name }}
        </small>
      </div>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary"><i class="fas fa-code" title="view code"></i></button>
        <button type="button" class="btn btn-secondary"><i class="fas fa-globe-europe" title="visit site"></i></button>
        <button type="button" class="btn btn-secondary"><i class="fas fa-laptop" title="watch demo"></i></button>
        <button type="button" class="btn btn-secondary"><i class="fas fa-info-circle" title="more info"
                                                           @click.prevent="more()"></i></button>
        <!--      <a href="#" @click.prevent="home()">Home</a>-->
      </div>
    </div>
  </div>
</template>

<script>
import icons from "../icons";

export default {
  name: 'Project',
  props: ['project'],
  data () {
    return {
      icons: []
    }
  },
  mounted() {
    this.icons = []
    this.project.categories.forEach(category => {
      this.icons.push(icons.find(icon => icon.name === category))
    })
  },
  methods: {
    more() {
      //this.$router.push({name: 'project', params: { name: this.project.name } });
      this.$router.push({path: `/projects/${this.project.slug}`})
    },
  }
}
</script>

<style scoped>

</style>
