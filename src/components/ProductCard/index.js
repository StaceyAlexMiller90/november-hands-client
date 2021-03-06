import React from 'react'
import Link from 'next/link'
import styles from './ProductCard.module.scss'

const ProductCard = ({ product }) => {
  const { productColorId, productName, price, color, images, discount, discountedPrice } = product

  return (
    <Link href={`/productDetail/[id]/[name]`} as={`/productDetail/${productColorId}/${productName}`}>
      <article className={styles.product_card}>
        <figure className={styles.product_card__figure}>
          <img src={images[0]} className={styles.product_card__image}></img>
        </figure>
        <header className={styles.product_card__header}>
          <h3 className={styles.product_card__title}>{`${productName} - ${color}`}</h3>
          <p className={`${styles.product_card__price} ${discount && styles.product_card__price_discounted}`}>
            €{price}
          </p>
          {discount && <p className={styles.product_card__price}>€{discountedPrice}</p>}
        </header>
      </article>
    </Link>
  )
}

export default ProductCard
