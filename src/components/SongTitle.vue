<template>
  <h2
    class="
      text-center
      font-bold
      py-8
      text-xl
      sm:text-2xl
      lg:text-4xl
      text-blue-700
    "
  >
    {{ title }}(<span class="text-blue-900">{{ movie }}</span
    >)
  </h2>
</template>

<script>
export default {
  name: "SongTitle",
  props: {
    title: String,
    movie: String,
  },
};
</script>
