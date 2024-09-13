<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'
import { useOptionsStore } from '@/stores/options'

const options = useOptionsStore()

</script>

<template>
  <TransitionRoot appear :show="options.showOptionsModal" as="template">
    <Dialog
      as="div"
      :open="options.showOptionsModal"
      class="relative z-10"
      @close="options.closeOptionsModal()"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-xl overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="border-b p-4 text-xl font-semibold leading-6 text-gray-900">
                Opcje
              </DialogTitle>

              <form class="flex flex-col gap-4 p-4">
                <!-- form-group row -->
                <div class="flex flex-row gap-2">
                  <label class="col-form-label w-3/12">Kontrast</label>
                  <div class="w-9/12">
                    <div class="justify-content-around flex gap-4">
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
                  <label for="fontSize-input" class="col-form-label w-3/12">Rozmiar czcionki</label>
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
                  <label class="col-form-label w-3/12">Typ czcionki</label>
                  <div class="w-9/12">
                    <div class="justify-content-around flex gap-4">
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
                  <label class="col-form-label w-3/12">Kopiowana treść</label>
                  <div class="w-9/12">
                    <div class="justify-content-around flex gap-4">
                      <div class="inline-block">
                        <input
                          id="copyFormating-FALSE"
                          v-model="options.copyFormating"
                          :value="false"
                          type="radio"
                          class="form-check-input"
                        >
                        <label class="form-check-label ml-2" for="copyFormating-FALSE">Nie formatuj</label>
                      </div>
                      <div class="inline-block">
                        <input
                          id="copyFormating-TRUE"
                          v-model="options.copyFormating"
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

              <div class="border-t p-4">
                <button type="button" class="btn btn-light w-full" @click="options.closeOptionsModal()">
                  <i class="fa-solid fa-times fa-fw" />
                  Zamknij
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
