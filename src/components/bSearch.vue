<script setup lang="ts">
import { useConfigStore } from '@/stores/config';

const config = useConfigStore()
</script>

<template>
  <div class="fixed search p-1 m-1 shadow-sm border rounded" style="top: 0; right: 0; max-width: 48vw;">
    <div class="flex flex-row input-group-sm">
      <input @keyup.enter="config.search()" v-model="config.searchPhrase" placeholder="Szukaj"
        class="form-control rounded-e-none" type="text" />
      <div class="input-group-append">
        <button @click="config.search()" class="btn btn-light border rounded-s-none -translate-x-px" type="button">
          <i class="fa-solid fa-search fa-fw"></i>
        </button>
      </div>
    </div>
  </div>
</template>
