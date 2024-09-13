<script setup lang="ts">
import { useOptionsStore } from '@/stores/options'

const options = useOptionsStore()
</script>

<template>
  <div class="fixed bottom-0 left-0 m-1 rounded border bg-white/10 p-1.5 shadow-sm backdrop-blur-xs" style="bottom: 0; left: 0">
    <a class="btn btn-light" tooltip="Większa czcionka" @click="options.fontSizeUp()">
      <i class="fa-solid fa-plus" />
    </a>
    <a class="btn btn-light ml-1" tooltip="Mniejsza czcionka" @click="options.fontSizeDown()">
      <i class="fa-solid fa-minus" />
    </a>
  </div>
</template>
