<template>
  <div data-type="book-wrapper">
    <h2 :id="`book_${number}`" class="mt-3 text-center text-xl font-bold">
      {{ title }}
    </h2>

    <div data-type="book-content">
      <div v-for="(chapter, chapter_no) in book" :key="`book-${number}-chapter-${chapter_no}`" data-type="chapter-content">
        <h3 :id="`chapter_${chapter_no}`" class="mt-2 text-lg font-semibold">
          Rozdział {{ chapter_no }}
        </h3>

        <span
          v-for="verse in chapter"
          :id="`chapter_${chapter_no}_verse_${verse.lp}`"
          :key="`book-${number}-chapter-${chapter_no}-verse-${verse.lp}`"
          :data-paragraph="getParagraphData(title, chapter_no, verse)"
          class="pe-1 transition-all"
        >
          <small class="MsoSubtleReference text-muted">({{ verse.lp }})</small>&nbsp;{{ verse.text }}
        </span>
      </div>
    </div>
    <!-- book-content -->
  </div>
</template>

<script setup lang="ts">
import type { IBook, IVerse } from '@/types/bible.type'

defineProps<{
  book: IBook
  title: string
  number: number
}>()

const getParagraphData = (title: string, chapter_no: string, verse: IVerse) => {
  return JSON.stringify({
    book: title,
    chapter: chapter_no,
    verse: verse.lp,
  })
}
</script>

