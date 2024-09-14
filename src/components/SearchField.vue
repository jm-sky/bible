<script setup lang="ts">
import { useSearchStore } from '@/stores/search'

const search = useSearchStore()
</script>

<template>
  <div class="fixed right-0 top-0 m-1 max-w-[48vw] rounded border bg-white/10 p-1 shadow-sm backdrop-blur-xs">
    <div class="flex flex-row">
      <input
        v-model="search.searchPhrase"
        placeholder="Szukaj"
        class="form-control rounded-e-none focus:z-10"
        type="text"
        @keyup.enter="search.search()"
      >
      <button class="btn btn-light -translate-x-px rounded-s-none border" type="button" @click="search.search()">
        <i class="fa-solid fa-search fa-fw" />
      </button>
    </div>
  </div>
</template>
