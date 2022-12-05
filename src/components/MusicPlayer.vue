<template>
  <section class="bg-green-300 flex flex-col items-center py-6">
    <SongTitle :title="current.title" :movie="current.movie" />
    <div class="space-x-10 text-white sm:text-xl">
      <button @click="prevSong" class="bg-orange-600 btn">Prev</button>
      <button v-if="!isPlaying" @click="play" class="bg-green-600 btn">
        Play
      </button>
      <button v-else @click="pause" class="bg-red-800 btn">Pause</button>
      <button @click="nextSong" class="bg-orange-600 btn">Next</button>
    </div>
    <div class="flex flex-col justify-center items-center gap-4 py-8">
      <h3 class="py-5 font-bold text-blue-700 text-xl sm:text-2xl lg:text-4xl">
        Songs List
      </h3>
      <div
        class="
          grid grid-cols-1
          gap-2
          sm:px-4 sm:grid-cols-2 sm:gap-5 sm:text-lg
          md:grid-cols-3
          xl:grid-cols-4
        "
      >
        <button
          v-for="song in songs"
          :key="song.src"
          @click="play(song)"
          :class="
            song.src == current.src
              ? 'bg-green-800 text-white font-medium rounded-md'
              : 'text-gray-700 font-medium'
          "
          class="py-2 px-6 hover:bg-green-500 hover:rounded-md"
        >
          {{ song.title }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import List from "../mixins/list";
import SongTitle from "./SongTitle";

export default {
  name: "MusicPlayer",
  mixins: [List],
  components: { SongTitle },
};
</script>

<style>
.btn {
  @apply font-medium py-1 px-3 rounded transition-all duration-200 hover:scale-110;
}
</style>