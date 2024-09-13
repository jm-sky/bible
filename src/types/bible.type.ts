export type TTitle = string
export type TChapterNo = string

export interface IVerse {
  lp: string
  text: string
}

export type IBook = Record<TChapterNo, IVerse[]>

export type IBooks = Record<TTitle, IBook>

export interface IBible {
  title: string
  publisher: string
  books: IBooks
}
