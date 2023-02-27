<template>
  <div class="pt-32 relative">
    <div class="text-5xl text-primary text-center uppercase">Skills</div>
    <div class="w-10/12 mx-auto md:flex mt-4 space-y-4 md:space-y-0">
      <div
        v-for="(cat, index) in categories"
        :key="index"
        class="w-full md:w-1/3 text-primary"
      >
        <p class="font-extrabold uppercase">
          {{ cat }}
        </p>
        <div class="flex flex-wrap justify-center">
          <div
            v-for="(skill, i) in getSkills(cat)"
            :key="i"
            class="mr-6 sm:mr-2 mb-8 duration-300"
          >
            <div
              class="w-10 h-10 sm:w-20 sm:h-20 rounded-xl shadow-xl sm:bg-white flex items-center justify-center sm:custom-grayscale duration-300 relative cursor-pointer"
            >
              <div
                class="px-2 py-0.5 bg-gray-300 absolute -bottom-4 rounded-full shadow-md uppercase font-semibold"
              >
                <p class="text-xxs sm:text-xs">{{ skill.name }}</p>
              </div>
              <img
                :src="`./../assets/skills/${skill.name}.png`"
                :alt="`${skill.name} LOGO`"
                class="skill-logo absolute top-1/2 -translate-y-1/2 transform w-10/12 mb-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = ["Development", "Tools", "CMS"];

const skills = [
  {
    name: "laravel",
    category: "development",
  },
  {
    name: "php",
    category: "development",
  },
  {
    name: "mongodb",
    category: "development",
  },
  {
    name: "mysql",
    category: "development",
  },
  {
    name: "react",
    category: "development",
  },
  {
    name: "javascript",
    category: "development",
  },
  {
    name: "node",
    category: "development",
  },
  {
    name: "tailwindcss",
    category: "development",
  },
  {
    name: "vue",
    category: "development",
  },
  {
    name: "bootstrap",
    category: "development",
  },
  {
    name: "sass",
    category: "development",
  },
  {
    name: "typescript",
    category: "development",
  },

  {
    name: "github",
    category: "tools",
  },
  {
    name: "gitlab",
    category: "tools",
  },
  {
    name: "jira",
    category: "tools",
  },
  {
    name: "figma",
    category: "tools",
  },
  {
    name: "phpstorm",
    category: "tools",
  },
  {
    name: "vscode",
    category: "tools",
  },
  {
    name: "shopify",
    category: "cms",
  },
  {
    name: "wordpress",
    category: "cms",
  },
  {
    name: "nova",
    category: "cms",
  },
  {
    name: "directus",
    category: "cms",
  },
  {
    name: "statamic",
    category: "cms",
  },
];

const getSkills = (cat: string) => {
  return skills.filter((sk) => sk.category === cat.toLowerCase());
};
</script>

<style scoped>
.custom-grayscale {
  filter: grayscale(100%);
}

.custom-grayscale:hover {
  filter: grayscale(0%);
}
</style>
