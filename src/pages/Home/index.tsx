import React, { useCallback, useEffect, useState } from 'react'
import { Button, Loader, Pagination, Table } from '~/components'
import { useToast } from '~/contexts/useToast'
import { fetchRates } from '~/services/rates'
import styles from './styles.module.css'
import { RateItem } from './types'

const Home: React.FC = () => {
  const [rates, setRates] = useState<RateItem[]>([])
  const [date, setDate] = useState<string | null>(null)
  const [load, setLoad] = useState<boolean>(false)
  const { showToast } = useToast()

  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 5

  const fetchAllRates = useCallback(async () => {
    setLoad(true)
    try {
      const data = await fetchRates()
      if (Array.isArray(data)) {
        setRates(data)
        setDate(data[0]?.date || null)
      }
      showToast('Sucesso ao trazer os dados.', 'success')
    } catch {
      showToast('Erro ao carregar registros.', 'error')
    } finally {
      setLoad(false)
    }
  }, [showToast])

  useEffect(() => {
    fetchAllRates()
  }, [fetchAllRates])

  const indexOfLastRate = currentPage * itemsPerPage
  const indexOfFirstRate = indexOfLastRate - itemsPerPage
  const currentRates = rates.slice(indexOfFirstRate, indexOfLastRate)

  return (
    <div className={styles.wrapper}>
      <h1>Os valores da tabela em relação ao Euro</h1>
      {rates.length > 0 && date && (
        <>
          <Table rates={currentRates} date={date} />

          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={rates.length}
            onPageChange={setCurrentPage}
          />
        </>
      )}
      <div className={styles.wrapper__button}>
        <Button onClick={fetchAllRates} title="Atualizar" />
      </div>
      {load && <Loader />}
    </div>
  )
}

export default Home
