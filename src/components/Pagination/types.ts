export type PaginationProps = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  onPageChange: (page: number) => void
}
