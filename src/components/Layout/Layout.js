import React from 'react'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
