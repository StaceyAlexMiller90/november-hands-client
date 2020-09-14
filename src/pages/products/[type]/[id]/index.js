import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const index = () => {
  const type = useRouter().query.type
  const id = useRouter().query.id

  return (
    <div>
      <Head>
        <title>Shop by {type === 'collection' ? 'Collection' : 'Category'} </title>
      </Head>
      {type} {id}
    </div>
  )
}

export default index
