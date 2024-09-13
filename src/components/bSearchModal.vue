<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'
import { nextTick } from 'vue'
import { useBibleStore } from '@/stores/bible'
import { useSearchStore, type ISearchResult } from '@/stores/search'

const bibles = useBibleStore()
const search = useSearchStore()

const gotoFoundVerse = (item: ISearchResult) => {
  bibles.book = item.book
  search.show = false

  nextTick(() => {
    const linkedVerse = document.querySelector(`#chapter_${item.chapter}_verse_${item.verse.lp}`)
    const classes = search.options.highlightClass.split(' ')

    linkedVerse?.classList.add(...classes)

    setTimeout(() => linkedVerse?.classList.remove(...classes), search.options.highlightTime)
  })
}
</script>

<template>
  <TransitionRoot appear :show="search.show" as="template">
    <Dialog
      as="div"
      :open="search.show"
      class="relative z-10"
      @close="search.closeModal()"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-4xl overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
              <div class="border-t p-4">
                <button type="button" class="btn btn-primary w-full" @click="search.closeModal()">
                  <i class="fa-solid fa-times fa-fw" />
                  Zamknij
                </button>
              </div>
              <div class="p-4">
                <div v-for="(item, index) in search.searchResults" :key="index" class="m-1 flex flex-row flex-wrap justify-between gap-x-2 gap-y-0.5 rounded border px-2 py-1">
                  <span v-html="item.verse.text" />
                  <a :href="`#chapter_${item.chapter}`" class="ml-auto mr-0 text-muted hover:text-primary" @click="gotoFoundVerse(item)">
                    {{ item.book }} {{ item.chapter }}:{{ item.verse.lp }}
                  </a>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
