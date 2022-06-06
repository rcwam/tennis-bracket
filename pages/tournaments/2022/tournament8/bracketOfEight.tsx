import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import { atom, useAtom, useAtomValue, Provider} from 'jotai'
import Image from 'next/image'
import styles from '../../../../styles/Home.module.css'
import Link from 'next/link';
import Draw8 from '../TournyOfEight/draw8';
import SemiFinal from '../../../../pages/semi-final';
import Final from '../../../../pages/final';

export const drawSize = atom(8)
export const drawPath = atom('./tournaments/2022/TournyOfEight/')

function Tournament() {
    return (
            <table>
            <td>
                <Draw8 />
            </td>
            <td>
               <SemiFinal />
            </td>
            <td>
                <Final />
            </td>
        </table>
    );
}

export default function Bracket() {
    return (
        <>
            <div className={styles.container}>
                <head className={styles.head}>
                    <div>
                        <Link href="/">
                            <a>Back</a>
                        </Link>                        
                    </div>
                    <title>Tennis Bracket</title>
                </head>

                <main className={styles.main}>
                    <div>
                        <Tournament />
                    </div>
                    <div>
                        <h2>
                            <label >Name your bracket: </label>
                            <input type="text" id="bracketName" name="bracketName" />
                            <button type="submit">Submit</button>
                        </h2>
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
        </>
    );
    }