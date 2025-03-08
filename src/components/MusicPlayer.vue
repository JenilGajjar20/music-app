<template>
  <section class="music-player">
    <SongTitle
      :title="current.title"
      :movie="current.movie"
      :singer="current.singer"
      :image="current.image"
      :music="current.music"
      :lyrics="current.lyrics"
      :year="current.year"
    />
    <div class="music-player__btns">
      <!-- <VyButton label="Label" /> -->
      <ButtonPrimary @click.native="prevSong" title="Prev" />
      <ButtonSecondary v-if="!isPlaying" @click.native="play" title="Play" />
      <ButtonAccent v-else @click.native="pause" title="Pause" />
      <ButtonPrimary @click.native="nextSong" title="Next" />
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
