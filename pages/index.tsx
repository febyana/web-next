import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
   return (
    <Layout pageTitle="Home Page">
        {/* <Login/> */}
        <h1 className={styles.title}>Dashboard</h1>
        <div className={styles.container}>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
                <title>Next Car | Home Page</title>
                <meta name="description" content="Website Modil" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div> 
    </Layout>
         
   );
}