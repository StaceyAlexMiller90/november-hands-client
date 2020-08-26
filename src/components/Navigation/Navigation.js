import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../Navigation/Navigation.module.scss'

const Navigation = (props) => {
  const router = useRouter()
  const { menuOpen } = props

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.nav__menu} ${menuOpen && styles.nav__menu_open}`}>
        <li>
          <Link href="/collections">
            <a className={`${styles.nav__link} ${router.pathname === '/collections' && styles.nav__link_active}`}>
              Collections
            </a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a className={`${styles.nav__link} ${router.pathname === '/products' && styles.nav__link_active}`}>
              Products
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={`${styles.nav__link} ${router.pathname === '/about' && styles.nav__link_active}`}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a className={`${styles.nav__link} ${router.pathname === '/profile' && styles.nav__link_active}`}>Log In</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
