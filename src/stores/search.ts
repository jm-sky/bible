import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { IVerse } from '@/types/bible.type'
import { useBibleStore } from './bible'
import { useOptionsStore } from './options'

export interface ISearchResult {
  book: string,
  chapter: string
  verse: IVerse
  needle: string
}

export const useSearchStore = defineStore('search', () => {
  const biblesStore = useBibleStore()
  const optionsStore = useOptionsStore()

  const showResultsModal = ref<boolean>(false)
  const showAdvancedSearchModal = ref<boolean>(false)
  const searchPhrase = ref<string>('')
  const searchResults = ref<ISearchResult[]>([])
  const options = ref({
    highlightClass: 'bg-yellow-200/30 ring rounded',
    highlightTime: 3000,
  })

  const canSearch = computed<boolean>(() => (searchPhrase.value ?? '').length >= 3)
  
  const addSearchResult = (bookTitle: string, chapter: string, verse: IVerse) => {
    const pattern = new RegExp(`(${searchPhrase.value})`, 'i')
    const verseClone = Object.assign({}, verse)

    verseClone.text = verseClone.text.replace(pattern, '<b>$1</b>')

    searchResults.value.push({
      book: bookTitle,
      chapter: chapter,
      verse: verseClone,
      needle: searchPhrase.value,
    })

    showResultsModal.value = true
  }

  const hideOtherModals = () => {
    showAdvancedSearchModal.value = false
    optionsStore.showLawModal = false
    optionsStore.showOptionsModal = false
  }

  const isSearchMatch = (verse: IVerse): boolean => {
    return verse.text.toLowerCase().includes(searchPhrase.value.toLowerCase())
  }

  const search = (selectedBooks?: string[]) => {
    if (!canSearch.value) return

    hideOtherModals()
    
    searchResults.value = []

    Object.keys(biblesStore.bible.books)
    .filter((bookTitle: string) => !selectedBooks?.length || selectedBooks.includes(bookTitle))
    .forEach(bookTitle => {
      Object.keys(biblesStore.bible.books[bookTitle]).forEach(chapterNo => {
        const chapter = biblesStore.bible.books[bookTitle][chapterNo]
        chapter.forEach(verse => {
          if (isSearchMatch(verse)) {
            addSearchResult(bookTitle, chapterNo, verse)
          }
        })
      })
    })
  }

  return {
    showResultsModal,
    showAdvancedSearchModal,
    search,
    options,
    canSearch,
    searchPhrase,
    searchResults,
  }
})
