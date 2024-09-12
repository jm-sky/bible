<template>
  <div class="content text-justify pb-4">
    <div class="chapters pb-2" :style="fontSize">
      <BChaptersList />

      <BibleBook v-for="(book, title, book_no) in books" :key="`book-${book_no}`" :book="book" :title="title"
        :number="book_no" />
      <!-- book-wrapper -->
    </div>
    <!-- chapters -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useConfigStore } from '@/stores/config';
import { useBibleStore } from '@/stores/bible';
import BibleBook from "./bBook.vue";
import BChaptersList from './bChaptersList.vue';

const config = useConfigStore()
const bibleStore = useBibleStore()

const books = computed(() => {
  if (config.showAll === true) {
    return bibleStore.bible.books;
  }
  return { [bibleStore.book]: bibleStore.bible.books[bibleStore.book] };
})

const fontSize = computed(() => {
  return `font-size: ${config.options.fontSize}em`;
})
</script>
