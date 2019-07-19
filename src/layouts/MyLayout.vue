<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Biblia
        </q-toolbar-title>

        <b-search></b-search>

        <q-btn
          flat
          dense
          round
          @click="rightDrawerOpen = !rightDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- drawe -->
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <!-- LIST -->
      <q-list>

        <q-item-label header>Wersje</q-item-label>
        <q-item>
          <q-item-section avatar>
            <q-icon name="book" />
          </q-item-section>
          <q-item-section>
            <b-versions></b-versions>
          </q-item-section>
        </q-item>

        <q-item-label header>Księgi</q-item-label>
        <q-item>
          <q-item-section avatar>
            <i class="fa fa-fw fa-book fa-2x" />
          </q-item-section>
          <q-item-section>
            <select v-model="$root.$app.book" class="form-control">
                <option v-for="(text, book) in $root.$app.bible.books" :key="book">{{ book }}</option>
            </select>
            <q-btn @click="$root.$app.read(true)" class="mt-2">
              <i class="fa fa-fw fa-book mr-1"></i> Wszystkie
            </q-btn>
          </q-item-section>
        </q-item>

      </q-list>
      <!-- LIST -->
    </q-drawer>
    <!-- drawe -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-drawer
      v-model="rightDrawerOpen"
      bordered
      side="right"
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item>
          <q-btn @click="$root.$app.config.highContrast = !$root.$app.config.highContrast"
                  :class="$root.$app.config.highContrast ? 'btn-primary' : 'btn-light'">
            <i class="fa fa-fw fa-adjust mr-1"></i>
            Zmień kontrast
          </q-btn>
        </q-item>
      </q-list>
    </q-drawer>

    <b-loader v-if="$root.$app.loading"></b-loader>
    <b-resizer></b-resizer>
    <b-scroller></b-scroller>
    <b-modal></b-modal>
    
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import bSearch from '../components/bSearch'
import bVersions from '../components/bVersions'
import bLoader from '../components/bLoader'
import bModal from '../components/bModal'
import bResizer from '../components/bResizer'
import bScroller from '../components/bScroller'

export default {
  name: 'MyLayout',
  components: {
    bSearch, bVersions, bLoader, bModal, bResizer, bScroller
  },
  data () {
    return {
      // leftDrawerOpen: this.$q.platform.is.desktop,
      leftDrawerOpen: false,
      rightDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
