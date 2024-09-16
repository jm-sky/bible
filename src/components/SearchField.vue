<script setup lang="ts">
import { useSearchStore } from '@/stores/search'

const search = useSearchStore()
</script>

<template>
  <div class="glass-menu fixed right-0 top-0 m-1 flex max-w-[48vw] flex-row">
    <input
      v-model="search.searchPhrase"
      placeholder="Szukaj"
      class="form-control form-control-sm rounded-e-none focus:z-10"
      type="text"
      @keyup.enter="search.search()"
    >
    <button class="btn btn-sm btn-light -translate-x-px rounded-s-none border" type="button" @click="search.search()">
      <i class="fa-solid fa-search fa-fw scale-75" />
    </button>
  </div>
</template>
