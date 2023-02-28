<template>
  <div>
    <button
      class="px-4 py-2 duration-300 shadow-buttonNormal hover:shadow-buttonHover flex items-center font-semibold uppercase tracking-wider"
      @click="openCv()"
    >
      Download CV <icons-download />
    </button>
  </div>
</template>

<script setup lang="ts">
import IconsDownload from "./icons/download.vue";

const openCv = () => {
  window.open("https://fabregaslilibeth.github.io/portfolio/src/assets/resume/Lilibeth%20Fabregas.pdf");
};
</script>

