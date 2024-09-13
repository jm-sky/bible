<script setup lang="ts">
import { nextTick } from 'vue'
import { useBibleStore } from '@/stores/bible'
import { useSearchStore, type ISearchResult } from '@/stores/search'
import BaseModal from './BaseModal.vue'

const isOpen = defineModel<boolean>('isOpen', { required: true })

const bibles = useBibleStore()
const search = useSearchStore()

const gotoFoundVerse = (item: ISearchResult) => {
  bibles.book = item.book
  isOpen.value = false

  nextTick(() => {
    const linkedVerse = document.querySelector(`#chapter_${item.chapter}_verse_${item.verse.lp}`)
    const classes = search.options.highlightClass.split(' ')

    linkedVerse?.classList.add(...classes)

    setTimeout(() => linkedVerse?.classList.remove(...classes), search.options.highlightTime)
  })
}
</script>

<template>
  <BaseModal v-model:is-open="isOpen" without-close-button>
    <div class="p-4">
      <div class="mb-2 p-1">
        <button type="button" class="btn btn-primary  w-full" @click="isOpen = false">
          <i class="fa-solid fa-times fa-fw" />
          Zamknij
        </button>
      </div>

      <div v-for="(item, index) in search.searchResults" :key="index" class="m-1 flex flex-row flex-wrap justify-between gap-x-2 gap-y-0.5 rounded border px-2 py-1">
        <span v-html="item.verse.text" />
        <a :href="`#chapter_${item.chapter}`" class="ml-auto mr-0 text-muted hover:text-primary" @click="gotoFoundVerse(item)">
          {{ item.book }} {{ item.chapter }}:{{ item.verse.lp }}
        </a>
      </div>
    </div>
  </BaseModal>
</template>
