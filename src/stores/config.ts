import { onBeforeMount, ref } from 'vue'
import { defineStore } from 'pinia'
import { useBibleStore, type IVerse } from './bible'
import { parseJson } from '@/helpers/parseJson'

export interface ISearchResult {
  book: string,
  chapter: string
  verse: IVerse
  needle: string
}

export const useConfigStore = defineStore('config', () => {
  const loading = ref<boolean>(false)
  const showAll = ref<boolean>(false)
  const searchPhrase = ref<string>('')
  const searchResults = ref<ISearchResult[]>([])

  const searchModalRef = ref()
  const lawModalRef = ref()
  const optionsModalRef = ref()

  const options = ref({
    baseUrl: `${window.location.origin}`,
    shelf: 'books',
    fontSize: 1,
    fontTypeSerif: false,
    highContrast: false,
    copyFormating: true,
    search: {
      highlightColor: "#ffa",
      highlightTime: 2000
    },
    showSearch: false,
    showLaw: false,
    showOptions: false,
  })

  const fontSizeDown = () => {
    options.value.fontSize = (options.value.fontSize || 1) - 0.5;
  }

  const fontSizeUp = () => {
    options.value.fontSize = (options.value.fontSize || 1) + 0.5;
  }

  const addSearchResult = (bookTitle: string, chapter: string, verse: IVerse) => {
    const pattern = new RegExp(`(${searchPhrase.value})`, 'i');
    const verseClone = Object.assign({}, verse);

    verseClone.text = verseClone.text.replace(pattern, '<b>$1</b>')

    searchResults.value.push({
      book: bookTitle,
      chapter: chapter,
      verse: verseClone,
      needle: searchPhrase.value,
    });

    options.value.showSearch = true;
  }

  const search = () => {
    if ((searchPhrase.value ?? '').length < 3) return;

    const bibles = useBibleStore()
    searchResults.value = [];

    Object.keys(bibles.bible.books).forEach(bookTitle => {
      Object.keys(bibles.bible.books[bookTitle]).forEach(chapterNo => {
        const chapter = bibles.bible.books[bookTitle][chapterNo];
        chapter.forEach(verse => {
          if (verse.text.toLowerCase().includes(searchPhrase.value.toLowerCase())) {
            addSearchResult(bookTitle, chapterNo, verse);
          }
        });
      });
    });


    onBeforeMount(() => {
      const highContrast = parseJson(localStorage.getItem('Bible.highContrast'));
      if ([true, false].includes(highContrast)) {
        options.value.highContrast = highContrast;
      }

      const fontSize = parseJson(localStorage.getItem('Bible.fontSize'));
      if (isNaN(fontSize) === false) {
        options.value.fontSize = fontSize;
      }

      const fontTypeSerif = parseJson(localStorage.getItem('Bible.fontTypeSerif'));
      if (fontTypeSerif === false || fontTypeSerif === true) {
        options.value.fontTypeSerif = fontTypeSerif;
      }
    })
  }

  return {
    loading,
    showAll,
    searchPhrase,
    searchResults,
    options,
    searchModalRef,
    lawModalRef,
    optionsModalRef,
    fontSizeDown,
    fontSizeUp,
    search,
  }
})
