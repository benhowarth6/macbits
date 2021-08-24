import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

import Navigation from "../components/Navigation";
import Promo from "../components/Promo";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

import { useCart } from '../hooks/use-cart.js';

import products from "../products/promo-parts.json";
 
export default function Home() {
  const { subtotal, quantity, addToCart, checkout } = useCart(); 

  return ( 
    <>

      <Head>
        <title>MacBits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Promo />

      <Categories />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Featured Parts</h1>
        </div>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <ul>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map(product => {
                const { id, title, image1, alt, price } = product;
                return (
                  <li key={id}>
                <Link href={`/iphone-parts/${id}`}>
                <a className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={ image1 }
                      alt={ alt }
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{ title }</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">£{ price }</p>
                </a>
                </Link>
                <button
                    type="button"
                    className="w-full mt-4 items-center px-3 py-2.5 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={() => addToCart({ id })}
                  >
                    Add to cart
                  </button>
                </li>
              )
              })}
            </div>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
