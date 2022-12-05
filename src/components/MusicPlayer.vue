<template>
  <section class="music-player">
    <SongTitle :title="current.title" :movie="current.movie" />
    <div class="music-player__btns">
      <button @click="prevSong" class="bg-orange-600 btn">Prev</button>
      <button v-if="!isPlaying" @click="play" class="bg-green-600 btn">
        Play
      </button>
      <button v-else @click="pause" class="bg-red-800 btn">Pause</button>
      <button @click="nextSong" class="bg-orange-600 btn">Next</button>
    </div>
    <div class="songs-list">
      <h3 class="songs-list__title">Songs List</h3>
      <div class="songs">
        <button
          v-for="song in songs"
          :key="song.src"
          @click="play(song)"
          :class="song.src == current.src ? 'current-song' : 'other-song'"
          class="songs-btn"
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
