<template>
  <h2 class="title">
    {{ title }}
    (<span>{{ movie }}</span
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
