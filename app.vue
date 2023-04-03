<template>
  <div>
    <div>
      <div class="flex justify-center items-center mx-auto gap-x-8 md:flex-row flex-col">
        <!-- nav ul ->Home Coun   using tailwindcss-->
        <ul class="flex justify-center">
          <li v-for="item in items" :key="item.link" class="mx-2 mt-2">
            <NuxtLink
              :to="`${item.link}`"
              class="font-extrabold hover:underline-offset-2 hover:underline"
            >
              {{ item.navitem }}</NuxtLink
            >
          </li>
        </ul>

        <div>
          <ColorModePicker />
        </div>
      </div>
    </div>
    <div class="my-2">
      <NuxtPage />
    </div>

    <!-- div footer  developed by francis with  love-->
    <div class="py-6 text-white bottom-1 w-full inset-x-0">
      <div class="text-green-50 p-4">
        <div class="container mx-auto flex justify-end items-center md:flex-row flex-col">
          <!-- social limks with tailwindcss -->
          <ul class="flex justify-center">
            <li class="mx-2">
              <a href="#" class="hover:text-green-400">
                <!-- fb -->
                <Icon name="uil:facebook" class="h-10 w-10 text-white" />
              </a>
            </li>
            <li class="mx-2">
              <a href="#" class="hover:text-green-400">
                <!-- twitter -->
                <Icon name="uil:twitter-alt" class="h-10 w-10 text-white" />
              </a>
            </li>

            <li class="mx-2">
              <a href="#" class="hover:text-green-400">
                <!-- github -->
                <Icon name="uil:github" class="h-10 w-10 text-white" />
              </a>
            </li>
          </ul>
          <p class="text-base text-white">Made with 💖 by Francis Mwaniki &copy; 2023</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ColorModePicker from "~~/components/colorModePicker.vue";

const items = [
  {
    navitem: "Continents",
    link: "/",
  },
  {
    navitem: "Countries",
    link: "/Countries",
  },
  {
    navitem: "Cities",
    link: "Cities/",
  },
];
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&family=Space+Mono&display=swap");

* {
  font-size: medium;
  font-family: "Space Mono", monospace;
}
</style>
