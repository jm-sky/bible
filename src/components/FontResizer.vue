<script setup lang="ts">
import { useOptionsStore } from '@/stores/options'

const options = useOptionsStore()
</script>

<template>
  <div class="glass-menu fixed bottom-0 left-0 m-1 flex gap-1" style="bottom: 0; left: 0">
    <a class="btn btn-sm btn-light aspect-square" tooltip="Większa czcionka" @click="options.fontSizeUp()">
      <i class="fa-solid fa-plus fa-fw" />
    </a>
    <a class="btn btn-sm btn-light aspect-square" tooltip="Mniejsza czcionka" @click="options.fontSizeDown()">
      <i class="fa-solid fa-minus fa-fw" />
    </a>
  </div>
</template>
