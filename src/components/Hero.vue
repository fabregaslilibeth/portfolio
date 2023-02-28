<template>
  <div class="text-primary">
    <div class="flex justify-between w-full">
      <div class="w-5/12 h-192 hero"></div>
      <div class="w-7/12">
        <div class="flex items-center justify-center h-192 pr-32">
          <div>
            <h2 class="text-7xl font-sans font-extrabold">LILIBETH FABREGAS</h2>
            <div class="my-8 text-5xl tracking-wider uppercase">
              <p class="mb-2">CPA. Web Developer.</p>
            </div>
            <div class="cursor-pointer">
              <download-cv />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DownloadCv from "./Download.vue";
</script>

<style scoped>
.hero {
  background: url("@/assets/backgrounds/hero-desktop-background.png") center
    right no-repeat;
  background-size: cover;
}
</style>
