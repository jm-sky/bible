<script lang="ts" setup>
import { useBibleStore } from '@/stores/bible'

const bibleStore = useBibleStore()
</script>

<template>
  <div class="m-1 flex flex-row flex-wrap items-center gap-2 rounded border p-2 shadow-sm md:flex-nowrap">
    <label class="my-1 w-full pl-2 text-center md:w-2/12 md:text-left" for="menu--book">
      Wybierz księgę
    </label>
    <div class="my-1 w-full md:w-8/12">
      <select id="menu--book" v-model="bibleStore.book" class="form-control">
        <option v-for="(text, book) in bibleStore.bible.books" :key="book">
          {{ book }}
        </option>
      </select>
    </div>
    <div class="my-1 w-full text-nowrap md:w-2/12">
      <a class="btn btn-light border" @click="bibleStore.read(true)">
        <i class="fa-solid fa-book" /> Wszystkie
      </a>
    </div>
  </div>
</template>
