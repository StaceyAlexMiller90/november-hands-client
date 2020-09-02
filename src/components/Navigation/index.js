import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDropdownOptions } from '../../../store/dropdown/actions'
import { selectDropdownOptions } from '../../../store/dropdown/selector'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiShoppingCart } from 'react-icons/fi'
import Dropdown from '../Dropdown'
import styles from '../Navigation/Navigation.module.scss'

const Navigation = ({ menuOpen, toggleMenu }) => {
  const dispatch = useDispatch()
  const { categories, collections } = useSelector(selectDropdownOptions)
  const router = useRouter()
  const [collectionSubMenu, setCollectionSubMenu] = useState(false)
  const [productSubMenu, setProductSubMenu] = useState(false)

  const executeToggle = () => {
    toggleMenu()
  }

  useEffect(() => {
    dispatch(fetchDropdownOptions())
  }, [])

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.nav__menu} ${menuOpen && styles.nav__menu_open}`}>
        <li
          className={`${styles.nav__link} ${styles.nav__link_primary} ${collectionSubMenu && styles.nav__link_active}`}
          onMouseOver={() => setCollectionSubMenu(true)}
          onMouseLeave={() => setCollectionSubMenu(false)}>
          Collections
          {collectionSubMenu && <Dropdown name={'collections'} dataTable={'collection'} options={collections} />}
        </li>
        <li
          className={`${styles.nav__link} ${styles.nav__link_primary} ${productSubMenu && styles.nav__link_active}`}
          onMouseOver={() => setProductSubMenu(true)}
          onMouseLeave={() => setProductSubMenu(false)}>
          Products
          {productSubMenu && <Dropdown name={'products'} dataTable={'category'} options={categories} />}
        </li>
        <li onClick={executeToggle}>
          <Link href="/about">
            <a
              className={`${styles.nav__link} ${styles.nav__link_primary} ${
                router.pathname === '/about' && styles.nav__link_active
              }`}>
              About
            </a>
          </Link>
        </li>
        <li onClick={executeToggle} className={styles.nav__link_right}>
          <Link href="/profile">
            <a
              className={`${styles.nav__link} ${styles.nav__link_secondary} ${
                router.pathname === '/profile' && styles.nav__link_active
              }`}>
              Log In
            </a>
          </Link>
        </li>
        <li onClick={executeToggle}>
          <Link href="/cart">
            <a
              className={`${styles.nav__link} ${styles.nav__link_secondary} ${styles.cart} ${
                router.pathname === '/cart' && styles.nav__link_active
              }`}>
              <span className={styles.cart__icon}>
                <FiShoppingCart size={15} />
              </span>
              X
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
