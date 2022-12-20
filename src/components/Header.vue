<template>
  <div class="header">
    <h2 class="header-title">Songify</h2>
    <div class="header-icons">
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.link"
        target="_blank"
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
        },
        {
          name: "Linkedin",
          icon: "linkedin",
          link: "https://www.linkedin.com/in/jenil-gajjar-27934920a/",
        },
        {
          name: "Twitter",
          icon: "twitter",
          link: "https://twitter.com/gajjar_jenil",
        },
      ],
    };
  },
};
</script>