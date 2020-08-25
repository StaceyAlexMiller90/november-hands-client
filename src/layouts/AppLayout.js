import React from 'react'
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import styles from './AppLayout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.page}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
