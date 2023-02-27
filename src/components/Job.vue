<template>
  <div :class="classes">
    <p class="text-accent font-extrabold md:text-xl">Full stack Developer</p>
    <p class="md:font-semibold md:text-md">Acquire BPO</p>
    <p class="md:font-semibold md:text-md">Aug 2022 - Jan 2023</p>
    <div class="ml-4">
      <div class="flex space-x-3 items-center my-4">
        <div class="shrink-0"><icons-bullet /></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          aperiam fugit saepe natus. Quas nam ipsa eum error aut minus.
        </p>
      </div>
      <div class="flex space-x-3 items-center my-4">
        <div class="shrink-0"><icons-bullet /></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          aperiam fugit saepe natus. Quas nam ipsa eum error aut minus.
        </p>
      </div>
      <div class="flex space-x-3 items-center my-4">
        <div class="shrink-0"><icons-bullet /></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          aperiam fugit saepe natus. Quas nam ipsa eum error aut minus. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto
          accusantium repudiandae consectetur veniam saepe, itaque, aliquid ut
          magnam nisi sit minima exercitationem quo rerum fugiat aspernatur
          ducimus dolorum sapiente?
        </p>
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
