import React from 'react'
import { initialiseApollo } from '../lib/apolloClient'
import { GET_ALL_CATEGORIES } from '../graphQL/categories'
import { GET_ALL_COLLECTIONS } from '../graphQL/collections'
import { GET_ALL_OPTIONS } from '../graphQL/options'
import Head from 'next/head'
import styles from './homePage.module.scss'

const HomePage = () => {

  return (
    <div>
      <Head>
        <title>November Hands</title>
      </Head>
      <h1 className={styles.heading}>Ceramics handmade in Hilversum</h1>
      <section className={styles.imageContainer}>
        <img
          src="https://res.cloudinary.com/november-hands/image/upload/v1598454407/Inspiration/132797966_fxtlvv.jpg"
          className={styles.image}></img>
        <img
          src="https://res.cloudinary.com/november-hands/image/upload/v1598454407/Inspiration/AfterlightImage_vkkqm1.jpg"
          className={styles.image}></img>
        <img
          src="https://res.cloudinary.com/november-hands/image/upload/v1598454384/Inspiration/128710061_kji4rf.jpg"
          className={styles.image}></img>
        <img
          src="https://res.cloudinary.com/november-hands/image/upload/v1598454385/Inspiration/AfterlightImage_oh92rm.jpg"
          className={styles.image}></img>
        <img
          src="https://res.cloudinary.com/november-hands/image/upload/v1598454384/Inspiration/128455942_m4reuh.jpg"
          className={styles.image}></img>
        <img
          src="https://res.cloudinary.com/november-hands/image/upload/v1598454409/Inspiration/AfterlightImage_2_h3s1c2.jpg"
          className={styles.image}></img>
      </section>
    </div>
  )
}

export default HomePage

export const getStaticProps = async () => {
  const apolloClient = initialiseApollo();

  await apolloClient.query({
    query: GET_ALL_CATEGORIES,
  })

  await apolloClient.query({
    query: GET_ALL_COLLECTIONS,
  })

  await apolloClient.query({
    query: GET_ALL_OPTIONS,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

