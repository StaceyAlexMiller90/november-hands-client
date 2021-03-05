import React, { useState, useEffect } from 'react'
import { initialiseApollo } from '../../lib/apolloClient'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts, fetchMoreProducts } from '../../../store/products/actions'
import { selectAllProducts } from '../../../store/products/selector'

import ProductCard from '../../components/ProductCard'

import styles from './ProductPage.module.scss'
import { useQuery } from '@apollo/client'
import { GET_ALL_OPTIONS } from '../../graphQL/options'

const Products = ({ products }) => {
  // const dispatch = useDispatch()
  // const group = useRouter().query.group
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_OPTIONS)
  // const router = useRouter()

  // useEffect(() => {
  //   if (products.length === 0) {
  //     dispatch(fetchAllProducts(0))
  //   }
  // }, [])

  // console.log(products)

  if(loading) return <p>Loading...</p>

  if(error) return <p>Error!</p>

  return (
    <div>
      <Head>
        <title>Shop by Category</title>
      </Head>
      <h1>All Products</h1>
      {/* <section className={styles.container}>
        {data.options.map((product, i) => {
          // return <ProductCard key={`${product.id} ${i}`} product={product} />
          return <p>{product.product.name}</p>
        })}
      </section> */}
      {/* {products.data.options.map(prod => <p>props {prod.product.name}</p>)} */}
      {/* <button onClick={() => dispatch(fetchMoreProducts(products.length))}>Load More products</button> */}
    </div>
  )
}

export default Products
