import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../store/products/actions'
import { selectAllProducts } from '../../../store/products/selector'

const Products = () => {
  const dispatch = useDispatch()
  const group = useRouter().query.group
  const products = useSelector(selectAllProducts)
  const [limit, setLimit] = useState(25)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts(limit, offset))
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Shop by Product</title>
      </Head>
      <h1>Products Hannah Hello</h1>
      <ul>{products && products.map((prod, i) => <li key={i}>{prod.name}</li>)}</ul>
    </div>
  )
}

export default Products
