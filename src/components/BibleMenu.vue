<script lang="ts" setup>
import { useBibleStore } from '@/stores/bible'

const bibleStore = useBibleStore()
</script>

<template>
  <div class="mx-1 my-2 flex flex-row flex-wrap items-stretch gap-2 rounded border p-2 shadow-sm md:flex-nowrap">
    <label class="flex w-full items-center justify-start pl-2 text-center md:w-2/12 md:text-left" for="menu--book">
      Wybierz księgę
    </label>
    <select id="menu--book" v-model="bibleStore.book" class="form-control w-full md:w-8/12">
      <option v-for="(text, book) in bibleStore.bible.books" :key="book">
        {{ book }}
      </option>
    </select>
    <a class="btn btn-light w-full text-nowrap md:w-2/12" @click="bibleStore.read(true)">
      <i class="fa-solid fa-book" /> Wszystkie
    </a>
  </div>
</template>
