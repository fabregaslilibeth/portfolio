<template>
  <div
    class="h-full relative project-group cursor-pointer shadow-simple rounded-sm"
  >
    <div
      class="w-full h-full"
      :style="`background: url('./../assets/project-thumbnails/${project.thumbnail}.png') center center no-repeat; background-size: cover;`"
    ></div>
    <div class="project-overlay absolute bg-white">
      <div class="text-gray-700 p-4 project-description">
        <div class="flex justify-between items-center">
          <p class="font-extrabold uppercase">{{ project.name }}</p>
          <div class="flex space-x-3 items-center">
            <div>
              <a :href="project.demo" target="_blank"><icons-youtube /></a>
            </div>
            <div v-if="project.codeIcon === 'gitlab'">
              <a :href="project.code" target="_blank"><icons-gitlab /></a>
            </div>
            <div v-if="project.codeIcon === 'github'">
              <a :href="project.code" target="_blank"><icons-github /></a>
            </div>
          </div>
        </div>

        <div class="flex space-x-2 my-2 ml-2">
          <div
            v-for="(skill, index) in project.categories"
            :key="index"
            class="bg-accent px-2 py-1 rounded-full text-xxs uppercase tracking-wider font-semibold"
          >
            {{ skill }}
          </div>
        </div>
        <p class="text-xs">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconsYoutube from "./icons/youtube.vue";
import IconsGitlab from "./icons/gitlab.vue";
import IconsGithub from "./icons/github.vue";
defineProps({
  project: {
    type: Object,
    required: true,
  },
  classes: String,
});
</script>

<style scoped>
.project-overlay {
  top: -10px;
  height: 0;
  width: 100%;
  transition-property: height;
  transition-duration: 300ms;
}

.project-description {
  opacity: 0;
  transition-duration: 300ms;
  transition-delay: 200ms;
}
.project-group:hover .project-overlay {
  top: 0;
  height: 100%;
  opacity: 100%;
}

.project-group:hover .project-description {
  opacity: 100%;
}
</style>
