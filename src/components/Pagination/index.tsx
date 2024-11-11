import React from 'react'
import Button from '~/components/Button'
import styles from './styles.module.css'
import { PaginationProps } from './types'

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  return (
    <div className={styles.wrapper}>
      <Button onClick={prevPage} disabled={currentPage === 1} title="Anterior" />

      <span className={styles.pagination__span}>
        {' '}
        Página {currentPage} de {totalPages}{' '}
      </span>
      <Button onClick={nextPage} disabled={currentPage === totalPages} title="Próxima" />
    </div>
  )
}

export default Pagination
