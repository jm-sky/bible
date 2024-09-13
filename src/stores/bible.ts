import { useLocalStorage } from '@vueuse/core'
import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import type { IBible, IBook } from '@/types/bible.type'

export const useBibleStore = defineStore('bible', () => {
  const loading = ref<boolean>(false)
  const showAllBooks = ref<boolean>(false)
  const book = ref<string>('')
  const bible = ref<IBible>({
    title: 'Biblia',
    publisher: '',
    books: {},
  })

  const version = useLocalStorage('Bible.version', '')
  const versions = ref([
    'UBG-NT',
    'UBG-ST-NT',
    'EIB-NT',
    'BW-NT',
    'BW-ST-NT',
    'RSV-NT',
  ])

  const currentBook = computed<IBook>(() => bible.value.books?.[book.value])
  const chapters = computed<string[]>(() => Object.keys(currentBook.value ?? {}))

  const read = async (allBooks: boolean = false) => {
    loading.value = true
    showAllBooks.value = allBooks

    try {
      const response = await axios.get<IBible>(`/books/${version.value}.json`)
      const content = response.data
      loading.value = false
      book.value = Object.keys(content.books)[0]
      bible.value = content
    } catch {
      console.warn('Could not load Bible JSON file.')
    } finally {
      loading.value = false
    }
  }

  watch(version, () => read(), { immediate: true })

  return {
    loading,
    showAllBooks,
    book,
    bible,
    version,
    versions,
    chapters,
    currentBook,
    read,
  }
})
