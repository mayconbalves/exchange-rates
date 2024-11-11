import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img src="./logo.png" alt="B3 logo" />
      <h2 className={styles.wrapper__title}>Exchange Rates</h2>
    </header>
  )
}

export default Header
