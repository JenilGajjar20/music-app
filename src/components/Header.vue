<template>
  <div class="header" :class="{ 'bg-white': lightMode }">
    <h2 class="header-title" :class="{ 'text-primary-500': lightMode }">
      Songify
    </h2>
    <div class="flex items-center space-x-4">
      <div class="header-icons" :class="{ 'text-primary-500': lightMode }">
        <a
          v-for="(link, index) in links"
          :key="index"
          :href="link.link"
          target="_blank"
        >
          <span :class="`mdi mdi-${link.icon}`"></span>
        </a>
      </div>
      <div
        class="relative bg-primary-800 h-5 w-10 rounded-2xl"
        :class="{ 'bg-primary-400': lightMode }"
      >
        <button
          class="absolute bg-white h-5 w-5 rounded-full"
          :class="{ 'right-0': lightMode }"
          @click="lightMode = !lightMode"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  data() {
    return {
      lightMode: false,
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