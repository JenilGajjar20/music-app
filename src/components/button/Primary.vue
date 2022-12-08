<template>
  <button class="bg-orange-600 btn">{{ title }}</button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    title: String,
  },
};
</script>
