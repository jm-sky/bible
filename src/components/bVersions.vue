<script setup lang="ts">
import { useBibleStore } from '@/stores/bible';

const bibles = useBibleStore()
</script>

<template>
  <div class="fixed versions p-1 m-1 shadow-sm border rounded">
    <select v-model="bibles.version" placeholder="Wersja" class="form-control form-control-sm">
      <option v-for="(version, index) in bibles.versions" :key="index">{{ version }}</option>
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
