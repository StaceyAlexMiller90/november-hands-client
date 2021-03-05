import React, { useState } from 'react'
import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from '../../graphQL/categories'
import { GET_ALL_COLLECTIONS } from '../../graphQL/collections'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiShoppingCart } from 'react-icons/fi'
import Dropdown from '../Dropdown'
import styles from '../Navigation/Navigation.module.scss'

const Navigation = ({ menuOpen, toggleMenu }) => {
  const categories = useQuery(GET_ALL_CATEGORIES);
  const collections = useQuery(GET_ALL_COLLECTIONS);

  const router = useRouter()
  const [collectionSubMenu, setCollectionSubMenu] = useState(false)
  const [productSubMenu, setProductSubMenu] = useState(false)

  const executeToggle = () => {
    toggleMenu()
  }

  if(categories.loading || collections.loading) return <p>...Loading</p>

  if(categories.error || collections.error) return <p>Error!</p> 

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.nav__menu} ${menuOpen && styles.nav__menu_open}`}>
        <li
          className={`${styles.nav__link} ${styles.nav__link_primary} ${collectionSubMenu && styles.nav__link_active}`}
          onMouseOver={() => setCollectionSubMenu(true)}
          onMouseLeave={() => setCollectionSubMenu(false)}>
          Collections
          {collectionSubMenu && <Dropdown name={'collections'} dataTable={'collection'} options={collections.data.collections} />}
        </li>
        <li
          className={`${styles.nav__link} ${styles.nav__link_primary} ${productSubMenu && styles.nav__link_active}`}
          onMouseOver={() => setProductSubMenu(true)}
          onMouseLeave={() => setProductSubMenu(false)}>
          Products
          {productSubMenu && <Dropdown name={'products'} dataTable={'category'} options={categories.data.categories} />}
        </li>
        <li onTouchStart={executeToggle}>
          <Link href="/about">
            <a
              className={`${styles.nav__link} ${styles.nav__link_primary} ${
                router.pathname === '/about' && styles.nav__link_active
              }`}>
              About
            </a>
          </Link>
        </li>
        <li onTouchStart={executeToggle} className={styles.nav__link_right}>
          <Link href="/profile">
            <a
              className={`${styles.nav__link} ${styles.nav__link_secondary} ${
                router.pathname === '/profile' && styles.nav__link_active
              }`}>
              Log In
            </a>
          </Link>
        </li>
        <li onTouchStart={executeToggle}>
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

