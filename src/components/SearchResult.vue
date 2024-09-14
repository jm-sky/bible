<script setup lang="ts">
import { nextTick } from 'vue'
import { useBibleStore } from '@/stores/bible'
import { useSearchStore, type ISearchResult } from '@/stores/search'

const bibles = useBibleStore()
const search = useSearchStore()

const emit = defineEmits<{ close: [] }>()

const gotoFoundVerse = (item: ISearchResult) => {
  bibles.book = item.book
  emit('close')

  nextTick(() => {
    const linkedVerse = document.querySelector(`#chapter_${item.chapter}_verse_${item.verse.lp}`)
    const classes = search.options.highlightClass.split(' ')

    linkedVerse?.classList.add(...classes)

    setTimeout(() => linkedVerse?.classList.remove(...classes), search.options.highlightTime)
  })
}

defineProps<{
  result: ISearchResult
}>()
</script>

<template>
  <div class="m-1 flex flex-row flex-wrap justify-between gap-x-2 gap-y-0.5 rounded border px-2 py-1 hover:shadow">
    <span v-html="result.verse.text" />
    <a :href="`#chapter_${result.chapter}`" class="ml-auto mr-0 text-muted hover:text-primary" @click="gotoFoundVerse(result)">
      {{ result.book }} {{ result.chapter }}:{{ result.verse.lp }}
    </a>
  </div>
</template>
