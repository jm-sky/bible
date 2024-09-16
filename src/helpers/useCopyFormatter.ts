import { useEventListener } from '@vueuse/core'
import type { IParagraphData } from '@/components/BibleBook.vue'
import { parseJson } from './parseJson'

export const useCopyFormatter = ({ useCopyFormatting }: { useCopyFormatting: boolean}) => {

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

  const getReferenceText = (start: IParagraphData, end: IParagraphData): string => {
    if (isOneVerseReference(start, end)) {
      return `${start.book} ${start.chapter}:${start.verse}`

    } else if (isOneChapterReference(start, end)) {
      return `${start.book} ${start.chapter}:${start.verse}-${end.verse}`

    } else if (isOneBookReference(start, end)) {
      return `${start.book} ${start.chapter}:${start.verse}-${end.chapter}:${end.verse}`
    }
    
    return `${start.book} ${start.chapter}:${start.verse} - ${end.book} ${end.chapter}:${end.verse}`
  }

  const createFooterElement = (start: IParagraphData, end: IParagraphData): HTMLElement => {
    const footerText = getReferenceText(start, end)
    const footerElement = document.createElement('small')
    footerElement.classList.add('text-muted')
    footerElement.innerHTML = `(${footerText})`

    return footerElement
  }

  const createWrapperElement = (selection: Selection): HTMLElement => {
    const wrapperElement = document.createElement('div')
    wrapperElement.style.position = 'absolute'
    wrapperElement.style.left = '-99999px'
    wrapperElement.innerHTML = `${selection}`

    return wrapperElement
  }

  const createWrapperElementWithFooter = (selection: Selection, start: IParagraphData, end: IParagraphData): HTMLElement => {
    const wrapperElement = createWrapperElement(selection)
    const footerElement = createFooterElement(start, end)
    wrapperElement.append('<br />')
    wrapperElement.append(footerElement)
    
    return wrapperElement
  }

  const copyHandler = () => {
    if (useCopyFormatting === false) return
  
    const selection: Selection | null = window.getSelection()

    if (!selection) return
    if (!selection.anchorNode?.parentElement) return
    if (!selection.focusNode?.parentElement) return

    const starting: IParagraphData = getNodesParagraph(selection.anchorNode.parentElement.closest('[data-paragraph]'))
    const ending: IParagraphData = getNodesParagraph(selection.focusNode.parentElement.closest('[data-paragraph]'))
    
    if (!starting.book) return
    
    const wrapperElement = createWrapperElementWithFooter(selection, starting, ending)
  
    document.body.append(wrapperElement)
    selection.selectAllChildren(wrapperElement)
    window.setTimeout(() => wrapperElement.remove(), 0)
  }
  
  const addListener = (target: DocumentOrShadowRoot = document, event: keyof GlobalEventHandlersEventMap = 'copy') => useEventListener(target, event, copyHandler)

  return {
    addListener,
    getNodesParagraph,
    isOneVerseReference,
    isOneChapterReference,
    isOneBookReference,
    getReferenceText,
    createFooterElement,
    createWrapperElement,
    createWrapperElementWithFooter,
  }
}
