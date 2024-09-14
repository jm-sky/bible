import { useEventListener } from '@vueuse/core'
import type { IParagraphData } from '@/components/BibleBook.vue'
import { useOptionsStore } from '@/stores/options'
import { parseJson } from './parseJson'

export const useCopyFormatter = () => {
  const options = useOptionsStore()

  const getNodesParagraph = (node: HTMLElement | null): IParagraphData => {
    return parseJson(node?.dataset.paragraph) ?? {}
  }

  const isOneVerseReference = (start: IParagraphData, end: IParagraphData): boolean => {
    return start?.book === end?.book && start?.chapter == end?.chapter && start?.verse === end?.verse
  }

  const isOneChapterReference = (start: IParagraphData, end: IParagraphData): boolean => {
    return start?.book === end?.book && start?.chapter == end?.chapter
  }

  const isOneBookReference = (start: IParagraphData, end: IParagraphData): boolean => {
    return start?.book === end?.book
  }

  const copyHandler = () => {
    if (options.copyFormating === false) return
  
    const selection = window.getSelection()

    if (!selection) return
    if (!selection.anchorNode?.parentElement) return
    if (!selection.focusNode?.parentElement) return

    const starting: IParagraphData = getNodesParagraph(selection.anchorNode.parentElement.closest('[data-paragraph'))
    const ending: IParagraphData = getNodesParagraph(selection.focusNode.parentElement.closest('[data-paragraph'))
    let footer

    if (!starting.book) return

    if (isOneVerseReference(starting, ending)) {
      footer = `${starting.book} ${starting.chapter}:${starting.verse}`

    } else if (isOneChapterReference(starting, ending)) {
      footer = `${starting.book} ${starting.chapter}:${starting.verse}-${ending.verse}`

    } else if (isOneBookReference(starting, ending)) {
      footer = `${starting.book} ${starting.chapter}:${starting.verse}-${ending.chapter}:${ending.verse}`

    } else {
      footer = `${starting.book} ${starting.chapter}:${starting.verse} - ${ending.book} ${ending.chapter}:${ending.verse}`
    }
  
    const $copyFooter = document.createElement('small')
    const $copyHolder = document.createElement('div')
    $copyFooter.classList.add('text-muted')
    $copyHolder.style.position = 'absolute'
    $copyHolder.style.left = '-99999px'
    $copyFooter.innerHTML = `(${footer})`
    $copyHolder.innerHTML = `${selection}`
    $copyHolder.append('<br />')
    $copyHolder.append($copyFooter)
  
    document.body.append($copyHolder)
    selection.selectAllChildren($copyHolder)
    window.setTimeout(() => $copyHolder.remove(), 0)
  }
  
  useEventListener(document, 'copy', copyHandler)
}
