<script setup lang="ts">
import { useBibleStore } from '@/stores/bible'

const bibleStore = useBibleStore()
</script>

<template>
  <div class="m-1 rounded border p-1 text-center text-muted shadow-sm">
    <span v-for="(chapter, index) in bibleStore.chapters" :key="index">
      <a :href="`#chapter_${chapter}`" class="m-1 inline-block hover:text-black">{{ chapter }}</a>
      <span v-if="index + 1 < bibleStore.chapters.length" class="mx-0.5">|</span>
    </span>
  </div>
</template>
