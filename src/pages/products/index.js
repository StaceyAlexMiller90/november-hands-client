import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../store/products/actions'

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div>
      <Head>
        <title>Shop by Product</title>
      </Head>
      <h1>Products Hannah</h1>
    </div>
  )
}

export default Products
