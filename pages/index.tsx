import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Header from '../components/header'
import Footer from '../components/footer';
import Layout from '../components/layout';
import Image from 'next/image';


export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/profile.png" alt="profile" width={100} height={200} />
      <h1 className={styles['title-homepage']}>Welcome Bambang</h1>
      
    </Layout>
    
  )
}
