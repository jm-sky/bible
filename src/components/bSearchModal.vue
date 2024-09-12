<script setup lang="ts">
import { useBibleStore } from '@/stores/bible';
import { useConfigStore } from '@/stores/config';
import { nextTick } from 'vue';

const config = useConfigStore()
const bibles = useBibleStore()

const seek = (item) => {
  bibles.book = item.book;
  config.options.showSearch = false;

  nextTick(() => {
    // let $linkedVerse = $(`#chapter_${item.chapter}_verse_${item.verse.lp}`);

    // $linkedVerse
    //   .css({ "background-color": config.options.search.highlightColor })
    //   .delay(config.options.search.highlightTime)
    //   .queue(function (next) {
    //     $linkedVerse.css({ "background-color": "unset" });
    //     next();
    //   });
  });
}
</script>

<template>
  <div id="search-modal" class="modal fade" style="background-color: rgba(0,0,0,0.2)">
    <div class="modal-dialog modal-lg">
      <div class="modal-content p-1">
        <a class="btn btn-primary text-light m-1" data-dismiss="modal">
          <i class="fa-solid fa-times"></i> Zamknij
        </a>
        <div class="results">
          <div v-for="(item, index) in config.searchResults" :key="index" class="px-2 py-1 m-1 border rounded">
            <span v-html="item.verse.text"></span>
            <div class="clearfix"></div>
            <a @click="seek(item)" :href="`#chapter_${item.chapter}`" class="float-right small text-muted">
              {{ item.book }} {{ item.chapter }}:{{ item.verse.lp }}
            </a>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
