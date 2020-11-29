import React, { useState } from 'react'
import Link from 'next/link'
import Navigation from '../Navigation'
import Hamburger from '../Hamburger'
import styles from '../Header/Header.module.scss'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={styles.header}>
      <Link href="/">
        <img className={styles.header__logo} src="/Logo.png" alt="November Hands Logo"></img>
      </Link>
      <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Hamburger menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  )
}

export default Header
