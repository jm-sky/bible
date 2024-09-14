<template>
  <div class="pb-4 text-justify">
    <div class="pb-2" :style="fontSize">
      <BChaptersList />

      <BibleBook
        v-for="(book, title, book_no) in books"
        :key="`book-${book_no}`"
        :book="book"
        :title="title"
        :number="book_no"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBibleStore } from '@/stores/bible'
import { useOptionsStore } from '@/stores/options'
import type { IBooks } from '@/types/bible.type'
import BibleBook from './BibleBook.vue'
import BChaptersList from './ChaptersList.vue'

const bibles = useBibleStore()
const options = useOptionsStore()

const books = computed<IBooks>(() => {
  if (bibles.showAllBooks === true) return bibles.bible.books
  return { [bibles.book]: bibles.bible.books[bibles.book] }
})

const fontSize = computed(() => {
  return `font-size: ${options.fontSize}em`
})
</script>
