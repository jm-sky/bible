<script setup lang="ts">
import { useBibleStore } from '@/stores/bible'

const bibleStore = useBibleStore()
</script>

<template>
  <div class="m-1 rounded border p-1 text-center text-muted shadow-sm">
    <template v-for="(chapter, index) in bibleStore.chapters" :key="index">
      <a :href="`#chapter_${chapter}`" class="mx-0.5 inline-block rounded px-1 transition-all hover:text-black hover:ring">{{ chapter }}</a>
      <span v-if="index + 1 < bibleStore.chapters.length">|</span>
    </template>
  </div>
</template>
