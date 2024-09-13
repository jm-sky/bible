<script setup lang="ts">
import { useOptionsStore } from '@/stores/options'

const options = useOptionsStore()
</script>

<template>
  <div class="fixed bottom-0 right-0 m-1 rounded border bg-white/10 p-1 shadow-sm backdrop-blur-xs">
    <a
      tooltip="Nota prawna"
      class="btn mr-1"
      :class="options.showLawModal ? 'btn-primary text-light' : 'btn-light'"
      @click="options.showLawModal = !options.showLawModal"
    >
      <i class="fa-solid fa-gavel" />
    </a>
    <a
      tooltip="Opcje"
      class="btn mr-1"
      :class="options.showOptionsModal ? 'btn-primary text-light' : 'btn-light'"
      @click="options.showOptionsModal = !options.showOptionsModal"
    >
      <i class="fa-solid fa-cog" />
    </a>
    <a
      tooltip="Kontrast"
      class="btn mr-1"
      :class="options.highContrast ? 'btn-primary text-light' : 'btn-light'"
      @click="options.highContrast = !options.highContrast"
    >
      <i class="fa-solid fa-adjust" />
    </a>
    <a href="javascript:window.scrollTo(0, 0)" class="btn btn-light" tooltip="Do góry">
      <i class="fa-solid fa-arrow-up" />
    </a>
  </div>
</template>

<style>
.resizer {
  bottom: 0;
  right: 0;
  z-index: 10000
}
</style>
