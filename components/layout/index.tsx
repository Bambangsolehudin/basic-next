import React, { Children, ReactNode } from 'react'
import Footer from '../footer'
import Header from '../header'
import styles from './Layout.module.css';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
    pageTitle:string;
}

export default function Layout(props: LayoutProps) {
    const {children, pageTitle} = props; 
    return (
        <>
        <Head> 
            <title>NextJS Basic | {pageTitle}</title>
            <meta name="description" content="Website Nextjs Basic" />
        </Head>
        <div className={styles.container}>
            <Header />
                <div className={styles.content}>{children}</div>
            <Footer />
        </div>
        </>
    )
}
