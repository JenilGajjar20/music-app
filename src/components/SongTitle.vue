<template>
  <div class="song-details">
    <div class="song-content">
      <h4 class="song-content__title">
        {{ title }} <Year :song-year="year" />
      </h4>
      <p class="song-content__movie">
        Movie: <span>{{ movie }}</span>
      </p>
      <p class="song-content__singer">
        Singer: <span>{{ singer }}</span>
      </p>
      <p class="song-content__music">
        Music: <span>{{ music }}</span>
      </p>
      <p class="song-content__lyrics">
        Lyrics: <span>{{ lyrics }}</span>
      </p>
    </div>
    <div class="song-img">
      <img v-if="image" :src="`../assets/images/${image}.png`" alt="" />
      <img v-else src="../assets/images/no-image.png" alt="" />
    </div>
  </div>
</template>

<script>
import Year from "./Year.vue";

export default {
  components: { Year },
  name: "SongTitle",
  props: {
    title: String,
    movie: String,
    singer: String,
    image: String,
    music: String,
    lyrics: String,
    year: Number,
  },
};
</script>
