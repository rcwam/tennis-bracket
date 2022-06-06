import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
//import Draw8 from './draw8';



const Home: NextPage = () => {
    return (
        <div className={styles.container}>

            <Head>
                <title>Tennis Bracket</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Tennis Bracket
                </h1>
                <h1 className={styles.title}>
                    Enter your {' '}
                    <Link href="/bracket">
                        <a>picks!</a>
                    </Link>
                </h1>
                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>

                <div className={styles.grid}>
                    <a  href="/tournaments/2022/tournament8/bracketOfEight" className={styles.card}>

                      
                        <h2>Eight Draw Tourney &rarr;</h2>
                        <p>A tournament with a draw of eight players.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Sixteen Draw  &rarr;</h2>
                        <p>This tournament has twice as many players.</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )


}

export default Home
