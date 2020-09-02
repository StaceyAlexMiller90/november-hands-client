import React from 'react'
import Link from 'next/link'
import styles from '../Dropdown/Dropdown.module.scss'

const Dropdown = ({ options, name, dataTable }) => {
  return (
    <div className={styles.dropdown} aria-label="Dropdown items">
      <ul className={styles.dropdown__menu}>
        <li className={styles.dropdown__item} aria-label={`all ${name}`}>
          <Link href={`/products`} as={`/products`}>
            <a className={styles.dropdown__link}>{`all ${name}`}</a>
          </Link>
        </li>
        {options.map((opt, i) => {
          return (
            <li key={i} className={styles.dropdown__item} aria-label={opt}>
              <Link href={`/products/[group]/[type]`} as={`/products/${dataTable}/${opt.id}`}>
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
