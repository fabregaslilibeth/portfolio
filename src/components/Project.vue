<template>
  <div class="card project-card">
    <img class="card-img-top" :src=project.image :alt="`${project.name}-image`">
    <div class="card-body p-4">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text"><small>{{ project.description }}</small></p>
      <div class="m-2 m-md-4">
        <small v-for="icon in icons" :key="icon">
          <img :src="icon.image" alt="" class="icon">
        </small>
      </div>
      <div class="btn-group" role="group" aria-label="Basic example">
        <a :href="project.code" target="_blank" class="btn custom-btn">
          <i class="fas fa-code" title="view code"></i>
        </a>
        <a :href="project.live" target="_blank" class="btn custom-btn">
          <i class="fas fa-globe-europe" title="visit site"></i>
        </a>
        <a :href="project.demo" target="_blank" class="btn custom-btn">
          <i class="fas fa-laptop" title="watch demo"></i>
        </a>
        <a href="#" class="btn custom-btn" @click.prevent="more()">
          <i class="fas fa-info-circle" title="more info" ></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import skills from "../skills";

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
      this.icons.push(skills.find(icon => icon.name === category))
    })
  },
  methods: {
    more() {
      this.$router.push({path: `/projects/${this.project.slug}`})
    },
  }
}
</script>

<style scoped>
.icon {
  width: 30px;
  margin: 10px;
}

.project-card {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>
