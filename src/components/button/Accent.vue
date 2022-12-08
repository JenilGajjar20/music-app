<template>
  <button class="bg-red-800 btn">{{ title }}</button>
</template>

<script>
export default {
  name: "AccentButton",
  props: {
    title: String,
  },
};
</script>
