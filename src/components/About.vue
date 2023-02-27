<template>
  <div class="pt-20">
    <h1 class="text-5xl text-center uppercase text-primary">About me</h1>
    <div class="relative grid grid-cols-12">
      <div class="w-full h-192 absolute bottom-0 left-0"></div>
      <div class="col-span-4"></div>
      <div
        class="col-span-12 lg:col-span-8 py-12 lg:py-20 text-center lg:text-left mx-4 sm:mx-8 lg:mx-20"
      >
        <div class="mb-12">
          <p class="font-extrabold text-xl uppercase">
            As a Full Stack Developer
          </p>
          <div>
            <p>
              As a Full Stack Web Developer, I bring a unique perspective to my
              work thanks to my previous career in Finance and Accounting.
            </p>
            <p class="mt-4">
              I specialize in building web applications that are related to
              Accounting and Finance, leveraging my expertise to create
              user-friendly tools that meet the needs of businesses in these
              industries.
            </p>
          </div>
        </div>

        <div class="mb-12">
          <p class="font-extrabold text-xl uppercase">As an Accountant</p>
          <div>
            <p>
              My experience in Accounting has taught me the importance of being
              mindful of even the smallest details.
            </p>
            <p class="mt-4">
              I understand that even the slightest error can have a significant
              impact on a company's bottom line, so I always strive for accuracy
              and attention to detail in my work.
            </p>
            <p class="mt-4">
              Additionally, I recognize the importance of staying up-to-date
              with the latest industry regulations, and I make a point to
              continuously educate myself so that I can provide the most
              relevant solutions to my clients.
            </p>
          </div>
        </div>

        <div class="mb-12">
          <p>
            Overall, my background in Accounting has instilled a sense of
            responsibility and diligence in me, which I bring to every project
            that I work on as a Full Stack Web Developer.
          </p>
        </div>

        <!-- <router-link to="/about">
          <div class="cursor-pointer mx-auto w-52 my-8 text-primary">
            <button
              class="px-4 py-2 duration-300 shadow-buttonNormal hover:shadow-buttonHover flex items-center font-semibold uppercase tracking-wider"
            >
              More about me <icons-arrow-right />
            </button>
          </div>
        </router-link> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import IconsArrowRight from "./icons/arrowright.vue";
</script>

<style scoped>
.beth {
  background: linear-gradient(
      0deg,
      rgba(255, 0, 150, 0.3),
      rgba(255, 0, 150, 0.3)
    ),
    url("./../../../port/src/assets/backgrounds/beth.png") bottom left no-repeat;
  background-size: contain;
  filter: grayscale(60%);
  opacity: 80%;
}
</style>
