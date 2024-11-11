export type TableDate = {
  rate: string
  value: number
  date: string
  timestamp: number
}

export type SortConfig = {
  key: keyof TableDate | null
  direction: 'ascending' | 'descending'
}

export type TableProps = {
  rates: TableDate[]
  date: string
}
