import Sweetheart from "../assets/music/SweetheartKedarnath.mp3";
import Qaafirana from "../assets/music/QaafiranaKedarnath.mp3";
import Volt from "../assets/music/440 VOLT.mp3";
import Shayarana from "../assets/music/Aaj Dil Shayarana.mp3";
import Banjaara from "../assets/music/Banjaara.mp3";
import ChaloJaaneDo from "../assets/music/chalo jaane do.mp3";
import CharacterDheela from "../assets/music/Character Dheela.mp3";
import DilChahtaHa from "../assets/music/Dil Chahta Hai.mp3";
import Ghungroo from "../assets/music/GhungrooWar.mp3";
import KalHoNaaHo from "../assets/music/Kal Ho Naa Ho.mp3";
import JaiJaiShivshankar from "../assets/music/Jai-Jai-ShivshankarWar.mp3";
import koiLadkiHai from "../assets/music/koi ladki hai.mp3";
import MereNaamTu from "../assets/music/Mere Naam Tu.mp3";
import NamoNamo from "../assets/music/Namo-NamoKedarnath.mp3";
import TujheDekhaTo from "../assets/music/tujhe dekha to.mp3";
import TuHiTohHai from "../assets/music/Tu Hi Toh Hai.mp3";

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
          singer: "Dev Negi",
          music: "Amit Trivedi",
          lyrics: "Amitabh Bhattacharya",
          year: 2018,
          src: Sweetheart,
        },
        {
          title: "Qaafirana",
          movie: "Kedarnath",
          singer: "Arijit Singh & Nikhita Gandhi",
          music: "Amit Trivedi",
          lyrics: "Amitabh Bhattacharya",
          year: 2018,
          src: Qaafirana,
        },
        {
          title: "440 Volt",
          movie: "Sultan",
          singer: "Mika Singh",
          music: "Vishal & Shekhar",
          lyrics: "Irshad Kamil",
          year: 2016,
          src: Volt,
        },
        {
          title: "Aaj Dil Shayarana",
          movie: "Holiday",
          singer: "Arijit Singh",
          music: "Pritam",
          lyrics: "Irshad Kamil",
          year: 2014,
          src: Shayarana,
        },
        {
          title: "Banjaara",
          movie: "Ek Tha Tiger",
          singer: "Sukhwinder  Singh",
          music: "Sohail Sen",
          lyrics: "Neelesh Misra",
          year: 2012,
          src: Banjaara,
        },
        {
          title: "Chalo Jaane Do",
          movie: "Bhootnath",
          singer: "Amitabh Bachchan, Juhi Chawla",
          music: "Vishal Dadlani, Shekhar Ravjiani",
          lyrics: "Javed Akhtar",
          year: 2008,
          src: ChaloJaaneDo,
        },
        {
          title: "Character Dheela",
          movie: "Bodyguard",
          singer: " Neeraj Shridhar, Amrita Kak",
          music: "Pritam",
          lyrics: "Amitabh Bhattacharya",
          year: 2011,
          src: CharacterDheela,
        },
        {
          title: "Dil Chahta Ha",
          movie: "Dil Chahta Ha",
          singer: "Shankar Mahadevan",
          music: "Shanker, Ehsaan, Loy",
          lyrics: "Javed Akhtar",
          year: 2001,
          src: DilChahtaHa,
        },
        {
          title: "Ghungroo",
          movie: "War",
          singer: "Arijit Singh, Shilpa Rao",
          music: "Vishal and Shekhar",
          lyrics: "Kumaar",
          year: 2019,
          src: Ghungroo,
        },
        {
          title: "Kal Ho Naa Ho",
          movie: "Kal Ho Naa Ho",
          singer: "Sonu Nigam",
          music: "Shankar Ehsaan Loy",
          lyrics: "Javed Akhtar",
          year: 2003,
          // image: "kal-ho-na-ho.png",
          src: KalHoNaaHo,
        },
        {
          title: "Jai-Jai-Shivshankar",
          movie: "War",
          singer: "Vishal Dadlani, Benny Dayal",
          music: "Vishal and Shekhar",
          lyrics: "Kumaar",
          year: 2019,
          src: JaiJaiShivshankar,
        },
        {
          title: "koi ladki hai",
          movie: "Dil To Pagal Hain",
          singer: "Lata Mangeshkar, Udit Narayan",
          music: "Uttam Singh",
          lyrics: "Anand Bakshi",
          year: 1997,
          src: koiLadkiHai,
        },
        {
          title: "Mere Naam Tu",
          movie: "Zero",
          singer: "Abhay Jodhpurkar",
          music: "Ajay-Atul",
          lyrics: "Irshad Kamil",
          year: 2018,
          src: MereNaamTu,
        },
        {
          title: "Namo Namo",
          movie: "Kedarnath",
          singer: "Amit Trivedi",
          music: "Amit Trivedi",
          lyrics: "Amitabh Bhattacharya",
          year: 2018,
          src: NamoNamo,
        },
        {
          title: "Tujhe Dekha To",
          movie: "DDLJ",
          singer: "Kumar Sanu, Lata Mangeshkar",
          music: "Jatin-Lalit",
          lyrics: "Anand Bakshi",
          year: 1995,
          src: TujheDekhaTo,
        },
        {
          title: "Tu Hi Toh Hai",
          movie: "Holiday",
          singer: "Benny Dayal",
          music: "Pritam",
          lyrics: "Irshad Kamil",
          year: 2014,
          src: TuHiTohHai,
        },
      ],
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
