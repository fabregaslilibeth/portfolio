<template>
  <section class="projects col-12" id="projects">
    <h1>PROJECTS</h1>

    <div class="col-11 mx-auto mt-0 box-shadow">
      <div class="row nav-row d-flex border-bottom m-2 pt-2">
        <ul class="nav nav-pills col-12 mx-auto w-100 p-0" id="profileTab" role="tablist">
          <li class="nav-item col-3 border-right px-0 border-left">
            <a class="nav-link active text-center" id="all-tab" data-toggle="pill" href="#all"
               role="tab" aria-controls="all" aria-selected="true">
              <p class="sub-header my-2 mb-0" @click.prevent="getAllProjects">ALL</p>
            </a>
          </li>
          <li class="nav-item col-3 px-0" :class="index !== (categories.length - 1) ? 'border-right' : '' " v-for="(category, index) in categories" :key="category.name">
            <a class="nav-link text-center" data-toggle="pill" href="#"
               role="tab" :aria-controls="category.name" aria-selected="true"
              @click.prevent="filter(category.name)">
              <p class="sub-header mt-2 mb-0">{{  category.name }}</p>
            </a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="col-12 tab-content mx-auto" id="pills-profileContent">
          <div class="tab-pane fade show active mb-3" id="all" role="tabpanel"
               aria-labelledby="all-tab">
            <div class="row justify-content-center">

              <div class="col-12 col-md-3 py-4 px-2" v-for="project in filteredProjects" :key="project.name">
                  <Project :project="project" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Project from "../components/Project";
import projects from "../projects";

export default {
  name: 'Projects',
  components: { Project },
  data() {
    return {
      categories: [
        {name: 'laravel'},
        {name: 'vue'},
        {name: 'react'},
      ],
      projects: projects,
      filteredProjects: []
    }
  },
  mounted() {
    this.getAllProjects()
  },
  methods: {
    getAllProjects () {
      this.filteredProjects = this.projects
    },
    filter (category) {
      this.filteredProjects = []
      this.projects.forEach(project => {
        if (project.categories.includes(category.toLowerCase())) {
          this.filteredProjects.push(project)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.projects {
  min-height: 100vh;
}

.box-shadow {
  border: 1px solid white !important;
}

.border-bottom {
  border-bottom: 1px solid white !important;
}

.border-right {
  border-right: 1px solid white !important;
}

.nav-link {
  outline: none;
}

.nav-link.active {
  background-color: transparent !important;
  border-bottom: none;
  border-right: none;
}
</style>
