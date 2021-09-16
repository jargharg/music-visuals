<template>
  <svg
    fill-rule="evenodd"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="1.5"
    viewBox="15 10 70 80"
    preserveAspectRatio="xMidYMid meet"
    class="visualiser"
  >
    <defs>
      <clipPath id="eye-left-clip">
        <path
          d="M30,43C30,43 32.671,41.516 35.103,40.165C37.527,38.819 40.473,38.819 42.897,40.165C45.329,41.516 48,43 48,43C48,43 44.83,44.409 42.253,45.554C40.182,46.475 37.818,46.475 35.747,45.554C33.17,44.409 30,43 30,43Z"
          transform="translate(0 5.72)"
        />
      </clipPath>

      <clipPath id="eye-middle-clip">
        <path
          d="M30,43C30,43 32.671,41.516 35.103,40.165C37.527,38.819 40.473,38.819 42.897,40.165C45.329,41.516 48,43 48,43C48,43 44.83,44.409 42.253,45.554C40.182,46.475 37.818,46.475 35.747,45.554C33.17,44.409 30,43 30,43Z"
          transform="translate(0 5.76)"
        />
      </clipPath>

      <clipPath id="eye-right-clip">
        <path
          d="M30,43C30,43 32.671,41.516 35.103,40.165C37.527,38.819 40.473,38.819 42.897,40.165C45.329,41.516 48,43 48,43C48,43 44.83,44.409 42.253,45.554C40.182,46.475 37.818,46.475 35.747,45.554C33.17,44.409 30,43 30,43Z"
          transform="translate(21.87 5.84)"
        />
      </clipPath>
    </defs>

    <path class="background" d="M-100 0H300V100H-100z" />
    <g id="face-group">
      <g id="ear-left">
        <path
          class="ear ear--left"
          d="M25,43.746C25,41.678 23.322,40 21.254,40L21.246,40C19.178,40 17.5,41.678 17.5,43.746L17.5,56.254C17.5,58.322 19.178,60 21.246,60L21.254,60C23.322,60 25,58.322 25,56.254L25,43.746Z"
          transform="translate(1.25)"
        />
      </g>

      <g id="ear-right">
        <path
          class="ear ear--right"
          d="M25,43.746C25,41.678 23.322,40 21.254,40L21.246,40C19.178,40 17.5,41.678 17.5,43.746L17.5,56.254C17.5,58.322 19.178,60 21.246,60L21.254,60C23.322,60 25,58.322 25,56.254L25,43.746Z"
          transform="translate(55.75)"
        />
      </g>

      <path
        id="face"
        class="face"
        d="M75,40C75,26.202 63.798,15 50,15C36.202,15 25,26.202 25,40L25,60C25,73.798 36.202,85 50,85C63.798,85 75,73.798 75,60L75,40Z"
      />

      <g id="eye-left">
        <g clip-path="url(#eye-left-clip)">
          <path class="eye__back" d="M30,43 h20 v10 h-20 z" />
          <circle
            id="iris-left"
            class="eye__iris eye__iris--left"
            cx="39"
            cy="48.5"
            r="4.32"
          />
          <circle
            id="pupil-left"
            class="eye__pupil eye__pupil--left"
            cx="39"
            cy="48.5"
            r="2.37"
          />
        </g>
        <path
          id="eyelid-left"
          class="eyelid"
          d="M30,43C30,43 32.671,41.516 35.103,40.165C37.527,38.819 40.473,38.819 42.897,40.165C45.329,41.516 48,43 48,43C48,43 44.83,44.409 42.253,45.554C40.182,46.475 37.818,46.475 35.747,45.554C33.17,44.409 30,43 30,43Z"
          transform="translate(0 5.72)"
        />
      </g>

      <g id="eye-m" transform="translate(11 -13.5)">
        <g clip-path="url(#eye-middle-clip)">
          <path class="eye__back" d="M30,43 h20 v10 h-20 z" />
          <circle
            id="iris-middle"
            class="eye__iris eye__iris--middle"
            cx="39"
            cy="48.5"
            r="4.32"
          />
          <circle
            id="pupil-middle"
            class="eye__pupil eye__pupil--middle"
            cx="39"
            cy="48.5"
            r="2.37"
          />
        </g>
        <path
          id="eyelid-middle"
          class="eyelid"
          d="M30,43C30,43 32.671,41.516 35.103,40.165C37.527,38.819 40.473,38.819 42.897,40.165C45.329,41.516 48,43 48,43C48,43 44.83,44.409 42.253,45.554C40.182,46.475 37.818,46.475 35.747,45.554C33.17,44.409 30,43 30,43Z"
          transform="translate(0 5.76)"
        />
      </g>

      <g id="eye-right" transform="translate(.13)">
        <g clip-path="url(#eye-right-clip)">
          <path
            class="eye__back"
            d="M30,43 h20 v10 h-20 z"
            transform="translate(21.87)"
          />
          <circle
            id="iris-right"
            class="eye__iris eye__iris--right"
            cx="39"
            cy="48.5"
            r="4.32"
            transform="translate(21.87)"
          />
          <circle
            id="pupil-right"
            class="eye__pupil eye__pupil--right"
            cx="39"
            cy="48.5"
            r="2.37"
            transform="translate(21.87)"
          />
        </g>
        <path
          id="eyelid-right"
          class="eyelid"
          d="M30,43C30,43 32.671,41.516 35.103,40.165C37.527,38.819 40.473,38.819 42.897,40.165C45.329,41.516 48,43 48,43C48,43 44.83,44.409 42.253,45.554C40.182,46.475 37.818,46.475 35.747,45.554C33.17,44.409 30,43 30,43Z"
          transform="translate(21.87 5.84)"
        />
      </g>

      <g id="mouth">
        <path
          class="mouth__back"
          d="M40,70L60,70L60,83C53.352,85.67 46.686,85.66 40,83L40,70Z"
        />
        <path
          id="mouth-hinge"
          class="mouth__front"
          d="M40,70L60,70L60,83C53.352,85.67 46.686,85.66 40,83L40,70Z"
        />
      </g>

      <g id="nose">
        <path
          d="M46,65C48.667,67.804 51.333,67.848 54,65"
          transform="translate(0 -1.12)"
        />
        <path
          d="M47 66 46 66C45.47 66 44.96 65.79 44.59 65.41 44.21 65.04 44 64.53 44 64L44 63M53 66 54 66C54.53 66 55.04 65.79 55.41 65.41 55.79 65.04 56 64.53 56 64L56 63"
          transform="translate(0 -1.12)"
        />
      </g>
    </g>
  </svg>
