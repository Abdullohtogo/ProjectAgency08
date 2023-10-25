type TClass =
  | string
  | string[]
  | Record<string, boolean>
  | Record<string, boolean>[];

export type TClassName = TClass | TClass[];

export interface TDefaultResponse<T> {
  count: number
  next: string | null
  previous: string | null
  last_update_date?: string
  results: T[]
}