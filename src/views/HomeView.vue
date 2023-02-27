<template>
  <main class="relative" id="aaa">
    <section id="home">
      <!-- up to 639 -->
      <div class="sm:hidden"><HeroMobile /></div>

      <!-- 640 up to 1023 -->
      <div class="hidden sm:inline-block lg:hidden w-full">
        <HeroTablet />
      </div>

      <div class="hidden lg:inline-block w-full">
        <Hero />
      </div>
    </section>

    <section id="about" class="about-section">
      <About />
    </section>

    <section id="projects"><Projects /></section>

    <div
      :style="`background: url('./../../../port/src/assets/backgrounds/contact-container-purple.png') top left no-repeat; background-size: 110%`"
    >
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </div>
    <div class="fixed z-50 right-8 top-72 hidden lg:inline-block">
      <Nav />
    </div>
    <div class="fixed z-50 bottom-0 left-0 right-0 h-20 lg:hidden bg-white">
      <Nav />
    </div>
    <Footer />
    <div
      class="bg-accent w-2 h-full absolute right-0 bottom-0 side-accent"
    ></div>
  </main>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, onMounted } from "vue";
import { useNav } from "../composables/nav.js";

import Nav from "../components/Nav.vue";
import HeroMobile from "../components/HeroMobile.vue";
import HeroTablet from "../components/HeroTablet.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

const { navStore } = useNav(); // text reveal && nav

const observer = ref();
const element = ref(null);
onBeforeMount(() => {
  element.value = document.getElementById("aaa");
  observer.value = new IntersectionObserver(onElementObserved, {
    root: element.value,
    threshold: 0.22,
  });
});

onMounted(() => {
  const sections = document.querySelectorAll("section[id]");

  sections.forEach((section) => {
    return observer.value.observe(section);
  });
});

const onElementObserved = (entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    const id = target.getAttribute("id");
    if (isIntersecting) {
      navStore.setNav(id);
    } else {
      // element.value
      //   .querySelector(`nav li a[href="#${id}"]`)
      //   .parentElement.classList.remove("active");
    }
  });
};
</script>

<style>
.about-section {
  background: url("./../../../port/src/assets/backgrounds/about-container-purple.png")
    bottom center no-repeat;
  background-size: 100%;
}

@media only screen and (min-width: 1024px) {
  .about-section {
    background: url("./../../../port/src/assets/backgrounds/about-container-purple-with-beth.png")
      bottom center no-repeat;
    background-size: 100%;
  }
}
</style>
