<script setup lang="ts">
import { computed, ref } from 'vue'
import { useBibleStore } from '@/stores/bible'
import BaseModal from './BaseModal.vue'
import { useSearchStore } from '@/stores/search';

const bibles = useBibleStore()
const search = useSearchStore()

const isOpen = defineModel<boolean>('isOpen', { required: true })

const books = computed(() => Object.keys(bibles.bible.books))
const selectedBooks = ref<string[]>([])
</script>

<template>
  <BaseModal v-model:is-open="isOpen" title="Wyszukiwanie zaawansowane">
    <template #footer-buttons>
      <button
        type="button"
        class="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="!search.canSearch"
        @click=search.search(selectedBooks)
      >
        <i class="fa-solid fa-search fa-fw"></i>
        Szukaj
      </button>
    </template>
    <div class="p-5">
      <input
        v-model="search.searchPhrase"
        placeholder="Szukaj"
        class="form-control mb-2"
        type="text"
        @keyup.enter="search.search(selectedBooks)"
      >
      <div class="p-2 grid grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-gray-800">
        <div v-for="book, index in books" :key="index">
          <input
            v-model="selectedBooks"
            :id="`select-book-${index}`"
            type="checkbox"
            :value="book"
            class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500/50 focus:ring-2"
          />
          <label :for="`select-book-${index}`" class="ml-1.5">{{ book }}</label>
        </div>
      </div>
    </div>
  </BaseModal>
</template>
