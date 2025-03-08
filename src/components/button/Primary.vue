<template>
  <button class="bg-primary-700 btn">{{ title }}</button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    title: String,
  },
};
</script>
