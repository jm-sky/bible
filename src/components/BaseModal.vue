<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const { title, withoutCloseButton = false } = defineProps<{
  title?: string
  withoutCloseButton?: boolean
}>()

const isOpen = defineModel<boolean>('isOpen', { required: true })

const closeModal = () => isOpen.value = false
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
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
            <DialogPanel
              class="w-full max-w-2xl overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle v-if="title" as="h3" class="border-b p-5 text-xl font-semibold leading-6 text-gray-900">
                {{ title }}
              </DialogTitle>

              <slot />

              <div v-if="!withoutCloseButton" class="p-5">
                <button
                  type="button"
                  class="btn btn-light w-full"
                  @click="closeModal()"
                >
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
