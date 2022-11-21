import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>


      <Image
        src="https://nextimagedemo1112419-dev.s3.amazonaws.com/public/pexels-ce%CC%81line-14208380.jpg"
        alt="Galaxy"
        width={1000}
        height={750}
      />
    </div>
  )
}
