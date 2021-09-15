<template>
  <div class="main">
    <visualiser :stems="stems" v-if="isLoaded" />
    <step-indicator :step="step" />
    <controls :stems="stems" :is-loaded="isLoaded" />
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import * as Tone from "tone";
import Controls from "@/components/Controls";
import Visualiser from "@/components/Visualiser";
import StepIndicator from "@/components/StepIndicator";
import loadStems from "@/helpers/loadStems";

export default {
  components: {
    Controls,
    Visualiser,
    StepIndicator,
  },
  setup() {
    let isLoaded = ref(false);
    let stems = reactive({}); // @TODO: can we move to a new component to use async setup and <Suspense />?
    let step = ref(0);
    let incrementStep = () => {
      step.value = step.value >= 3 ? 0 : step.value + 1;
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
      step,
      stems,
      isLoaded,
    };
  },
};
</script>

<style lang="scss">
.main {
  height: 100vh;
  width: 100vw;
  background: #9fd3d4;
}

.volume {
  height: 100%;
  width: 100%;
  display: block;
}
</style>
