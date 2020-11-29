import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts, fetchMoreProducts } from '../../../store/products/actions'
import { selectAllProducts } from '../../../store/products/selector'

import ProductCard from '../../components/ProductCard'

import styles from './ProductPage.module.scss'

const Products = () => {
  const dispatch = useDispatch()
  const group = useRouter().query.group
  const products = useSelector(selectAllProducts)
  const router = useRouter()

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchAllProducts(0))
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Shop by Category</title>
      </Head>
      <h1>All Products</h1>
      <section className={styles.container}>
        {products.map((product, i) => {
          return <ProductCard key={`${product.id} ${i}`} product={product} />
        })}
      </section>
      <button onClick={() => dispatch(fetchMoreProducts(products.length))}>Load More products</button>
    </div>
  )
}

export default Products
