<template>
  <div class="">
    <Loader :loading="loading" />
    <!-- Intro and explore countries and more -->
    <div class="flex flex-col justify-center items-center py-6">
      <h1 class="text-4xl font-bold">Welcome to the World</h1>
      <h3 class="text-2xl font-bold">Explore countries and More</h3>
    </div>
    <!-- search input -->
    <div class="flex justify-center items-center">
      <input
        type="search"
        class="w-96 h-10 text-black rounded-lg border-2 border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent px-2 bg-green-100"
        @keydown.enter="filteredCountry(search)"
        v-model="search"
        placeholder="Search start with Capital letter then small letter"
      />
      <!-- submit button -->
      <button
        class="bg-green-600 text-white font-bold py-2 px-4 rounded-lg ml-2"
        @click="filteredCountry(search)"
      >
        Search
      </button>
    </div>
    <Loader :loading="loading" />
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-flow-row justify-center items-center max-w-md space-x-2 mx-auto gap-2 md:max-w-6xl"
    >
      <div
        class="max-w-md h-36 rounded ring-1 ring-green-600 ring-opacity-50 my-3"
        v-for="country in countries"
        :key="country.name"
      >
        <!-- continent value  and key using tailwindcss-->
        <div
          class="flex justify-center items-center h-full flex-col hover:translate-x-1 hover:transform hover:transition-shadow hover:shadow-lg hover:shadow-slate-50 hover:scale-105 hover:bg-gradient-to-tr from-slate-900 to-green-400 cursor-help"
        >
          <!-- img flag -->
          <img
            :src="
              `https://flagsapi.com/${country.key}/flat/64.png` ||
              'https://flagsapi.com/BE/flat/64.png'
            "
            class="h-16 w-16 rounded"
            alt="country flag"
          />

          <h1 class="text-md font-bold">
            {{
              country.value.length > 20
                ? country.value.slice(0, 20) + "..."
                : country.value
            }}
          </h1>
          <!--continent key -->
          <h3 class="text-md font-bold flex justify-center items-center mx-auto">
            {{ country.currency_code }}
          </h3>
        </div>
      </div>
    </div>
    <div
      class="bg-yellow-200 border-l-4 border-yellow-500 text-yellow-700 p-4"
      v-show="warn"
      role="alert"
    >
      <p class="font-bold">Warning</p>
      <p>There was a problem with your submission.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
const countries = ref([]);
const search = ref("");
const loading = ref(true);
const warn = ref(true);
const getCountries = async () => {
  try {
    let url = "https://wicked-blue-swallow.cyclic.app/api/country";
    const response = await fetch(url);
    loading.value = true;
    if (response.ok) {
      const data = await response.json();
      countries.value = data[0]["countries"];
      console.log(countries.value);
      setTimeout(() => {
        loading.value = false;
        warn.value = true;
      }, 6000);
    } else {
      loading.value = false;
      let data = await response.json();
      warn.value = true;
      console.log(data);
    }
  } catch (error) {
    loading.value = false;
    warn.value = true;
    let data = await response.json();
    console.log(data);
  }
}; /* search from the database */
async function filteredCountry(query) {
  let url = `https://wicked-blue-swallow.cyclic.app/api/search`;
  /*  let url = "http://localhost:3000/api/search"; */
  loading.value = true;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };
  const response = await fetch(url, options);
  if (response.ok) {
    const data = await response.json();
    countries.value = data;
    console.log(countries.value);
    setTimeout(() => {
      loading.value = false;
    }, 10000);
  } else {
    loading.value = false;
    let data = await response.json();
    warn.value = true;
    console.log(data);
  }
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 4000);
  getCountries();
});
</script>

<style lang="scss" scoped></style>
