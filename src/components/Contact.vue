<template>
  <div class="py-20">
    <div class="text-5xl text-primary uppercase text-center">Contact me</div>

    <div class="md:flex w-full">
      <div
        class="w-full md:w-6/12 lg:w-7/12 mx-auto pt-8 pb-4 order-last text-center"
      >
        <form @submit.prevent="submit">
          <div>
            <input
              type="text"
              v-model="name"
              class="w-11/12 md:w-9/12 bg-white rounded-full py-2 px-3 border-2 border-background duration-200 focus:border-accent focus:ring-none focus:outline-none shadow-input"
              placeholder="Your Name/Company (Required)"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="email"
              class="my-4 w-11/12 md:w-9/12 bg-white rounded-full py-2 px-3 border-2 border-background duration-200 focus:border-accent focus:ring-none focus:outline-none shadow-input"
              placeholder="Your Email (Required)"
            />
          </div>
          <div>
            <textarea
              type="text"
              v-model="message"
              class="w-11/12 md:w-9/12 h-48 bg-white rounded-xl py-2 px-3 border-2 border-background duration-200 focus:border-accent focus:ring-none focus:outline-none shadow-input"
              placeholder="Your Message (Required)"
            />
          </div>
          <div class="text-center font-extrabold">
            <div v-if="status === 200" class="text-green-600 py-8">
              <p>
                Thank you for reaching out. I'll get back to you immediately.
              </p>
            </div>
            <div v-if="status === 200" class="text-red-500 py-8">
              <p>Something went wrong. I did not receive your message.</p>
              <p>
                Please email me instead at fabregaslilibeth@gmail.com or click
                <a
                  href="mailto:fabregaslilibeth@gmail.com"
                  target="_blank"
                  class="underline"
                  >this</a
                >.
              </p>
              <p>Sorry for the inconvenience.</p>
            </div>
          </div>
          <div class="w-9/12 mx-auto my-8 text-prima  ry">
            <button
              type="submit"
              :disabled="canSend()"
              class="px-4 py-2 duration-300 flex items-center font-semibold uppercase tracking-wider"
              :class="
                name && email && message
                  ? 'shadow-buttonNormal hover:shadow-buttonHover cursor-pointer'
                  : 'shadow-buttonHover cursor-not-allowed'
              "
            >
              Send <icons-arrow-right />
            </button>
          </div>
        </form>
      </div>

      <div class="w-10/12 md:w-5/12 mx-auto">
        <div class="w-full md:w-9/12 lg:w-7/12 md:ml-auto">
          <div class="my-6 mx-auto">
            <p class="italic pb-2 text-xs">Email me at:</p>
            <div class="flex items-center hover-icon">
              <icons-email />
              <span class="ml-4">
                <a href="mailto:fabregaslilibeth@gmail.com" target="_blank"
                  >fabregaslilibeth@gmail.com</a
                ></span
              >
            </div>
          </div>

          <div class="my-6">
            <p class="italic pb-2 text-xs">
              Call or text me (preferably text first)
            </p>
            <div class="flex items-center hover-icon">
              <icons-phone />
              <span class="ml-4"> +63 930 130 6506 </span>
            </div>
          </div>

          <div class="my-6">
            <p class="italic pb-2 text-xs">Be my linked connection</p>
            <div class="flex items-center hover-icon">
              <icons-linkedin />

              <span class="ml-4">
                <a
                  href="https://www.linkedin.com/in/lilibeth-fabregas-bb0a0a120/"
                  target="_blank"
                  >Lilibeth Fabregas</a
                ></span
              >
            </div>
          </div>
          <div class="flex space-x-12">
            <div class="my-6">
              <p class="italic pb-2 text-xs">Watch my demos</p>
              <a
                href="https://www.youtube.com/channel/UCAsYo-w1L1zd0L8M6Zdk0Zg"
                target="_blank"
              >
                <div class="flex items-center hover-icon">
                  <icons-youtube />
                  <span class="ml-4">bethfab</span>
                </div>
              </a>
            </div>

            <div class="my-6">
              <p class="italic pb-2 text-xs">See how I code</p>
              <div class="flex items-center space-x-5">
                <a
                  href="https://github.com/fabregaslilibeth"
                  target="_blank"
                  class="hover-icon"
                >
                  <icons-github
                /></a>
                <a
                  href="https://gitlab.com/lilibethfabregas"
                  target="_blank"
                  class="hover-icon"
                >
                  <icons-gitlab />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "emailjs-com";

import IconsPhone from "../components/icons/phone.vue";
import IconsArrowRight from "./icons/arrowright.vue";
import IconsYoutube from "../components/icons/youtube.vue";
import IconsGitlab from "../components/icons/gitlab.vue";
import IconsGithub from "../components/icons/github.vue";
import IconsEmail from "../components/icons/email.vue";
import IconsLinkedin from "../components/icons/linkedin.vue";

const name = ref("");
const email = ref("");
const message = ref("");
const status = ref(0);

const canSend = () => {
  return !name.value || !email.value || !message.value;
};

const submit = () => {
  const templateParams = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  try {
    emailjs
      .send(
        "service_5l0ma11",
        "template_rke8zts",
        templateParams,
        "QgI_Fu6QKI6Jeoq4G"
      )
      .then(
        function (response) {
          if (response.status === 200) {
            status.value = 200;
          } else {
            status.value = 500;
          }
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  } catch (error) {
    console.log({ error });
  }
};
</script>

<style scoped>
.disabled-btn {
  border: 2px solid gray;
  cursor: not-allowed;
}

.hover-icon {
  filter: grayscale(100%);
  transition-duration: 300ms;
}

.hover-icon:hover {
  filter: grayscale(0%);
}
</style>
