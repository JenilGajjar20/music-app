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
        v-for="(link, index) in links"
        :key="index"
        :href="link.link"
        target="_blank"
        :class="`hover:text-${link.class}`"
      >
        <span :class="`mdi mdi-${link.icon}`"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  data() {
    return {
      links: [
        {
          name: "Github",
          icon: "github",
          link: "https://github.com/JenilGajjar20",
          class: "gray-600",
        },
        {
          name: "Linkedin",
          icon: "linkedin",
          link: "https://www.linkedin.com/in/jenil-gajjar-27934920a/",
          class: "blue-800",
        },
      ],
    };
  },
};
</script>