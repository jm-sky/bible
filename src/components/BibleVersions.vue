<script setup lang="ts">
import { useBibleStore } from '@/stores/bible'

const bibles = useBibleStore()
</script>

<template>
  <div class="fixed left-0 top-0 m-1 rounded border bg-white/10 p-1 shadow-sm backdrop-blur-xs">
    <select v-model="bibles.version" placeholder="Wersja" class="form-control">
      <option v-for="(version, index) in bibles.versions" :key="index">
        {{ version }}
      </option>
    </select>
  </div>
</template>

<style>
.versions {
  top: 0;
  left: 0;
  max-width: 48vw;
}
</style>
