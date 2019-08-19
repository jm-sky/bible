<template>
  <div id="app" class="p-3">
    <h1 class="text-center mt-4">{{ $root.title }}</h1>
    <h4 class="text-center text-muted font-italic">{{ $root.publisher }}</h4>

    <b-menu></b-menu>

    <b-content></b-content>

    <b-loader v-if="$root.loading"></b-loader>

    <b-versions></b-versions>
    <b-search></b-search>

    <b-resizer></b-resizer>
    <b-scroller></b-scroller>

    <b-modal ref="modal"></b-modal>
  </div>
</template>

<script>
import bContent from './components/bContent'
import bLoader from './components/bLoader'
import bMenu from './components/bMenu'
import bModal from './components/bModal'
import bResizer from './components/bResizer'
import bScroller from './components/bScroller'
import bSearch from './components/bSearch'
import bVersions from './components/bVersions'

export default {
  //====================
  name: 'app',
  //====================
  components: {
    bContent, bLoader, bMenu, bModal, bResizer, bScroller, bSearch, bVersions
  },
  //====================
  mounted() {
    this.$root.$refs.modal = this.$refs.modal;
  }
  //====================
}
</script>

<style lang="scss">
.high-contrast, .high-contrast * {
  background: #000;
  color: #fff;
  font-weight: bold;
}
</style>
