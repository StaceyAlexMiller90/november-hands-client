import styles from '../Hamburger/Hamburger.module.scss'

const Hamburger = (props) => {
  const { menuOpen, toggleMenu } = props

  const executeOnClick = () => {
    toggleMenu()
  }

  return (
    <button onClick={executeOnClick} className={styles.hamburger}>
      <span className={`${styles.hamburger__line} ${menuOpen && styles.hamburger__line_cross}`}></span>
    </button>
  )
}

export default Hamburger
