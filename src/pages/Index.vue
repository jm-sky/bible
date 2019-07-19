<template>
  <q-page class="p-2">

    <h1 class="text-center mt-3">{{ $root.$app.title }}</h1>
    <h4 class="text-center text-muted font-italic">{{ $root.$app.publisher }}</h4>

    <b-content></b-content>

  </q-page>
</template>

<style>
</style>

<script>
import bContent from '../components/bContent'


export default {
  name: 'PageIndex',
  components: {
    bContent
  },
}
</script>
