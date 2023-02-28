<template>
  <div class="flex space-x-5 justify-center w-full lg:block lg:space-x-0">
    <div
      v-for="(navItem, index) in navList"
      :key="index"
      @click="slideTo(navItem)"
    >
      <div
        class="btn-group w-12 h-12 bg-white rounded-full relative my-4 cursor-pointer"
      >
        <div
          class="nav-label absolute right-0 top-0 bg-primary text-white flex items-center h-full rounded-l-full"
        >
          <p class="px-4 font-extrabold uppercase">{{ navItem }}</p>
        </div>
        <div
          class="bg-white rounded-full w-12 h-12 flex items-center justify-center absolute right-0 top-0"
          :class="
            nav === navItem
              ? 'shadow-buttonHover'
              : 'shadow-buttonNormal hover:shadow-buttonHover'
          "
        >
          <div
            :class="nav === navItem ? 'text-accent' : 'text-primary'"
            v-if="navItem === 'home'"
          >
            <icons-home />
          </div>
          <div
            :class="nav === navItem ? 'text-accent' : 'text-primary'"
            v-if="navItem === 'about'"
          >
            <icons-about />
          </div>
          <div
            :class="nav === navItem ? 'text-accent' : 'text-primary'"
            v-if="navItem === 'projects'"
          >
            <icons-projects />
          </div>
          <div
            :class="nav === navItem ? 'text-accent' : 'text-primary'"
            v-if="navItem === 'skills'"
          >
            <icons-skills />
          </div>
          <div
            :class="nav === navItem ? 'text-accent' : 'text-primary'"
            v-if="navItem === 'contact'"
          >
            <icons-contact />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import IconsHome from "../components/icons/home.vue";
import IconsAbout from "../components/icons/about.vue";
import IconsProjects from "../components/icons/projects.vue";
import IconsSkills from "../components/icons/skills.vue";
import IconsContact from "../components/icons/contact.vue";
import { useNavStore } from "@/stores/nav";

const navStore = useNavStore();
const { nav } = storeToRefs(navStore);

const navList = ["home", "about", "projects", "skills", "contact"];
const slideTo = (section: string) => {
  const element = document.getElementById(section);
  // @ts-ignore
  const top = element.offsetTop;
  navStore.slideToSection(top);
};
</script>

<style scoped>
.nav-label {
  opacity: 0;
  display: none;
}

@media screen and (min-width: 1024px) {
  .nav-label {
    display: flex;
  }
  .btn-group:hover .nav-label {
    right: 20px;
    padding-right: 20px;
    opacity: 100%;
    transition-duration: 300ms;
  }
}
</style>
