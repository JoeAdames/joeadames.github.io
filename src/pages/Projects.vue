<template>
  <section class="p-6">
    <h2 class="text-2xl font-semibold mb-6">Projects</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.title" class="p-4 border rounded-xl shadow-sm">
        <h3 class="text-xl font-semibold">{{ project.title }}</h3>
        <p class="text-gray-500 mt-2">{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A clean portfolio built with Vue 3, TypeScript and Tailwind.',
  },
  // { title: 'Weather App', description: 'Real-time weather forecast using OpenWeatherMap API.' },
  // { title: 'Blog CMS', description: 'Headless CMS blog powered by Vue and Markdown.' },
]
</script>

<style scoped></style>
