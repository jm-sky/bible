<script setup lang="ts">
import { useOptionsStore } from '@/stores/options'

const options = useOptionsStore()

const scrollTop = () =>window.scrollTo(0, 0)
</script>

<template>
  <div class="glass-menu fixed bottom-0 right-0 m-1 flex gap-1">
    <a
      class="btn btn-sm aspect-square"
      :class="options.showLawModal ? 'btn-primary text-light' : 'btn-light'"
      tooltip="Nota prawna"
      @click="options.showLawModal = !options.showLawModal"
    >
      <i class="fa-solid fa-gavel fa-fw" />
    </a>
    <a
      class="btn btn-sm aspect-square"
      :class="options.showOptionsModal ? 'btn-primary text-light' : 'btn-light'"
      tooltip="Opcje"
      @click="options.showOptionsModal = !options.showOptionsModal"
    >
      <i class="fa-solid fa-cog fa-fw" />
    </a>
    <a
      class="btn btn-sm aspect-square"
      :class="options.highContrast ? 'btn-primary text-light' : 'btn-light'"
      tooltip="Kontrast"
      @click="options.highContrast = !options.highContrast"
    >
      <i class="fa-solid fa-adjust fa-fw" />
    </a>
    <a
      class="btn btn-sm btn-light aspect-square"
      tooltip="Do góry"
      @click="scrollTop"
    >
      <i class="fa-solid fa-arrow-up fa-fw" />
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
