<template>
  <svg viewBox="0 0 100 100" class="volume" preserveAspectRatio="none">
    <path
      v-for="(stem, stemName, index) in stems"
      :key="stemName"
      :d="getPath(index, stem.volume)"
      :fill="stem.fillColor"
    />
  </svg>
</template>

<script>
export default {
  props: {
    stems: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    let numberOfStems = Object.keys(props.stems).length;
    let lineWidth = 100 / numberOfStems;

    function getPath(i, volume) {
      let lineStart = i * lineWidth;
      let lineHeight = -Math.min((volume - 50) * 2 + 6, 100);
      return `M${lineStart} 100 h${lineWidth} v${lineHeight} h-${lineWidth} Z`;
    }
    return { getPath };
  },
};
</script>
