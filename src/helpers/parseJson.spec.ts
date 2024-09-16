import { expect, test } from 'vitest'
import { parseJson } from './parseJson'

test('Parses valid JSON string', () => {
  expect(parseJson('{ "id": 1 }')?.id).toBe(1)
})

test('Returns null for empty string', () => {
  expect(parseJson('')).toBe(null)
})

test('Returns null for null', () => {
  expect(parseJson(null)).toBe(null)
})

test('Returns null for undefined', () => {
  expect(parseJson(undefined)).toBe(null)
})
