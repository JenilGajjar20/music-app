export default {
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: "Sweetheart",
          movie: "Kedarnath",
          src: require("../assets/music/SweetheartKedarnath.mp3"),
        },
        {
          title: "Qaafirana",
          movie: "Kedarnath",
          src: require("../assets/music/QaafiranaKedarnath.mp3"),
        },
        {
          title: "440 Volt",
          movie: "Sultan",
          src: require("../assets/music/440 VOLT.mp3"),
        },
        {
          title: "Aaj Dil Shayarana",
          movie: "Holiday",
          src: require("../assets/music/Aaj Dil Shayarana.mp3"),
        },
        {
          title: "Banjaara",
          movie: "Ek Tha Tiger",
          src: require("../assets/music/Banjaara.mp3"),
        },
        {
          title: "Chalo Jaane Do",
          movie: "Bhootnath",
          src: require("../assets/music/chalo jaane do.mp3"),
        },
        {
          title: "Character Dheela",
          movie: "Bodyguard",
          src: require("../assets/music/Character Dheela.mp3"),
        },
        {
          title: "Dil Chahta Ha",
          movie: "Dil Chahta Ha",
          src: require("../assets/music/Dil Chahta Hai.mp3"),
        },
        {
          title: "Ghungroo",
          movie: "War",
          src: require("../assets/music/GhungrooWar.mp3"),
        },
        {
          title: "Kal Ho Naa Ho",
          movie: "Kal Ho Naa Ho",
          src: require("../assets/music/Kal Ho Naa Ho.mp3"),
        },
        {
          title: "Jai-Jai-Shivshankar",
          movie: "War",
          src: require("../assets/music/Jai-Jai-ShivshankarWar.mp3"),
        },
        {
          title: "koi ladki hai",
          movie: "Dil To Pagal Hain",
          src: require("../assets/music/koi ladki hai.mp3"),
        },
        {
          title: "Mere Naam Tu",
          movie: "Zero",
          src: require("../assets/music/Mere Naam Tu.mp3"),
        },
        {
          title: "Namo Namo",
          movie: "Kedarnath",
          src: require("../assets/music/Namo-NamoKedarnath.mp3"),
        },
        {
          title: "Tujhe Dekha To",
          movie: "DDLJ",
          src: require("../assets/music/tujhe dekha to.mp3"),
        },
        {
          title: "Tu Hi Toh Hai",
          movie: "Holiday",
          src: require("../assets/music/Tu Hi Toh Hai.mp3"),
        },
      ],
      // lofiSongs: [
      //   {
      //     title: "Banjaara",
      //     movie: "Ek Tha Tiger",
      //     src: require("../assets/music/Banjaara.mp3"),
      //   },
      //   {
      //     title: "Chalo Jaane Do",
      //     movie: "Bhootnath",
      //     src: require("../assets/music/chalo jaane do.mp3"),
      //   },
      //   {
      //     title: "Character Dheela",
      //     movie: "Bodyguard",
      //     src: require("../assets/music/Character Dheela.mp3"),
      //   },
      //   {
      //     title: "Dil Chahta Ha",
      //     movie: "Dil Chahta Ha",
      //     src: require("../assets/music/Dil Chahta Hai.mp3"),
      //   },
      //   {
      //     title: "Ghungroo",
      //     movie: "War",
      //     src: require("../assets/music/GhungrooWar.mp3"),
      //   },
      //   {
      //     title: "Kal Ho Naa Ho",
      //     movie: "Kal Ho Naa Ho",
      //     src: require("../assets/music/Kal Ho Naa Ho.mp3"),
      //   },
      //   {
      //     title: "Jai-Jai-Shivshankar",
      //     movie: "War",
      //     src: require("../assets/music/Jai-Jai-ShivshankarWar.mp3"),
      //   },
      //   {
      //     title: "koi ladki hai",
      //     movie: "Dil To Pagal Hain",
      //     src: require("../assets/music/koi ladki hai.mp3"),
      //   },
      //   {
      //     title: "Mere Naam Tu",
      //     movie: "Zero",
      //     src: require("../assets/music/Mere Naam Tu.mp3"),
      //   },
      //   {
      //     title: "Namo Namo",
      //     movie: "Kedarnath",
      //     src: require("../assets/music/Namo-NamoKedarnath.mp3"),
      //   },
      //   {
      //     title: "Tujhe Dekha To",
      //     movie: "DDLJ",
      //     src: require("../assets/music/tujhe dekha to.mp3"),
      //   },
      //   {
      //     title: "Tu Hi Toh Hai",
      //     movie: "Holiday",
      //     src: require("../assets/music/Tu Hi Toh Hai.mp3"),
      //   },
      // ],
      // Set up the audio
      player: new Audio(),
    };
  },
  methods: {
    // Play the song
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();

      // If the song gets completed play next
      this.player.addEventListener(
        "ended",
        function () {
          this.index++;
          if (this.index > this.index > this.songs.length - 1) {
            this.index = 0;
          }

          this.current = this.songs[this.index];
          this.play(this.current);
        }.bind(this)
      );

      this.isPlaying = true;
    },
    // Pause the song
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    // Play the next song
    nextSong() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    },
    // Play the prev song
    prevSong() {
      this.index--;
      if (this.index < 0) {
        this.index = this.index > this.songs.length - 1;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  },
};
