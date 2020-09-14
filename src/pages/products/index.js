import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../../store/products/actions'
import { selectAllProducts } from '../../../store/products/selector'

import ProductCard from '../../components/ProductCard'

const Products = () => {
  const dispatch = useDispatch()
  const group = useRouter().query.group
  const products = useSelector(selectAllProducts)
  const [limit, setLimit] = useState(25)
  const [offset, setOffset] = useState(0)
  const router = useRouter()

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchAllProducts(limit, offset))
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Shop by Category</title>
      </Head>
      <h1>All Products</h1>
      <ProductCard products={products} />
    </div>
  )
}

export default Products
