import Head from 'next/head';
import Link from 'next/link';

import Promo from "../components/Promo";
import Categories from "../components/Categories";
import CTA from "../components/CTA";
import FeaturedParts from "../components/FeaturedParts"

export default function Home() {

  return (
    <>

      <Head>
        <title>MacBits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Promo />

      <Categories />
      
      <FeaturedParts />

      <CTA />
    </>
  )
}
