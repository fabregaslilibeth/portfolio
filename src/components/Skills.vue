<template>
  <div class="col-12">
    <h3>Skills</h3>
    <div class="row justify-content-center">
        <div class="col-6 col-md-1" v-for="(skill, index) in skills" :key="index">
        <div class="position-relative skill-container m-4 text-left text-white" :style="`background: linear-gradient(${skill.background1}, ${skill.background2})`">
         <div class="skill-cont">
           <small class="p-2">{{ skill.name }}</small>
           <div class="skill-wrapper" :style="`background: linear-gradient(white 50%, ${skill.background4})`">
             <p class="text-center mt-2"><img :src="skill.image" alt="" class="img-fluid"></p>
           </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skills from "../skills";

export default {
  name: "Skills",
  data() {
    return {
      skills: skills
    }
  },
  mounted() {
    this.skills = skills
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.skill-container {
  border-radius: 10px;
  height: 100px;
}

.skill-cont {
  position: relative !important;
  width: 100%;
  height: 100%;
  top: 0;
  background: transparent;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.skill-wrapper {
  position: absolute;
  right: -16px;
  bottom: -4px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: rotate(20deg);
  max-width: 70%;
  max-height: 70%;
  transition: 500ms;
}

.skill-container:hover .skill-wrapper {
  transform: rotate(0deg);
  transition: 500ms;
  max-width: 100%;
  max-height: 100%;
  right: 0;
  bottom: 0;
  border-radius: 10px;
}

</style>