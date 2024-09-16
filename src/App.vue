<script setup lang="ts">
import { onMounted } from 'vue'
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
import { useCopyFormatter } from './helpers/useCopyFormatter'
import { useBibleStore } from './stores/bible'
import { useOptionsStore } from './stores/options'
import { useSearchStore } from './stores/search'

const bibles = useBibleStore()
const options = useOptionsStore()
const search = useSearchStore()


// 'config.showOptions'() {
//   if (this.config.showOptions) {
//     this.config.showSearch = false;
//     this.config.showLaw = false;
//   }
//   $(this.$refs.optionsModal.$el).modal(this.config.showOptions ? 'show' : 'hide');
// },


onMounted(() => useCopyFormatter())
</script>

<template>
  <div class="p-3" :class="{ 'font-serif': options.fontTypeSerif }">
    <h1 class="mb-2 mt-6 text-center text-4.5xl">
      {{ bibles.bible.title ?? 'Biblia' }}
    </h1>
    <h4 class="mb-2 text-center text-2xl italic text-muted">
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
  background: #000 !important;
  color: #fff !important;
  font-weight: bold !important;
}
</style>
