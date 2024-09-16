import { expect, test } from 'vitest'
import { useCopyFormatter } from './useCopyFormatter'

test('Is one verse reference valid', () => {
  const { isOneVerseReference } = useCopyFormatter({ useCopyFormatting: true })
  expect(isOneVerseReference({ book: 'A', chapter: '1', verse: '1' }, { book: 'A', chapter: '1', verse: '1' })).toBe(true)
  expect(isOneVerseReference({ book: 'A', chapter: '1', verse: '1' }, { book: 'A', chapter: '1', verse: '2' })).toBe(false)
  expect(isOneVerseReference({ book: 'A', chapter: '1', verse: '1' }, { book: 'A', chapter: '2', verse: '1' })).toBe(false)
  expect(isOneVerseReference({ book: 'A', chapter: '1', verse: '1' }, { book: 'B', chapter: '1', verse: '1' })).toBe(false)
})

test('Is one chapter reference valid', () => {
  const { isOneChapterReference } = useCopyFormatter({ useCopyFormatting: true })
  expect(isOneChapterReference({ book: 'A', chapter: '1', verse: '1' }, { book: 'A', chapter: '1', verse: '1' })).toBe(true)
  expect(isOneChapterReference({ book: 'A', chapter: '1', verse: '1' }, { book: 'A', chapter: '1', verse: '2' })).toBe(true)
  expect(isOneChapterReference({ book: 'A', chapter: '1', verse: '1' }, { book: 'A', chapter: '2', verse: '1' })).toBe(false)
  expect(isOneChapterReference({ book: 'A', chapter: '1', verse: '1' }, { book: 'B', chapter: '1', verse: '1' })).toBe(false)
})

test('Is one chapter reference valid', () => {
  const { isOneBookReference } = useCopyFormatter({ useCopyFormatting: true })
  expect(isOneBookReference({ book: 'A', chapter: '1', verse: '1' }, { book: 'A', chapter: '1', verse: '1' })).toBe(true)
  expect(isOneBookReference({ book: 'A', chapter: '1', verse: '1' }, { book: 'A', chapter: '1', verse: '2' })).toBe(true)
  expect(isOneBookReference({ book: 'A', chapter: '1', verse: '1' }, { book: 'A', chapter: '2', verse: '1' })).toBe(true)
  expect(isOneBookReference({ book: 'A', chapter: '1', verse: '1' }, { book: 'B', chapter: '1', verse: '1' })).toBe(false)
})

test('Creates valid one-chapter verse reference', () => {
  const { getReferenceText } = useCopyFormatter({ useCopyFormatting: true })
  const start  = { book: 'James', chapter: '1', verse: '1' }
  const end = { book: 'James', chapter: '1', verse: '21' }
  expect(getReferenceText(start, end)).toBe('James 1:1-21')
})

test('Creates valid multi-chapters verse reference', () => {
  const { getReferenceText } = useCopyFormatter({ useCopyFormatting: true })
  const start  = { book: 'James', chapter: '1', verse: '1' }
  const end = { book: 'James', chapter: '3', verse: '21' }
  expect(getReferenceText(start, end)).toBe('James 1:1-3:21')
})
