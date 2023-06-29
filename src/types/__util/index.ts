export * from './ratings'
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type Nullable<T> = null | T
export type Localizable<T> = { en: T, ru: T }
export type LocalizableText = Localizable<string>
export interface WithTimestamps {
    createdAt: Date
    updatedAt: Date
}

export type ApiType<T> = {
    [k in keyof T]: (T[k] extends Date ? string : T[k])
}
export class ISODateString extends String {}