import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useOptionsStore = defineStore('options', () => {
  const showOptionsModal = ref(false)
  const showLawModal = ref(false)
  const highContrast = useLocalStorage<boolean>('Bible.highContrast', false)
  const fontSize = useLocalStorage<number>('Bible.fontSize', 1)
  const fontTypeSerif = useLocalStorage<boolean>('Bible.fontTypeSerif', false)
  const copyFormating = useLocalStorage<boolean>('Bible.copyFormating', true)

  const fontSizeDown = () => {
    fontSize.value = (fontSize.value || 1) - 0.5
  }

  const fontSizeUp = () => {
    fontSize.value = (fontSize.value || 1) + 0.5
  }

  const closeOptionsModal = () => showOptionsModal.value = false
  const closeLawModal = () => showLawModal.value = false

  watch(highContrast, () => {
    document.body.classList.toggle('high-contrast', highContrast.value)
  })

  return {
    showOptionsModal,
    showLawModal,
    highContrast,
    fontSize,
    fontTypeSerif,
    copyFormating,
    closeOptionsModal,
    closeLawModal,
    fontSizeDown,
    fontSizeUp,
  }
})
