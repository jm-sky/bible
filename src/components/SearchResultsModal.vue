<script setup lang="ts">
import { useSearchStore } from '@/stores/search'
import BaseModal from './BaseModal.vue'
import SearchResult from './SearchResult.vue'

const isOpen = defineModel<boolean>('isOpen', { required: true })

const search = useSearchStore()
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

      <SearchResult
        v-for="(result, index) in search.searchResults"
        :key="index"
        :result="result"
        @close="isOpen = false"
      />
    </div>
  </BaseModal>
</template>
