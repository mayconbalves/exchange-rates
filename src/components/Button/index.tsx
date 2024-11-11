import styles from './styles.module.css'
import { ButtonProps } from './types'

const Button = ({ disabled, onClick, title }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}

export default Button
