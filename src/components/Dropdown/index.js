import React from 'react'
import Link from 'next/link'
import styles from './Dropdown.module.scss'

const Dropdown = ({ options, name, dataTable }) => {
  return (
    <div className={styles.dropdown} aria-label="Dropdown items">
      <ul className={styles.dropdown__menu}>
        <li className={styles.dropdown__item} aria-label={`all ${name}`}>
          <Link href={`/${name}`}>
            <a className={styles.dropdown__link}>{`all ${name}`}</a>
          </Link>
        </li>
        {options.map((opt, i) => {
          return (
            <li key={i} className={styles.dropdown__item} aria-label={opt}>
              <Link href={`/products/[type]/[id]/[name]`} as={`/products/${dataTable}/${opt.id}/${opt.name}`}>
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
