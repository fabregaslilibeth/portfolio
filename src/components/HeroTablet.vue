<template>
  <div
    class="text-primary"
    :style="`background: url('./../../../port/src/assets/backgrounds/hero-tablet-background.png') bottom center no-repeat; background-size: 100%;`"
  >
    <div class="h-screen flex items-start justify-center">
      <div class="pt-48">
        <h2 class="text-5xl text-center font-sans font-extrabold">
          LILIBETH FABREGAS
        </h2>
        <div class="text-2xl uppercase text-center">
          <p class="mb-2">CPA. Web Developer.</p>
        </div>
        <div class="cursor-pointer w-48 mx-auto">
          <download-cv />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DownloadCv from "./Download.vue";
</script>
