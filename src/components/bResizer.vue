<script setup lang="ts">
import { useConfigStore } from '@/stores/config';

const config = useConfigStore()
</script>

<template>
  <div class="fixed scroller p-1 m-1 shadow-sm border rounded backdrop-blur-sm" style="bottom: 0; left: 0">
    <a @click="config.fontSizeUp" class="btn btn-light btn-sm" tooltip="Większa czcionka">
      <i class="fa-solid fa-plus"></i>
    </a>
    <a @click="config.fontSizeDown" class="btn btn-light btn-sm ml-1" tooltip="Mniejsza czcionka">
      <i class="fa-solid fa-minus"></i>
    </a>
  </div>
</template>
