import React from 'react'

const ProductCard = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((prod, i) => {
          return <li key={i}>{prod.name}</li>
        })}
      </ul>
    </div>
  )
}

export default ProductCard
