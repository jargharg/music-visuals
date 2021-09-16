<template>
  <div class="main">
    <loading-screen v-if="!isLoaded" />
    <visualiser :stems="stems" v-if="isLoaded" :step="step" />
    <step-indicator :step="step" />
    <controls :stems="stems" />
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import * as Tone from "tone";
import Controls from "@/components/Controls";
import Visualiser from "@/components/Visualiser";
import LoadingScreen from "@/components/LoadingScreen";
import StepIndicator from "@/components/StepIndicator";
import loadStems from "@/helpers/loadStems";

export default {
  components: {
    Controls,
    Visualiser,
    StepIndicator,
    LoadingScreen,
  },
  setup() {
    let isLoaded = ref(false);
    let stems = reactive({}); // @TODO: can we move to a new component to use async setup and <Suspense />?
    let step = ref(0);
    let incrementStep = () => {
      step.value = +Tone.Transport.position.split(":")[1];
    };

    Tone.Transport.bpm.value = 129;
    Tone.Transport.scheduleRepeat(
      (t) => Tone.Draw.schedule(incrementStep, t),
      "4n"
    );

    loadStems().then((loadedStems) => {
      Object.entries(loadedStems).forEach(([key, value]) => {
        stems[key] = value;
      });
      isLoaded.value = true;
    });

    return {
      isLoaded,
      stems,
      step,
    };
  },
};
</script>

<style lang="scss">
:root {
  --buff: #f4e285ff;
  --ultra-red: #f76f8eff;
  --maya-blue: #7cc6feff;
  --sea-green-crayola: #1effbcff;
  --slate-blue: #7d53deff;
  --space-cadet: #2d3047ff;
}

.main {
  height: 100vh;
  width: 100vw;
  background: var(--space-cadet);
}
</style>
