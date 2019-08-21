<template>
  <div class="content text-justify pb-4">
    <div class="chapters pb-2" :style="fontSize">
      <div class="m-1 p-1 border rounded shadow-sm text-muted text-center">
        <span v-for="(chapter, index) in $root.chapters" :key="index">
          <a :href="`#chapter_${chapter}`" class="m-1 d-inline-block">{{ chapter }}</a>
          <span v-if="index+1 < $root.chapters.length">|</span>
        </span>
      </div>

      <b-book
        v-for="(book, title, book_no) in books"
        :key="`book-${book_no}`"
        :book="book"
        :title="title"
        :number="book_no"
      ></b-book>
      <!-- book-wrapper -->
    </div>
    <!-- chapters -->
  </div>
</template>

<script>
import bBook from "./bBook";

export default {
  //===============================
  components: {
    bBook
  },
  //===============================
  computed: {
    //==========
    books() {
      if (this.$root.showAll === true) {
        return this.$root.bible.books;
      }
      return { [this.$root.book]: this.$root.bible.books[this.$root.book] };
    },
    //==========
    fontSize() {
      return "font-size: " + this.$root.config.fontSize + "em";
    },
    //==========
  },
  //===============================
};
</script>

