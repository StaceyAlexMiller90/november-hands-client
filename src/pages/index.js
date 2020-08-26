import Head from 'next/head'
import styles from './homePage.module.scss'

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>November Hands</title>
      </Head>
      <section className={styles.container}>
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
