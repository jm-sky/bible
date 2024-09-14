<template>
  <div class="pb-4 text-justify">
    <div class="pb-2" :style="fontSize">
      <BChaptersList />

      <BibleBook
        v-for="(book, title, bookNo) in books"
        :key="`book-${bookNo}`"
        :book="book"
        :title="title"
        :number="bookNo"
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
  if (bibles.book) return { [bibles.book]: bibles.bible.books[bibles.book] }
  return {}
})

const fontSize = computed(() => {
  return `font-size: ${options.fontSize}em`
})
</script>
