<template>
  <div class="pt-20 py-12">
    <div class="text-5xl text-primary text-center uppercase">Projects</div>

    <div
      class="flex my-8 w-full md:w-6/12 lg:w-3/12 mx-auto text-primary font-extrabold"
    >
      <div
        class="relative mx-auto group cursor-pointer"
        v-for="(item, index) in navItems"
        :key="index"
        :class="item.class"
      >
        <div
          class="absolute -top-4 -right-4 opacity-0 duration-200 group-hover:opacity-100"
          :class="activeNav === item.name ? 'opacity-100' : 'opacity-0'"
        >
          <icons-nav-highlight />
        </div>
        <div @click="setActiveNav(item.name)" class="uppercase">
          {{ item.name }}
        </div>
      </div>
    </div>

    <div
      class="max-w-screen-lg mx-auto relative my-8 flex justify-center flex-wrap md:grid md:grid-cols-3 md:gap-4"
    >
      <div
        v-for="(project, index) in filteredProjects"
        :key="project.slug"
        :class="getClass(index)"
      >
        <project :project="project"></project>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import IconsNavHighlight from "../components/icons/navhighlight.vue";
import Project from "../components/Project.vue";

// @ts-ignore
import projects from "../../src/assets/js/projects.js";

const navItems = ref([
  {
    name: "All",
    class: "w-8",
  },
  {
    name: "Laravel",
    class: "w-16",
  },
  {
    name: "Vue",
    class: "w-8",
  },
  {
    name: "React",
    class: "w-12",
  },
]);
const activeNav = ref("All");
const filteredProjects = ref([...projects]);

const getClass = (index: number) => {
  if (activeNav.value !== "All") {
    return "md:col-span-1 row-span-1 bg-white text-gray-900 h-72 md:h-52 project";
  } else if ([1].includes(index)) {
    return "md:col-span-2 row-span-1 bg-white text-gray-900 h-72 md:h-52 project";
  } else if ([2, 4].includes(index)) {
    return "md:col-span-1 row-span-2 bg-white text-gray-900 h-72 md:h-108 project";
  } else {
    return "md:col-span-1 row-span-1 bg-white text-gray-900 h-72 md:h-52 project";
  }
};

const setActiveNav = (nav: string) => {
  activeNav.value = nav;
  filter();
};

const filter = () => {
  if (activeNav.value === "All") {
    filteredProjects.value = projects;
    return;
  }

  filteredProjects.value = [];
  // @ts-ignore:
  projects.forEach((project) => {
    if (project.categories.includes(activeNav.value.toLowerCase())) {
      filteredProjects.value.push(project);
    }
  });
};
</script>

<style>
@media screen and (max-width: 767.9px) {
  .project {
    width: 320px;
    margin-bottom: 12px;
    margin-right: 12px;
  }
}
</style>
