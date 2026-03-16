<script setup>
import Circle from './Circle.vue'

defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Изображение'
  },
  caption: {
    type: String,
    default: ''
  },
  circleColor: {
    type: String,
    default: '#D62A2A'
  }
})
</script>

<template>
  <div class="image-wrapper">
    <img
        :src="src"
        :alt="alt"
        class="image"
    />
    <Circle
        v-if="caption"
        :text="caption"
        :color="circleColor"
        class="caption-circle"
    />
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/components/picture';
</style>