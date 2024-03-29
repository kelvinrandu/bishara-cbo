import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Bishara!</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>
            {" "}
            a world where clean and healthy environment is everyone&rsquo;s
            concern
          </code>
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Nursery &rarr;</h2>
            <p>
              Find in-depth information about our nursery project like different
              species and their uses .
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Garbage collection&rarr;</h2>
            <p>
              Learn about how we safely collect and dispose garbage in our
              neighbourhood
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Ukwenza VR &rarr;</h2>
            <p>
              Learn about how we use VR technology to educate children about our
              environment and trees.
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Beach cleaning &rarr;</h2>
            <p>Learn how we engage in cleaning our beach.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home
