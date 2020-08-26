import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
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
