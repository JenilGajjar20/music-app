<template>
  <div class="bg-primary-500 text-base py-1 px-2 w-fit rounded-lg">
    <p>{{ songYear }}</p>
  </div>
</template>

<script>
export default {
  name: "BadgeComp",
  props: {
    songYear: Number,
  },
};
</script>
