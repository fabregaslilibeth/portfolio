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
              class="w-10 h-10 sm:w-20 sm:h-20 rounded-xl shadow-xl sm:bg-white flex items-center justify-center duration-300 relative cursor-pointer"
            >
              <div
                class="px-2 py-0.5 bg-gray-300 absolute -bottom-4 rounded-full shadow-md uppercase font-semibold"
              >
                <p class="text-xxs sm:text-xs">{{ skill.name }}</p>
              </div>
              <div
                class="w-10 h-10 sm:custom-grayscale grayscale"
                :class="skill.name"
              ></div>
              <!-- 
                This one builds and compiles image
                <img
                src="@/assets/skills/directus.png"
                :alt="`${skill.name} LOGO`"
                class="skill-logo absolute top-1/2 -translate-y-1/2 transform w-10/12 mb-8"
              /> -->
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
    image: "./../../../port/src/assets/skills/laravel.png",
  },
  {
    name: "php",
    category: "development",
    image: "@/assets/skills/php.png",
  },
  {
    name: "mongodb",
    category: "development",
    image: "./../assets/skills/mongodb.png",
  },
  {
    name: "mysql",
    category: "development",
    image: "./../assets/skills/mysql.png",
  },
  {
    name: "react",
    category: "development",
    image: "./../assets/skills/react.png",
  },
  {
    name: "javascript",
    category: "development",
    image: "./../assets/skills/javascript.png",
  },
  {
    name: "node",
    category: "development",
    image: "./../assets/skills/node.png",
  },
  {
    name: "tailwindcss",
    category: "development",
    image: "./../assets/skills/tailwindcss.png",
  },
  {
    name: "vue",
    category: "development",
    image: "./../assets/skills/vue.png",
  },
  {
    name: "bootstrap",
    category: "development",
    image: "./../assets/skills/bootstrap.png",
  },
  {
    name: "sass",
    category: "development",
    image: "./../assets/skills/sass.png",
  },
  {
    name: "typescript",
    category: "development",
    image: "./../assets/skills/typescript.png",
  },

  {
    name: "github",
    category: "tools",
    image: "./../assets/skills/github.png",
  },
  {
    name: "gitlab",
    category: "tools",
    image: "./../assets/skills/gitlab.png",
  },
  {
    name: "jira",
    category: "tools",
    image: "./../assets/skills/jira.png",
  },
  {
    name: "figma",
    category: "tools",
    image: "./../assets/skills/figma.png",
  },
  {
    name: "phpstorm",
    category: "tools",
    image: "./../assets/skills/phpstorm.png",
  },
  {
    name: "vscode",
    category: "tools",
    image: "./../assets/skills/vscode.png",
  },
  {
    name: "shopify",
    category: "cms",
    image: "./../assets/skills/shopify.png",
  },
  {
    name: "wordpress",
    category: "cms",
    image: "./../assets/skills/wordpress.png",
  },
  {
    name: "nova",
    category: "cms",
    image: "./../assets/skills/nova.png",
  },
  {
    name: "directus",
    category: "cms",
    image: "./../assets/skills/directus.png",
  },
  {
    name: "statamic",
    category: "cms",
    image: "./../assets/skills/statamic.png",
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

.laravel {
  background: url("@/assets/skills/laravel.png") center no-repeat;
  background-size: 100%;
}

.php {
  background: url("@/assets/skills/php.png") center no-repeat;
  background-size: 100%;
}

.mongodb {
  background: url("@/assets/skills/mongodb.png") center no-repeat;
  background-size: 100%;
}

.mysql {
  background: url("@/assets/skills/mysql.png") center no-repeat;
  background-size: 100%;
}

.react {
  background: url("@/assets/skills/react.png") center no-repeat;
  background-size: 100%;
}

.javascript {
  background: url("@/assets/skills/javascript.png") center no-repeat;
  background-size: 100%;
}
.tailwindcss {
  background: url("@/assets/skills/tailwindcss.png") center no-repeat;
  background-size: 100%;
}

.vue {
  background: url("@/assets/skills/vue.png") center no-repeat;
  background-size: 100%;
}

.bootstrap {
  background: url("@/assets/skills/bootstrap.png") center no-repeat;
  background-size: 100%;
}

.sass {
  background: url("@/assets/skills/sass.png") center no-repeat;
  background-size: 100%;
}

.typescript {
  background: url("@/assets/skills/typescript.png") center no-repeat;
  background-size: 100%;
}
.node {
  background: url("@/assets/skills/node.png") center no-repeat;
  background-size: 100%;
}

.github {
  background: url("@/assets/skills/github.png") center no-repeat;
  background-size: 100%;
}

.gitlab {
  background: url("@/assets/skills/gitlab.png") center no-repeat;
  background-size: 100%;
}

.jira {
  background: url("@/assets/skills/jira.png") center no-repeat;
  background-size: 100%;
}

.figma {
  background: url("@/assets/skills/figma.png") center no-repeat;
  background-size: 100%;
}

.phpstorm {
  background: url("@/assets/skills/phpstorm.png") center no-repeat;
  background-size: 100%;
}

.vscode {
  background: url("@/assets/skills/vscode.png") center no-repeat;
  background-size: 100%;
}

.shopify {
  background: url("@/assets/skills/shopify.png") center no-repeat;
  background-size: 100%;
}

.wordpress {
  background: url("@/assets/skills/wordpress.png") center no-repeat;
  background-size: 100%;
}

.nova {
  background: url("@/assets/skills/nova.png") center no-repeat;
  background-size: 100%;
}

.directus {
  background: url("@/assets/skills/directus.png") center no-repeat;
  background-size: 100%;
}

.statamic {
  background: url("@/assets/skills/statamic.png") center no-repeat;
  background-size: 100%;
}
</style>
