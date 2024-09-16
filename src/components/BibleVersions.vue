<script setup lang="ts">
import { useBibleStore } from '@/stores/bible'

const bibles = useBibleStore()
</script>

<template>
  <div class="glass-menu fixed left-0 top-0 m-1">
    <select v-model="bibles.version" placeholder="Wersja" class="form-control form-control-sm">
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
