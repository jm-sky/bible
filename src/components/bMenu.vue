<script lang="ts" setup>
import { useBibleStore } from '@/stores/bible';

const bibleStore = useBibleStore()

</script>

<template>
  <div class="menu flex flex-row items-center gap-2 p-2 border m-1 rounded shadow-sm">
    <label class="my-1 pl-2 w-2/12" for="menu--book">
      Wybierz księgę
    </label>
    <div class="my-1 w-8/12 select-wrapper">
      <select v-model="bibleStore.book" class="form-control" id="menu--book">
        <option v-for="(text, book) in bibleStore.bible.books" :key="book">{{ book }}</option>
      </select>
    </div>
    <div class="my-1 w-2/12 text-nowrap">
      <a @click="bibleStore.read(true)" href="#" class="btn btn-light border btn-block">
        <i class="fa-solid fa-book"></i> Wszystkie
      </a>
    </div>
  </div>
</template>