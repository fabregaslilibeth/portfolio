<template>
  <div :class="classes">
    <div class="ml-4">
      <div class="flex space-x-3 items-center my-4">
        <icons-bullet />
        <div>
          <p class="text-accent font-extrabold md:text-xl">
            Web Development Bootcamp
          </p>
          <p class="md:font-semibold md:text-md">Zuitt Makati</p>
          <p class="md:font-semibold md:text-md">Aug 2022 - Jan 2023</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  // project: Object,
  classes: String,
});
</script>
