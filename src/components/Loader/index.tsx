import { RotatingLines } from 'react-loader-spinner'
import styles from './styles.module.css'

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <RotatingLines
        strokeColor="#001b74"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  )
}

export default Loader
