import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { atom, useAtom, useAtomValue, Provider} from 'jotai'

import Draw8 from './draw8';
import SemiFinal from '../../../semi-final';
import Final from '../../../final';

export const drawSize = atom(8)

function Tournament() {
    return (

            <table>
            <td>
           
            </td>
            <td>
               <SemiFinal />
            </td>
            <td>
      
            </td>
        </table>

    );
}








export default function Bracket() {
    return (



        <>

            <div className={styles.container}>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
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
                        <a >
                            <h2>Documentation &rarr;</h2>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>

                        <a >
                            <h2>Learn &rarr;</h2>
                            <p>Learn about Next.js in an interactive course with quizzes!</p>
                        </a>

                        <a>                     
                            <h2>Examples &rarr;</h2>
                            <p>Discover and deploy boilerplate example Next.js projects.</p>
                        </a>

                        <a    >
                            <h2>Deploy &rarr;</h2>
                            <p>
                                Instantly deploy your Next.js site to a public URL with Vercel.
                            </p>
                        </a>
                    </div>
                </main>




                <Tournament />

                <h1>Your Bracket</h1>
                <h2>

                    <label >Name your bracket: </label>
                    <input type="text" id="bracketName" name="bracketBame" />
                    <button type="submit">Submit</button>
                </h2>

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
        </>
    );
}