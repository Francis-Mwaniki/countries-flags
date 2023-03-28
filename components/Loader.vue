<template>
  <div>
    <!-- Larger animate loader for mounting with v-if=mounting -->
    <div
      v-if="loading"
      class="flex justify-center items-center fixed inset-0 mx-auto bg-black bg-opacity-50 z-50"
    >
      <div class="">
        <img src="@/assets/img/load.gif" alt="Logo" class="object-cover h-32 w-32" />
        <!-- Loading... -->
        <p class="flex justify-center items-center mx-auto gap-y-2 flex-col">
          <span>it's loading.....</span>
          <span>Hold on!</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loading"],
  data() {
    return {};
  },
};
</script>

<style scoped></style>
