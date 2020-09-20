<template>
  <div class="container mx-auto">
<!--    <div class="position-fixed" style="left: 100px; top: 100px; z-index: 99;" @click="back"><i class="fas fa-arrow-left mr-2"></i>Back</div>-->
    <div class="project-details position-relative col-12 mx-auto p-4 bg-white">
      <h3 class="project-name font-weight-bolder text-uppercase">{{ project.name }}</h3>
      <h5><small>{{ project.description }}</small></h5>
      <div>
        <small v-for="icon in icons" :key="icon">
          <img :src="icon.icon" alt="" class="icon">
          {{ icon.name }}
        </small>
      </div>

      <div class="btn-group col-md-4 m-md-4 " role="group">
        <a :href="project.code" target="_blank" class="btn custom-btn">
          <i class="fas fa-code mr-2" title="view code"></i><small class="d-none d-md-inline-block">View Code</small>
        </a>
        <a :href="project.live" target="_blank" class="btn custom-btn">
          <i class="fas fa-globe-europe mr-2" title="visit site"></i><small class="d-none d-md-inline-block">Visit Site</small>
        </a>
      </div>

      <p class="position-absolute disclaimer d-none d-md-inline-block"><i class="fas fa-info-circle mr-2 text-secondary" title="All images used in this site are not mine."></i></p>

    </div>

    <div class="divider px-4 py-2">
      <h3 class="text-left sub-header font-weight-bolder" style="color: #1E3033">Demo</h3>
    </div>

    <div class="demo px-sm-1 py-4 px-md-4" v-for="video in project.demo" :key="video">
      <iframe :src="`${video}&rel=0`" allowfullscreen></iframe>
    </div>

    <div class="divider px-4 py-2">
      <h3 class="text-left sub-header font-weight-bolder"  style="color: #1E3033">Pages & Features</h3>
    </div>
    <div class="features">
      <ol class="p-4">
          <span v-for="(feature, index) in project.features" :key="index">
              <hr :style="`background: ${project.color}50`">
           <span v-if="index%2" class="row align-items-center">
              <li class="col-12 col-md-6 my-2">{{ feature.desc }}</li>
              <p class="col-12 col-md-6 my-2 feature-image">
                <img :src="feature.image2" class="image" alt="" @click.prevent="showImage(feature.image2, feature.desc)">
              </p>
           </span>
           <span v-else class="row align-items-center even-projects">
             <p class="col-12 col-md-6 my-2 feature-image"><img :src="feature.image2" class="image" alt=""
                                                  @click.prevent="showImage(feature.image2, feature.desc)"></p>
             <li class="col-12 col-md-6 my-2 feature-desc">{{ feature.desc }}</li>
           </span>

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
import skills from "../skills";

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
        this.icons.push(skills.find(icon => icon.name === category))
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
.project-name {
  padding-top: 50px;
}

.divider {
  width: 100%;
  height: 50px;
}

.icon {
  width: 30px;
  margin: 10px;
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

.feature-image {
  cursor: zoom-in;
}

.image {
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  width: 75%;
}

.disclaimer {
  right: 10px;
  bottom: 0;
}

.demo iframe {
  width: 560px;
  height: 315px;
}


ol {
  list-style: none;
  counter-reset: procedure-counter;
}

ol hr {
  counter-increment: procedure-counter;
  position: relative;
}

ol hr::after {
  content: counter(procedure-counter);
  width: 40px;
  height: 40px;
  background: rgba(128, 128, 128, .2);
  border-radius: 100%;
  font-size: 1.5rem;
  position: absolute;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  top: -20px;
  left: -40px;
  color: #1E3033;
}

ol span:nth-child(2n) hr::after {
  left: unset !important;
  right: -40px !important;
}


@media (max-width: 768px) {
  .demo iframe {
    width: 350px;
    height: 230px;
  }

  .even-projects .feature-image {
    order: 2;
    display: flex;
  }

  .even-projects .feature-desc {
    order: 1;
    display: flex;
  }

  .image {
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: auto;
  }
}

@media (max-width: 425px) {
  .demo iframe {
    width: 280px;
    height: 164px;
  }
}
</style>
