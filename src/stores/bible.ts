import { computed, onBeforeMount, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useConfigStore } from './config'
import axios from 'axios'
import { parseJson } from '@/helpers/parseJson'

export type TTitle = string
export type TChapterNo = string

export interface IVerse {
  lp: string
  text: string
}

export type IBook = Record<TChapterNo, IVerse[]>

export interface IBible {
  title: string
  publisher: string
  books: Record<TTitle, IBook>
}

export const useBibleStore = defineStore('bible', () => {
  const book = ref<string>('')
  const bible = ref<IBible>({
    title: 'Biblia',
    publisher: '',
    books: {},
  })

  const version = ref('')
  const versions = ref([
    `UBG-NT`,
    `UBG-ST-NT`,
    `EIB-NT`,
    `BW-NT`,
    `BW-ST-NT`,
    `RSV-NT`,
  ])

  const currentBook = computed<IBook>(() => bible.value.books?.[book.value])
  const chapters = computed<string[]>(() => Object.keys(currentBook.value ?? {}))

  watch(version, () => read())

  const read = (showAll: boolean = false) => {
    const config = useConfigStore()
    config.loading = true;
    config.showAll = showAll;

    axios.get<IBible>(`/${config.options.shelf}/${version.value}.json`)
      .then(response => {
        const content = response.data
        config.loading = false;
        book.value = Object.keys(content.books)[0];
        bible.value = content;
      })
      .catch(() => config.loading = false);
  }

  onBeforeMount(() => {
    let userVersion = parseJson(localStorage.getItem('Bible.version'));
    userVersion = (userVersion || '').replace('.json', '');
    if (versions.value.includes(userVersion)) {
      version.value = userVersion;
    } else {
      version.value = versions.value[0];
    }
  })

  return {
    book,
    bible,
    version,
    versions,
    chapters,
    currentBook,
    read,
  }
})
