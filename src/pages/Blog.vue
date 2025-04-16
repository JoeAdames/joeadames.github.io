<template>
  <section class="p-6">
    <h2 class="text-2xl font-semibold mb-6">Blog</h2>
    <ul class="space-y-4">
      <li v-for="post in blogPosts" :key="post.title">
        <a :href="post.link" class="text-lg text-blue-600 hover:underline">{{ post.title }}</a>
        <p class="text-gray-500 text-sm">{{ post.date }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const blogPosts = [
  { title: 'Why I Chose Vue 3 Over React', date: '2024-12-01', link: '#' },
  { title: 'Tailwind Tips for Cleaner UIs', date: '2024-11-15', link: '#' },
  { title: 'Using Pinia with TypeScript', date: '2024-10-05', link: '#' },
]
</script>

<style scoped></style>
