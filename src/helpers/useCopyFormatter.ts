import { useOptionsStore } from '@/stores/options'
import { parseJson } from './parseJson'

export const useCopyFormatter = () => {
  const options = useOptionsStore()

  const copyHandler = () => {
    if (options.copyFormating === false) return
  
    const selection = window.getSelection()

    if (!selection) return
    if (!selection.anchorNode?.parentElement) return
    if (!selection.focusNode?.parentElement) return

    const starting = parseJson(selection.anchorNode.parentElement.dataset.paragraph) ?? {}
    const ending = parseJson(selection.focusNode.parentElement.dataset.paragraph) ??  {}
    let info

    if (starting && starting?.book && starting?.chapter) {
      info = `${starting.book} ${starting.chapter}:${starting.verse}`
    }
  
    if (starting != ending && starting.book == ending.book && ending.chapter) {
      info = (info ? `${info} - ` : '') + `${ending.chapter}:${ending.verse}`
    }
  
    if (starting != ending && starting.book != ending.book && ending.book) {
      info = (info ? `${info} - ` : '') + `${ending.book} ${ending.chapter}:${ending.verse}`
    }
  
    const $copyFooter = document.createElement('small')
    const $copyHolder = document.createElement('div')
    $copyFooter.classList.add('text-muted')
    $copyHolder.style.position = 'absolute'
    $copyHolder.style.left = '-99999px'
    $copyFooter.innerHTML = `(${info})`
    $copyHolder.innerHTML = `${selection}`
    $copyHolder.append('<br />')
    $copyHolder.append($copyFooter)
  
    document.body.append($copyHolder)
    selection.selectAllChildren($copyHolder)
    window.setTimeout(() => $copyHolder.remove(), 0)
  }
  
  document.addEventListener('copy', copyHandler)
}
