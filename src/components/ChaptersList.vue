<script setup lang="ts">
import { useBibleStore } from '@/stores/bible'

const bibleStore = useBibleStore()
</script>

<template>
  <div class="m-1 rounded border p-2 text-center text-muted shadow-sm">
    <template v-for="(chapter, index) in bibleStore.chapters" :key="index">
      <a :href="`#chapter_${chapter}`" class="mx-0.5 inline-block px-1 text-primary transition-all hover:text-primary-800 hover:underline">{{ chapter }}</a>
      <span v-if="index + 1 < bibleStore.chapters.length">|</span>
    </template>
  </div>
</template>
