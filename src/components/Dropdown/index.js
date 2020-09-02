import React from 'react'
import Link from 'next/link'
import styles from '../Dropdown/Dropdown.module.scss'

const Dropdown = ({ options }) => {
  return (
    <div className={styles.dropdown} aria-label="Dropdown items">
      <ul className={styles.dropdown__menu}>
        {options.map((opt, i) => {
          return (
            <li key={i} className={styles.dropdown__item} aria-label={opt}>
              <Link href="/products/[type]" as={`/products/${opt.id}`}>
                <a className={styles.dropdown__link}>{opt.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Dropdown
