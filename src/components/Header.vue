<template>
  <div class="header">
    <h2 class="header-title">Music App</h2>
    <div class="header-icons">
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