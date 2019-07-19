<template>
    <div class="content text-justify pb-4">
        <div class="chapters pb-2" :style="fontSize">
            <div class="m-1 p-1 border rounded shadow-sm text-muted text-center">
                <span v-for="(chapter, index) in $root.$app.chapters" :key="index">
                    <a :href="`#chapter_${chapter}`"
                        class="m-1 d-inline-block">{{ chapter }}</a>
                    <span v-if="index+1 < $root.$app.chapters.length">|</span>
                </span>
            </div>
            
            <b-book v-for="(book, title, book_no) in books" :key="`book-${book_no}`"
                :book="book"
                :title="title"
                :number="book_no">
            </b-book>
            <!-- book-wrapper -->
        </div>
        <!-- chapters -->
    </div>
</template>

<script>
import bBook from './bBook';

export default {
//===============================
components: {
    bBook
},
//===============================
computed: {
    //==========
    books() {
        if (this.$root.$app.showAll === true) {
            return this.$root.$app.bible.books;
        }
        return { [this.$root.$app.book] : this.$root.$app.bible.books[this.$root.$app.book] };
    },
    //==========
    fontSize() {
        return 'font-size: ' + this.$root.$app.config.fontSize + 'em';
    },
    //==========
}
//===============================
}
</script>

