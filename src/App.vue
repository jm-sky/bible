<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useConfigStore } from './stores/config'
import { useBibleStore } from './stores/bible'
import BibleMenu from './components/bMenu.vue'
import BibleContent from './components/bContent.vue'
import BibleLoader from './components/bLoader.vue'
import BibleSearchModal from './components/bSearchModal.vue'
import BibleLawModal from './components/bLawModal.vue'
import BibleOptionsModal from './components/bOptionsModal.vue'
import BibleResizer from './components/bResizer.vue'
import BibleScroller from './components/bScroller.vue'
import BibleSearch from './components/bSearch.vue'
import BibleVersions from './components/bVersions.vue'

const config = useConfigStore()
const bibles = useBibleStore()
const searchModal = ref()
const lawModal = ref()
const optionsModal = ref()

onMounted(() => {
  config.searchModalRef = searchModal;
  config.lawModalRef = lawModal;
  config.optionsModalRef = optionsModal;

  // $(searchModal.value).on('hidden.bs.modal', () => config.options.showSearch = false);
  // $(lawModal.value).on('hidden.bs.modal', () => config.options.showLaw = false);
  // $(optionsModal.value).on('hidden.bs.modal', () => config.options.showOptions = false);
})
</script>

<template>
  <div id="app" class="p-3" :class="{ 'font-serif': config.options.fontTypeSerif }">
    <h1 class="text-2xl text-center mt-4">{{ bibles.bible.title ?? 'Biblia' }}</h1>
    <h4 class="text-xl text-center text-muted italic">{{ bibles.bible.publisher ?? '-' }}</h4>

    <BibleMenu />

    <BibleContent />

    <BibleLoader v-if="config.loading" />

    <BibleVersions />
    <BibleSearch />

    <BibleResizer />
    <BibleScroller />

    <BibleSearchModal ref="searchModal" />
    <BibleLawModal ref="lawModal" />
    <BibleOptionsModal ref="optionsModal" />
  </div>
</template>

<style lang="scss">
.high-contrast,
.high-contrast:not(i) * {
  background: #000;
  color: #fff;
  font-weight: bold;
}
</style>