</template>

<script>
import gsap from "gsap";
import { onMounted, watch } from "@vue/runtime-core";

export default {
  props: {
    stems: {
      type: Object,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const EYELID_CLOSED_PATH =
      "M30,43C30,43 31.226,43.559 32.772,44.265C36.728,46.07 41.272,46.07 45.228,44.265C46.774,43.559 48,43 48,43C48,43 46.702,43.577 45.092,44.292C41.214,46.016 36.786,46.016 32.908,44.292C31.298,43.577 30,43 30,43Z";

    let animations = {
      earLeft: null,
      earRight: null,
      eyeLeft: null,
      eyeMiddle: null,
      eyeRight: null,
      mouth: null,
    };

    onMounted(() => {
      animations.earLeft = gsap
        .timeline({ paused: true })
        .from("#ear-left", { x: -5, rotate: -15 });

      animations.earRight = gsap
        .timeline({ paused: true })
        .from("#ear-right", { x: 5, rotate: 15 });

      animations.eyeLeft = gsap
        .timeline({ paused: true })
        .to("#eyelid-left, #eye-left-clip path", {
          attr: { d: EYELID_CLOSED_PATH },
        });

      animations.eyeMiddle = gsap
        .timeline({ paused: true })
        .to("#eyelid-middle, #eye-middle-clip path", {
          attr: { d: EYELID_CLOSED_PATH },
        });

      animations.eyeRight = gsap
        .timeline({ paused: true })
        .to("#eyelid-right, #eye-right-clip path", {
          attr: { d: EYELID_CLOSED_PATH },
        });

      animations.mouth = gsap
        .timeline({ paused: true })
        .from("#mouth-hinge", { y: 8 });

      animations.face = gsap
        .timeline({ paused: true })
        .to("#face-group", { y: 2, duration: 0.2 });

      // watch(
      //   () => props.step,
      //   (step) => {
      //     step % 2 ? animations.face.reverse() : animations.face.play();
      //   }
      // );

      Object.values(props.stems).forEach((stem) => {
        if (!stem.animation) return;
        watch(
          () => stem.volume,
          (volume) => {
            let progress = 1 - ((volume + 6 - 50) * (100 / 40)) / 100;
            animations[stem.animation].progress(progress);
          }
        );
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.visualiser {
  display: block;
  height: 100vh;
  width: 100vw;

  * {
    fill: none;
    stroke: var(--space-cadet);

    stroke-width: 0.5;
  }
}

.background {
  fill: var(--space-cadet);
}

.face {
  fill: var(--slate-blue);
}

.eyelid {
  // stroke: var(--sea-green-crayola);
}

.eye {
  &__back {
    fill: var(--sea-green-crayola);
  }

  &__iris {
    fill: var(--maya-blue);
    stroke: none;
  }

  &__pupil {
    fill: var(--ultra-red);
    stroke: none;
  }
}

.mouth {
  &__back {
    fill: var(--space-cadet);
  }

  &__front {
    fill: var(--slate-blue);
  }
}

.ear {
  fill: var(--slate-blue);
}
</style>
