<template>
  <div id="app" class="p-3" :class="{ 'font-serif': $root.config.fontTypeSerif }">
    <h1 class="text-center mt-4">{{ $root.title }}</h1>
    <h4 class="text-center text-muted font-italic">{{ $root.publisher }}</h4>

    <b-menu></b-menu>

    <b-content></b-content>

    <b-loader v-if="$root.loading"></b-loader>

    <b-versions></b-versions>
    <b-search></b-search>

    <b-resizer></b-resizer>
    <b-scroller></b-scroller>

    <b-search-modal ref="searchModal"></b-search-modal>
    <b-law-modal ref="lawModal"></b-law-modal>
    <b-options-modal ref="optionsModal"></b-options-modal>
  </div>
</template>

<script>
import * as $ from 'jquery'

import bContent from './components/bContent'
import bLoader from './components/bLoader'
import bMenu from './components/bMenu'
import bSearchModal from './components/bSearchModal'
import bLawModal from './components/bLawModal'
import bOptionsModal from './components/bOptionsModal'
import bResizer from './components/bResizer'
import bScroller from './components/bScroller'
import bSearch from './components/bSearch'
import bVersions from './components/bVersions'

export default {
  //====================
  name: 'app',
  //====================
  components: {
    bContent, bLoader, bMenu, bSearchModal, bLawModal, bOptionsModal, bResizer, bScroller, bSearch, bVersions
  },
  //====================
  mounted() {
    this.$root.$refs.searchModal = this.$refs.searchModal;
    this.$root.$refs.lawModal = this.$refs.lawModal;
    this.$root.$refs.optionsModal = this.$refs.optionsModal;

    $(this.$refs.searchModal.$el).on('hidden.bs.modal', () => this.$root.config.showSearch = false);
    $(this.$refs.lawModal.$el).on('hidden.bs.modal', () => this.$root.config.showLaw = false);
    $(this.$refs.optionsModal.$el).on('hidden.bs.modal', () => this.$root.config.showOptions = false);
  }
  //====================
}
</script>

<style lang="scss">
.high-contrast, .high-contrast:not(i) * {
  background: #000;
  color: #fff;
  font-weight: bold;
}
</style>
