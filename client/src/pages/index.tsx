import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '~/styles/Home.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>U-lab公式サイト</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className='text-center'>aaa</div >
            </main>
        </>
    );
}
