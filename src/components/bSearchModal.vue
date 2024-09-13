<script setup lang="ts">
import { nextTick } from 'vue'
import { useBibleStore } from '@/stores/bible'
import { useSearchStore, type ISearchResult } from '@/stores/search'

const bibles = useBibleStore()
const search = useSearchStore()

const seek = (item: ISearchResult) => {
  bibles.book = item.book
  search.show = false

  nextTick(() => {
    // let $linkedVerse = $(`#chapter_${item.chapter}_verse_${item.verse.lp}`);

    // $linkedVerse
    //   .css({ "background-color": config.options.search.highlightColor })
    //   .delay(config.options.search.highlightTime)
    //   .queue(function (next) {
    //     $linkedVerse.css({ "background-color": "unset" });
    //     next();
    //   });
  })
}
</script>

<template>
  <div id="search-modal" class="modal fade" style="background-color: rgba(0,0,0,0.2)">
    <div class="modal-dialog modal-lg">
      <div class="modal-content p-1">
        <a class="btn btn-primary m-1" data-dismiss="modal">
          <i class="fa-solid fa-times" /> Zamknij
        </a>
        <div class="">
          <div v-for="(item, index) in search.searchResults" :key="index" class="m-1 rounded border px-2 py-1">
            <span v-html="item.verse.text" />
            <a :href="`#chapter_${item.chapter}`" class="float-right text-muted" @click="seek(item)">
              {{ item.book }} {{ item.chapter }}:{{ item.verse.lp }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
