<script setup lang="ts">
import { useOptionsStore } from '@/stores/options'
import BaseModal from './BaseModal.vue'

const options = useOptionsStore()

const isOpen = defineModel<boolean>('isOpen', { required: true })
</script>

<template>
  <BaseModal v-model:is-open="isOpen" title="Opcje">
    <form class="flex flex-col gap-4 p-4">
      <!-- form-group row -->
      <div class="flex flex-row gap-2">
        <label class="w-3/12">Kontrast</label>
        <div class="w-9/12">
          <div class="flex justify-around gap-4">
            <div class="inline-block">
              <input
                id="highContrast-FALSE"
                v-model="options.highContrast"
                :value="false"
                type="radio"
                class="form-check-input"
              >
              <label class="form-check-label ml-2" for="highContrast-FALSE">Normalny</label>
            </div>
            <div class="inline-block">
              <input
                id="highContrast-TRUE"
                v-model="options.highContrast"
                :value="true"
                type="radio"
                class="form-check-input"
              >
              <label class="form-check-label ml-2" for="highContrast-TRUE">Wysoki</label>
            </div>
          </div>
        </div>
      </div>
      <!-- form-group row -->
      <div class="flex flex-row gap-2">
        <label for="fontSize-input" class="w-3/12">Rozmiar czcionki</label>
        <div class="w-9/12">
          <div class="flex flex-row">
            <a class="btn btn-light -mr-px rounded-e-none" @click="options.fontSizeDown()">
              <i class="fa-solid fa-fw fa-minus" />
            </a>
            <input
              id="fontSize-input"
              v-model="options.fontSize"
              type="number"
              readonly
              class="form-control rounded-none text-center"
            >
            <a class="btn btn-light -ml-px rounded-s-none border" @click="options.fontSizeUp()">
              <i class="fa-solid fa-fw fa-plus" />
            </a>
          </div>
        </div>
      </div>
      <!-- form-group row -->
      <div class="flex flex-row gap-2">
        <label class="w-3/12">Typ czcionki</label>
        <div class="w-9/12">
          <div class="flex justify-around gap-4">
            <div class="inline-block">
              <input
                id="fontTypeSerif-FALSE"
                v-model="options.fontTypeSerif"
                :value="false"
                type="radio"
                class="form-check-input"
              >
              <label class="form-check-label ml-2" for="fontTypeSerif-FALSE">Bezszeryfowa</label>
            </div>
            <div class="inline-block">
              <input
                id="fontTypeSerif-TRUE"
                v-model="options.fontTypeSerif"
                :value="true"
                type="radio"
                class="form-check-input"
              >
              <label class="form-check-label ml-2" for="fontTypeSerif-TRUE">Szeryfowa</label>
            </div>
          </div>
        </div>
      </div>
      <!-- form-group row -->
      <div class="flex flex-row gap-2">
        <label class="w-3/12">Kopiowana treść</label>
        <div class="w-9/12">
          <div class="flex justify-around gap-4">
            <div class="inline-block">
              <input
                id="copyFormating-FALSE"
                v-model="options.useCopyFormatting"
                :value="false"
                type="radio"
                class="form-check-input"
              >
              <label class="form-check-label ml-2" for="copyFormating-FALSE">Nie formatuj</label>
            </div>
            <div class="inline-block">
              <input
                id="copyFormating-TRUE"
                v-model="options.useCopyFormatting"
                :value="true"
                type="radio"
                class="form-check-input"
              >
              <label class="form-check-label ml-2" for="copyFormating-TRUE">Formatuj</label>
            </div>
          </div>
        </div>
      </div>
      <!-- form-group row -->
    </form>
  </BaseModal>
</template>
