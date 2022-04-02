<template>
  <div
    class="
      bg-green-500
      h-20
      flex
      items-center
      justify-around
      text-white
      font-bold
    "
  >
    <h2 class="text-2xl font-mono">Music App</h2>
    <div class="space-x-3 text-2xl">
      <a
        href="https://github.com/JenilGajjar20"
        target="_blank"
        class="hover:text-gray-600"
      >
        <span class="mdi mdi-github"></span>
      </a>
      <a
        href="https://www.linkedin.com/in/jenil-gajjar-27934920a/"
        target="_blank"
        class="hover:text-blue-800"
      >
        <span class="mdi mdi-linkedin"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>