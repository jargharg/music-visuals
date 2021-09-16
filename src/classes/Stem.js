import * as Tone from "tone";
import gsap from "gsap";
import { ref } from "vue";

const FPMS = 60 / 1000;

export default class Stem {
  constructor({ animation, animations, name, player, speed = 0.8 }) {
    this.animations = animation ? [animation] : animations;
    this.name = name;
    this.player = player;
    this.speed = speed;

    // @TODO: allow stereo animations
    this.meter = new Tone.Meter(); // { channels: this.animations.length });
    this.audible = true;

    this._volume = 0;
    this.volume = ref(0); // 0 to 100
    this.volumeSet = gsap.quickSetter(this.volume, "value");
    gsap.ticker.add(this.followVolumeChange.bind(this));

    this.player.volume.value = -6; // @TODO: set a limiter on master channel?

    this.player
      .connect(this.meter)
      .sync()
      .start(0)
      .toDestination();
  }

  followVolumeChange(_, deltaTime) {
    let dt = 1.0 - Math.pow(1.0 - this.speed, deltaTime * FPMS);
    let meterValue = this.meter.getValue();
    let volumePrev = Math.max(this._volume, -100);
    let volumeNow = Math.max(meterValue, -100);
    let volumeDiff = volumeNow - volumePrev;
    this._volume += volumeDiff * dt;
    this.volumeSet(100 + this._volume);
  }

  toggleAudio() {
    this.audible = !this.audible;
    this.player.mute = !this.audible;
  }
}
