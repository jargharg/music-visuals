import * as Tone from "tone";
import gsap from "gsap";
import { ref } from "vue";

const FPMS = 60 / 1000;

export default class Stem {
  constructor({ name, fillColor, speed = 0.3, player }) {
    this.name = name;
    this.fillColor = fillColor;
    this.speed = speed;
    this.audible = true;
    this.volume = ref(-1);

    this.player = player;

    this._volume = 0;
    this.meter = new Tone.Meter(0.9);

    this.player.connect(this.meter);
    this.player.volume.value = -6; // @TODO: set a limiter on master channel?

    this.player
      .sync()
      .start(0)
      .toDestination();

    this.volumeSet = gsap.quickSetter(this.volume, "value");

    let followVolumeChange = (_, deltaTime) => {
      let dt = 1.0 - Math.pow(1.0 - this.speed, deltaTime * FPMS);
      let meterValue = this.meter.getValue();

      let volumePrev = Math.max(this._volume, -100);
      let volumeNow = Math.max(meterValue, -100);
      let volumeDiff = volumeNow - volumePrev;
      this._volume += volumeDiff * dt;
      this.volumeSet(100 + this._volume);
    };

    gsap.ticker.add(followVolumeChange);
  }

  toggleAudio() {
    this.audible = !this.audible;
    this.player.mute = !this.audible;
  }
}
