<template>
    <div class="book-wrapper">
        <h2 :id="`book_${number}`" class="title text-center mt-3">{{ title }}</h2>

        <div class="book-content">
            <div v-for="(chapter, chapter_no) in book" :key="`book-${number}-chapter-${chapter_no}`"
                    class="chapter-content">
                <h3 :id="`chapter_${chapter_no}`" class="mt-2">Rozdział {{ chapter_no }}</h3>

                <span v-for="verse in chapter" :key="`book-${number}-chapter-${chapter_no}-verse-${verse.lp}`"
                        :id="`chapter_${chapter_no}_verse_${verse.lp}`">
                    <small class="MsoSubtleReference text-muted">({{ verse.lp }})</small>
                    {{ verse.text }} 
                </span>
            </div>
        </div>
        <!-- book-content -->
    </div>
</template>

<script>
export default {
    props: {
        book: Object,
        title: String,
        number: Number
    }
}
</script>
