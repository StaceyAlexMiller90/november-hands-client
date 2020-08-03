import React from 'react'
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
          <Link href="/">
            <a className={`${styles.nav__link} ${router.pathname == '/' && styles.nav__link_active}`}>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
