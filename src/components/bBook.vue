<template>
  <div class="book-wrapper">
    <h2 :id="`book_${number}`" class="title text-xl font-bold text-center mt-3">{{ title }}</h2>

    <div class="book-content">
      <div v-for="(chapter, chapter_no) in book" :key="`book-${number}-chapter-${chapter_no}`" class="chapter-content">
        <h3 :id="`chapter_${chapter_no}`" class="font-semibold text-lg mt-2">Rozdział {{ chapter_no }}</h3>

        <span v-for="verse in chapter" :key="`book-${number}-chapter-${chapter_no}-verse-${verse.lp}`"
          :id="`chapter_${chapter_no}_verse_${verse.lp}`" :data-paragraph="getParagraphData(title, chapter_no, verse)"
          class="pe-1">
          <small class="MsoSubtleReference text-muted">({{ verse.lp }})</small>&nbsp;{{ verse.text }}
        </span>
      </div>
    </div>
    <!-- book-content -->
  </div>
</template>

<script setup lang="ts">
import type { IBook, IVerse } from '@/stores/bible';

defineProps<{
  book: IBook
  title: string
  number: number
}>()

const getParagraphData = (title: string, chapter_no: string, verse: IVerse) => {
  return JSON.stringify({
    book: title,
    chapter: chapter_no,
    verse: verse.lp
  });
}
</script>
