<template>
  <div class="controls">
    <button
      @click="toggleAudio"
      :class="[
        'controls__control',
        'controls__control--transport',
        { 'controls__control--on': playCaption === 'play' },
      ]"
    >
      {{ playCaption }}
    </button>

    <button
      v-for="(stem, stemName) in stems"
      :key="stemName"
      @click="stem.toggleAudio()"
      :class="['controls__control', { 'controls__control--on': stem.audible }]"
    >
      {{ stem.name }}
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import * as Tone from "tone";

export default {
  props: {
    stems: {
      type: Object,
      required: true,
    },
    isLoaded: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { emit }) {
    let audioInitialised = false;
    let playCaption = ref("play");

    let playAudio = async () => {
      if (!audioInitialised) await Tone.start();
      Tone.Transport.start();
      // Tone.Transport.position = "27:2:0";
      playCaption.value = "stop";
    };

    let stopAudio = () => {
      playCaption.value = "play";
      Tone.Transport.stop();
    };

    let toggleAudio = () => {
      if (Tone.Transport.state === "started") {
        stopAudio();
      } else {
        playAudio();
      }
    };

    return {
      toggleAudio,
      playCaption,
    };
  },
};
</script>

<style lang="scss" scoped>
.controls {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.2rem;
  color: #222;
  font-family: monospace;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 860px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  button {
    opacity: 0.8;
    font-family: monospace;
    width: auto;

    &:hover {
      opacity: 1;
    }
  }

  &__control {
    background: var(--ultra-red);
    width: 100%;
    padding: 1rem;
    color: white;
    border: none;
    margin: 0.1rem;
    cursor: pointer;

    &--transport {
      text-transform: uppercase;
    }

    &--on {
      background: var(--sea-green-crayola);
      color: black;
    }
  }
}
</style>
