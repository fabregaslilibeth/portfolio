<template>
  <div class="flex bg-background">
    <div
      class="relative w-auto my-4 cursor-pointer mx-auto btn-group"
      @click="slideTo('home')"
    >
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center nav-icon duration-200"
        :class="nav === 'home' ? 'bg-accent' : 'bg-navitem'"
      >
        <icons-home />
      </div>
    </div>

    <div
      class="relative my-4 cursor-pointer mx-auto btn-group"
      @click="slideTo('about')"
    >
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center nav-icon duration-200"
        :class="nav === 'about' ? 'bg-accent' : 'bg-navitem'"
      >
        <icons-about />
      </div>
    </div>

    <div
      class="relative my-4 cursor-pointer mx-auto btn-group"
      @click="slideTo('projects')"
    >
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center nav-icon duration-200"
        :class="nav === 'projects' ? 'bg-accent' : 'bg-navitem'"
      >
        <icons-projects />
      </div>
    </div>

    <div
      class="relative my-4 cursor-pointer mx-auto btn-group"
      @click="slideTo('skills')"
    >
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center nav-icon duration-200"
        :class="nav === 'skills' ? 'bg-accent' : 'bg-navitem'"
      >
        <icons-skills />
      </div>
    </div>

    <div
      class="relative my-4 cursor-pointer mx-auto btn-group"
      @click="slideTo('contact')"
    >
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center nav-icon duration-200"
        :class="nav === 'contact' ? 'bg-accent' : 'bg-navitem'"
      >
        <icons-contact />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import IconsHome from "./icons/home.vue";
import IconsAbout from "./icons/about.vue";
import IconsProjects from "./icons/projects.vue";
import IconsSkills from "./icons/skills.vue";
import IconsContact from "./icons/contact.vue";
import { useNavStore } from "@/stores/nav";

const navStore = useNavStore();
const { nav } = storeToRefs(navStore);

const slideTo = (section: string) => {
  const element = document.getElementById(section);
  const top = element?.offsetTop;
  navStore.slideToSection(top);
};
</script>

<style scoped>
.nav-icon {
  background-size: 200% 100%;
  background-position: left bottom;
  transition: background-color 300ms cubic-bezier(1, 0.02, 0.35, 1);
}
.btn-group:hover .nav-icon {
  background: #ffae00;
}
</style>
