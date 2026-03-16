<script setup>
import Circle from '../components/Circle.vue'
import { ref } from 'vue'

const activeIndex = ref(null)

const setActive = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const circles = [
  { text: "Даня Печинкин\nО нейроинтерфейсах", color: '#D62A2A', top: '5%', left: '55%' },
  { text: 'Даша Морозова\nКоварство ассоциаций', color: '#2A49D6', top: '15%', left: '10%'},
  { text: 'Тимур Чистяков\nРастения в Антарктиде', color: '#1AB2EA', top: '39%', left: '14%' },
  { text: 'Даша Дьячкова\nРеклама, Москва, Лужков', color: '#6C441F', top: '59%', left: '19%'},
  { text: 'Матвей Мухорин\nПро ленивцев', color: '#EA1AC4', top: '20%', left: '40%'},
  { text: 'Руслан Степанов\nНастольно-ролевые игры', color: '#0BCA3E', top: '59%', left: '45%'},
  { text: 'Арина Образцова\nНарратив в "Рататуе"', color: '#EAA11A', top: '40%', left: '73%'},
  { text: 'Даша Жаркова\nРаньше было лучше', color: '#A302C4', top: '63%', left: '67%' },
  { text: 'Тёма Рогулин\nПро качество рэпа', color: '#687F12', top: '25%', left: '62%'}
]
</script>

<template>
  <h1 class="main-title text-h1">ДИДЖ 2</h1>
  <div class="grid-container">
    <!-- Круги -->
    <Circle
        v-for="(circle, index) in circles"
        :key="index"
        :text="circle.text"
        :color="circle.color"
        :position-style="{
        top: circle.top,
        left: circle.left,
        right: circle.right,
        bottom: circle.bottom,
        transform: circle.transform
      }"
        :style="{ opacity: activeIndex === null || activeIndex === index ? 1 : 0.2 }"
        @click="setActive(index)"
    />
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/components/Obloga';
</style>
