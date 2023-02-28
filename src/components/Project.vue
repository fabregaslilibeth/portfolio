<template>
  <div
    class="h-full relative project-group cursor-pointer shadow-simple rounded-sm"
  >
    <div
      v-if="project.name === 'Moshi Ramen'"
      class="w-full h-full moshi"
    ></div>
    <div v-if="project.name === 'Get Inked'" class="w-full h-full inked"></div>
    <div v-if="project.name === 'Organic'" class="w-full h-full organic"></div>
    <div
      v-if="project.name === 'Minigram'"
      class="w-full h-full minigram"
    ></div>
    <div v-if="project.name === 'Spendee'" class="w-full h-full spendee"></div>
    <div v-if="project.name === 'Good Rock'" class="w-full h-full recipe"></div>

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
  top: 0px;
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
  top: 0px;
  height: 100%;
  opacity: 100%;
}

.project-group:hover .project-description {
  opacity: 100%;
}

.moshi {
  background: url("@/assets/project-thumbnails/thumbnail-moshi.webp") center
    no-repeat;
  background-size: cover;
}

.inked {
  background: url("@/assets/project-thumbnails/thumbnail-getinked.webp") top
    right no-repeat;
  background-size: cover;
}

.organic {
  background: url("@/assets/project-thumbnails/thumbnail-organic.webp") top
    right no-repeat;
  background-size: cover;
}

.spendee {
  background: url("@/assets/project-thumbnails/thumbnail-spendee.webp") top
    right no-repeat;
  background-size: cover;
}

.minigram {
  background: url("@/assets/project-thumbnails/thumbnail-mini.webp") top right
    no-repeat;
  background-size: cover;
}

.recipe {
  background: url("@/assets/project-thumbnails/thumbnail-recipe.webp") top right
    no-repeat;
  background-size: cover;
}
</style>
