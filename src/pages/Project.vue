<template>
  <div class="container mx-auto">
    <div class="position-fixed" style="left: 10px; top: 10px; z-index: 99;" @click="back"><i class="fas fa-arrow-left mr-2"></i>Back</div>
<!--    <div class="project-banner-container mx-auto">-->
<!--      <p><img :src="project.banner" alt="" class="project-banner"></p>-->
<!--    </div>-->
    <div class="project-details position-relative col-12 mx-auto p-4 bg-white" data-animaton="animated slideUp">
      <h3>{{ project.name }}</h3>
      <h5>{{ project.description }}</h5>
      <div>
        <small>MADE WITH:</small>
        <small v-for="icon in icons" :key="icon">
          <i :class="icon.icon" class="mx-2" :style="`color: ${icon.color}`"></i>{{ icon.name }}
        </small>
      </div>

      <div class="btn-group col-4 m-4" role="group" >
        <a :href="project.code" target="_blank" class="btn btn-outline-secondary">
          <i class="fas fa-code mr-2" title="view code"></i><small>View Code</small>
        </a>
        <a :href="project.live" target="_blank" class="btn btn-outline-secondary">
          <i class="fas fa-globe-europe mr-2" title="visit site"></i><small>Visit Site</small>
        </a>
      </div>

      <p class="position-absolute disclaimer"><i class="fas fa-info-circle mr-2 text-secondary" title="All images used in this site are not mine."></i></p>

    </div>

    <div class="divider px-4 py-2" :style="`background: linear-gradient(to right, ${project.color}, transparent)`">
      <h3 class="text-left text-white">Demo</h3>
    </div>

    <div class="demo p-4">
      <iframe width="560" height="315" :src="`${project.demo}&rel=0`" allowfullscreen></iframe>
    </div>

    <div class="divider px-4 py-2" :style="`background: linear-gradient(to right, ${project.color}, transparent)`">
      <h3 class="text-left text-white">Pages & Features</h3>
    </div>
    <div class="features">
      <ol class="p-4">
          <span v-for="(feature, index) in project.features" :key="index">
           <span v-if="index%2" class="row align-items-center">
              <li class="col-12 col-md-6 my-2">{{ feature.desc }}</li>
              <p class="col-12 col-md-6 my-2"><img :src="feature.image" class="w-75 image" alt=""
                                                   @click.prevent="showImage(feature.image, feature.desc)"></p>
           </span>
           <span v-else class="row align-items-center">
             <p class="col-12 col-md-6 my-2"><img :src="feature.image" class="w-75 image" alt=""
                                                  @click.prevent="showImage(feature.image, feature.desc)"></p>
             <li class="col-12 col-md-6 my-2">{{ feature.desc }}</li>
           </span>
            <hr :style="`background: ${project.color}50`">
          </span>
      </ol>
    </div>

    <modal ref="imageModal" :imageModal="true" addClass="modal-xl">
      <template v-slot:image-modal>
        <img :src="image" alt="" class="w-75 img-fluid">
        <p class="text-white p-4 w-75 mx-auto" :style="`background: ${project.color}`">{{ desc }}</p>
      </template>
    </modal>

  </div>

</template>

<script>
import Modal from "../components/Modal";
import projects from "../projects";
import icons from "../icons";

export default {
  name: 'Project',
  components: {Modal},
  data() {
    return {
      project: [],
      icons: [],
      image: '',
      desc: ''
    }
  },
  mounted() {
    this.project = projects.find(project => {
      this.icons = []
      project.categories.forEach(category => {
        this.icons.push(icons.find(icon => icon.name === category))
      })
      return project.slug === this.$route.params.slug
    })
  },
  methods: {
    showImage(image, desc) {
      this.image = image
      this.desc = desc
      this.$refs.imageModal.show()
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.divider {
  width: 100%;
  height: 50px;
}

.project-banner {
  width: 100%;
  height: auto;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
}

.project-details {
  transform: translateY(-50px);
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
}

.image {
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
}

.disclaimer {
  right: 10px;
  bottom: 0;
}
</style>
