<template>
  <main class="bg-primary-500 font-display">
    <!-- Header Component -->
    <Header />

    <!-- Music Player Component -->
    <MusicPlayer />

    <!-- Footer Component -->
    <!-- <Footer /> -->
  </main>
</template>

<script>
import Header from "@/components/Header";
import MusicPlayer from "@/components/MusicPlayer";
// import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    MusicPlayer,
    // Footer
  },
};
</script>
