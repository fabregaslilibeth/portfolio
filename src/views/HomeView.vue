<template>
  <main class="relative" id="homeview">
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

    <div class="contact-section">
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
const element = ref(HTMLElement);
onBeforeMount(() => {
  // @ts-ignore
  element.value = document.getElementById("homeview")!;
  observer.value = new IntersectionObserver(onElementObserved, {
    // @ts-ignore
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

const onElementObserved = (entries: Array<IntersectionObserverEntry>) => {
  entries.forEach(({ target, isIntersecting }) => {
    const id = target.getAttribute("id") as string;
    if (isIntersecting) {
      navStore.setNav(id);
    }
  });
};
</script>

<style>
.about-section {
  background: url("@/assets/backgrounds/about-container.webp") bottom center
    no-repeat;
  background-size: 100%;
}

.contact-section {
  background: url("@/assets/backgrounds/contact-container-purple.webp") top left
    no-repeat;
  background-size: 110%;
}
@media only screen and (min-width: 1024px) {
  .about-section {
    background: url("@/assets/backgrounds/about-container-purple-with-beth.webp")
      bottom center no-repeat;
    background-size: 100%;
  }
}
</style>
