<template>
  <div>
    {{ project.name }}
    {{ project.description }}
  </div>
</template>

<script>
import projects from "../projects";
export default {
  name: 'Project',
  data () {
    return {
      project: []
    }
  },
  mounted () {
    this.project = projects.find(project =>
      project.name === this.$route.params.name
    )
  },
}
</script>

<style scoped>

</style>
