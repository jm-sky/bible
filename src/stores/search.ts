import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IVerse } from '@/types/bible.type'
import { useBibleStore } from './bible'

export interface ISearchResult {
  book: string,
  chapter: string
  verse: IVerse
  needle: string
}

export const useSearchStore = defineStore('search', () => {
  const show = ref(false)
  const searchPhrase = ref<string>('')
  const searchResults = ref<ISearchResult[]>([])
  const options = ref({
    highlightClass: 'bg-yellow-200/85 ring rounded',
    highlightTime: 3000,
  })

  const closeModal = () => show.value = false

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

    show.value = true
  }

  const search = () => {
    if ((searchPhrase.value ?? '').length < 3) return

    const bibles = useBibleStore()
    searchResults.value = []

    Object.keys(bibles.bible.books).forEach(bookTitle => {
      Object.keys(bibles.bible.books[bookTitle]).forEach(chapterNo => {
        const chapter = bibles.bible.books[bookTitle][chapterNo]
        chapter.forEach(verse => {
          if (verse.text.toLowerCase().includes(searchPhrase.value.toLowerCase())) {
            addSearchResult(bookTitle, chapterNo, verse)
          }
        })
      })
    })
  }

  return {
    show,
    closeModal,
    search,
    options,
    searchPhrase,
    searchResults,
  }
})
