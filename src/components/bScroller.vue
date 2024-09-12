<script setup lang="ts">
import { useConfigStore } from '@/stores/config';

const config = useConfigStore()
</script>

<template>
  <div class="fixed resizer p-1 m-1 shadow-sm border rounded backdrop-blur-sm">
    <a @click="config.options.showLaw = !config.options.showLaw" tooltip="Nota prawna" class="btn btn-sm mr-1"
      :class="config.options.showLaw ? 'btn-primary text-light' : 'btn-light'">
      <i class="fa-solid fa-gavel"></i>
    </a>
    <a @click="config.options.showOptions = !config.options.showOptions" tooltip="Opcje" class="btn btn-sm mr-1"
      :class="config.options.showOptions ? 'btn-primary text-light' : 'btn-light'">
      <i class="fa-solid fa-cog"></i>
    </a>
    <a @click="config.options.highContrast = !config.options.highContrast" tooltip="Kontrast" class="btn btn-sm mr-1"
      :class="config.options.highContrast ? 'btn-primary text-light' : 'btn-light'">
      <i class="fa-solid fa-adjust"></i>
    </a>
    <a href="javascript:window.scrollTo(0, 0)" class="btn btn-light btn-sm" tooltip="Do góry">
      <i class="fa-solid fa-arrow-up"></i>
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
