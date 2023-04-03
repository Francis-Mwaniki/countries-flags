<template>
  <div class="">
    <!-- Intro and explore continents and more -->
    <Loader :loading="loading" />
    <div class="flex flex-col justify-center items-center py-6">
      <h1 class="text-4xl font-bold">Welcome to the World</h1>
      <h3 class="text-2xl font-bold">Explore Continents and More</h3>
      <!-- p (tailwindcss) Exploring continents can be a fascinating and exciting experience, as each continent has its own unique culture, history, geography, and natural wonders. Here are some things to consider when planning to explore different continents:-->
      <div
        class="container mx-auto md:max-w-3xl max-w-md py-3 text-2xl italic flex justify-center space-x-2 items-center flex-col"
      >
        <p class="text-green-600">
          "Exploring continents can be a fascinating and exciting experience, as each
          continent has its own unique culture, history, geography, and natural wonders.
          Here are some things to consider when planning to explore different continents:"
        </p>
        <p class="text-lg text-green-600">
          1. "Research the continent: Before embarking on a journey, it's essential to
          research the continent you want to explore thoroughly. You can start by reading
          guidebooks, watching documentaries, or browsing travel websites to learn about
          the culture, customs, language, cuisine, and attractions of the continent."
        </p>
      </div>
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-flow-row justify-center items-center max-w-xl space-x-2 mx-auto gap-2 md:max-w-6xl"
    >
      <div
        class="max-w-md h-36 rounded ring-1 ring-green-600 ring-opacity-50 my-3"
        v-for="continent in continents"
        :key="continent"
      >
        <!-- continent value  and key using tailwindcss-->
        <div
          class="flex justify-center items-center h-full flex-col hover:translate-x-1 hover:transform hover:transition-shadow hover:shadow-lg hover:shadow-slate-50 hover:scale-105 hover:bg-gradient-to-tr from-slate-900 to-green-400 cursor-help"
        >
          <h1 class="text-2xl font-bold">
            {{ continent.value }}
          </h1>
          <!--continent key -->
          <h3 class="text-2xl font-bold">
            {{ continent.key }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
const continents = ref([]);
const loading = ref(true);
const getContinents = async () => {
  try {
    let url = "https://wicked-blue-swallow.cyclic.app/api/continents";
    const response = await fetch(url);
    loading.value = true;
    if (response.ok) {
      const data = await response.json();
      continents.value = data;
      console.log(continents.value);
      setTimeout(() => {
        loading.value = false;
      }, 5000);
    } else {
      loading.value = false;
      let data = await response.json();
      console.log(data);
    }
  } catch (error) {
    loading.value = false;
    let data = await response.json();
    console.log(data);
  }
};
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 4000);
  getContinents();
});
</script>

<style lang="scss" scoped></style>
