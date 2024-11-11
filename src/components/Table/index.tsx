import React, { useMemo, useState } from 'react'
import { FaSortDown, FaSortUp } from 'react-icons/fa'
import styles from './styles.module.css'
import { SortConfig, TableDate, TableProps } from './types'

const Table: React.FC<TableProps> = ({ rates, date }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: 'ascending'
  })

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    const formattedDate = date.toLocaleString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

    return formattedDate
  }

  const sortedData = useMemo(() => {
    const validData = Array.isArray(rates) ? rates : []
    const sortableItems = [...validData]
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!])
          return sortConfig.direction === 'ascending' ? -1 : 1
        if (a[sortConfig.key!] > b[sortConfig.key!])
          return sortConfig.direction === 'ascending' ? 1 : -1
        return 0
      })
    }
    return sortableItems
  }, [rates, sortConfig])

  const handleSort = (key: keyof TableDate, direction: 'ascending' | 'descending') => {
    setSortConfig({ key, direction })
  }

  const getIconColor = (key: keyof TableDate, direction: 'ascending' | 'descending') => {
    return sortConfig.key === key && sortConfig.direction === direction ? '#3498db' : '#bbb'
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.header}>
            <div className={styles.header__content}>
              Moeda
              <div className={styles.icon__container}>
                <FaSortUp
                  style={{
                    color: getIconColor('rate', 'ascending'),
                    cursor:
                      sortConfig.key === 'rate' && sortConfig.direction === 'ascending'
                        ? 'not-allowed'
                        : 'pointer'
                  }}
                  onClick={() =>
                    sortConfig.key !== 'rate' || sortConfig.direction !== 'ascending'
                      ? handleSort('rate', 'ascending')
                      : undefined
                  }
                />
                <FaSortDown
                  style={{
                    color: getIconColor('rate', 'descending'),
                    cursor:
                      sortConfig.key === 'rate' && sortConfig.direction === 'descending'
                        ? 'not-allowed'
                        : 'pointer'
                  }}
                  onClick={() =>
                    sortConfig.key !== 'rate' || sortConfig.direction !== 'descending'
                      ? handleSort('rate', 'descending')
                      : undefined
                  }
                />
              </div>
            </div>
          </th>
          <th className={styles.header}>
            <div className={styles.header__content}>
              Valor (em EUR)
              <div className={styles.icon__container}>
                <FaSortUp
                  style={{
                    color: getIconColor('value', 'ascending'),
                    cursor:
                      sortConfig.key === 'value' && sortConfig.direction === 'ascending'
                        ? 'not-allowed'
                        : 'pointer'
                  }}
                  onClick={() =>
                    sortConfig.key !== 'value' || sortConfig.direction !== 'ascending'
                      ? handleSort('value', 'ascending')
                      : undefined
                  }
                />
                <FaSortDown
                  style={{
                    color: getIconColor('value', 'descending'),
                    cursor:
                      sortConfig.key === 'value' && sortConfig.direction === 'descending'
                        ? 'not-allowed'
                        : 'pointer'
                  }}
                  onClick={() =>
                    sortConfig.key !== 'value' || sortConfig.direction !== 'descending'
                      ? handleSort('value', 'descending')
                      : undefined
                  }
                />
              </div>
            </div>
          </th>
          <th className={styles.header}>
            <div className={styles.header__content}>
              Horário
              <div className={styles.icon__container}>
                <FaSortUp
                  style={{
                    color: getIconColor('date', 'ascending'),
                    cursor:
                      sortConfig.key === 'date' && sortConfig.direction === 'ascending'
                        ? 'not-allowed'
                        : 'pointer'
                  }}
                  onClick={() =>
                    sortConfig.key !== 'date' || sortConfig.direction !== 'ascending'
                      ? handleSort('date', 'ascending')
                      : undefined
                  }
                />
                <FaSortDown
                  style={{
                    color: getIconColor('date', 'descending'),
                    cursor:
                      sortConfig.key === 'date' && sortConfig.direction === 'descending'
                        ? 'not-allowed'
                        : 'pointer'
                  }}
                  onClick={() =>
                    sortConfig.key !== 'date' || sortConfig.direction !== 'descending'
                      ? handleSort('date', 'descending')
                      : undefined
                  }
                />
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.cell}>
              <p>{item.rate}</p>
            </td>
            <td className={styles.cell}>
              <p>{item.value.toFixed(2)}</p>
            </td>
            <td className={styles.cell}>
              <p>{`${date} às ${formatTimestamp(item.timestamp)}`}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
