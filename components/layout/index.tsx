import Headers from '../headers';
import Footer from '../footer';
import { ReactNode } from 'react';
import styles from './layout.module.css';
import Head from 'next/head'

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function Header(props: LayoutProps) {
    const { children, pageTitle } = props;
   return (
       <>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
                <title>Next Car | {pageTitle}</title>
                <meta name="description" content="Website Modil" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <Headers />
                <div className={styles.content}>{children}</div>
                <Footer/>
            </div>
       </>
    
   );
}