<script setup lang="ts">
import BibleContent from './components/bContent.vue'
import BibleLawModal from './components/bLawModal.vue'
import BibleLoader from './components/bLoader.vue'
import BibleMenu from './components/bMenu.vue'
import BibleOptionsMenu from './components/bOptionsMenu.vue'
import BibleOptionsModal from './components/bOptionsModal.vue'
import BibleResizer from './components/bResizer.vue'
import BibleSearch from './components/bSearch.vue'
import BibleSearchModal from './components/bSearchModal.vue'
import BibleVersions from './components/bVersions.vue'
import { useBibleStore } from './stores/bible'
import { useOptionsStore } from './stores/options'
import { useSearchStore } from './stores/search'

const bibles = useBibleStore()
const options = useOptionsStore()
const search = useSearchStore()
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
    <BibleSearch />

    <BibleResizer />
    <BibleOptionsMenu />

    <BibleSearchModal v-model:is-open="search.show" />
    <BibleLawModal v-model:is-open="options.showLawModal" />
    <BibleOptionsModal v-model:is-open="options.showOptionsModal" />
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
