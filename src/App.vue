<script setup lang="ts">
import BibleContent from './components/BibleContent.vue'
import BibleLoader from './components/BibleLoader.vue'
import BibleMenu from './components/BibleMenu.vue'
import BibleVersions from './components/BibleVersions.vue'
import FontResizer from './components/FontResizer.vue'
import LawModal from './components/LawModal.vue'
import OptionsMenu from './components/OptionsMenu.vue'
import OptionsModal from './components/OptionsModal.vue'
import SearchField from './components/SearchField.vue'
import SearchModal from './components/SearchModal.vue'
import { useBibleStore } from './stores/bible'
import { useOptionsStore } from './stores/options'
import { useSearchStore } from './stores/search'

const bibles = useBibleStore()
const options = useOptionsStore()
const search = useSearchStore()

// watch(loading => {
//   if (this.loading === false && window.location.hash) {
//     this.goToHash();
//   }
// })

// 'config.showOptions'() {
//   if (this.config.showOptions) {
//     this.config.showSearch = false;
//     this.config.showLaw = false;
//   }
//   $(this.$refs.optionsModal.$el).modal(this.config.showOptions ? 'show' : 'hide');
// },
// book() {
//   window.DEBUG ? console.log('[Bible][watch][book]:', this.book, ' | showAll:', this.showAll) : false;
//   this.showAll = false;
// },

// $(document).on('copy', this.copy);

// const = copy() => {
//   if (this.config.copyFormating === false) {
//     return
//   }

//   let sel = window.getSelection(),
//       starting = $(sel.anchorNode.parentElement).data('paragraph') || {},
//       ending = $(sel.focusNode.parentElement).data('paragraph') || {},
//       $copyFooter = $(`<small class="text-muted"></small>`),
//       $copyHolder = $('<div>', { style: { position: 'absolute', left: '-99999px' } }),
//       info;

//   if (starting && starting.book && starting.chapter) {
//     info = `${starting.book} ${starting.chapter}:${starting.verse}`
//   }

//   if (starting != ending && starting.book == ending.book && ending.chapter) {
//     info = (info ? `${info} - ` : ``) + `${ending.chapter}:${ending.verse}`;
//   }

//   if (starting != ending && starting.book != ending.book && ending.book) {
//     info = (info ? `${info} - ` : ``) + `${ending.book} ${ending.chapter}:${ending.verse}`;
//   }

//   $copyFooter.html(`(${info})`);
//   $copyHolder.html(`${sel}`);
//   $copyHolder.append(`<br />`);
//   $copyHolder.append($copyFooter);

//   $('body').append($copyHolder);
//   sel.selectAllChildren($copyHolder[0]);
//   window.setTimeout(() => $copyHolder.remove(), 0);
// }

// const goToHash = () => {
//   nextTick(() => {
//     let paragraph = document.querySelector(window.location.hash)
//     paragraph ? paragraph.scrollIntoView() : false;
//   })
// }
</script>

<template>
  <div id="app" class="p-3" :class="{ 'font-serif': options.fontTypeSerif }">
    <h1 class="mt-4 text-center text-2xl">
      {{ bibles.bible.title ?? 'Biblia' }}
    </h1>
    <h4 class="text-center text-xl italic text-muted">
      {{ bibles.bible.publisher ?? '-' }}
    </h4>

    <BibleMenu />

    <BibleContent />

    <BibleLoader v-if="bibles.loading" />

    <BibleVersions />
    <SearchField />

    <FontResizer />
    <OptionsMenu />

    <SearchModal v-model:is-open="search.show" />
    <LawModal v-model:is-open="options.showLawModal" />
    <OptionsModal v-model:is-open="options.showOptionsModal" />
  </div>
</template>

<style>
.high-contrast,
.high-contrast:not(i) * {
  background: #000;
  color: #fff;
  font-weight: bold;
}
</style>
