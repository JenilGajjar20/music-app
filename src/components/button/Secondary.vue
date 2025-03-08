<template>
  <button class="bg-green-600 btn">{{ title }}</button>
</template>

<script>
export default {
  name: "SecondaryButton",
  props: {
    title: String,
  },
};
</script>
