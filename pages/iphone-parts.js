import Head from 'next/head';
import Link from 'next/link';

import Promo from "../components/Promo";
import Categories from "../components/Categories";

import { useCart } from '../hooks/use-cart.js';

import models from "../models/iphone-models.json";

export default function Home() {
  const { subtotal, quantity, addToCart, checkout } = useCart();

  return (
    <>

      <Head>
        <title>MacBits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-10 justify-center flex flex-col bg-gray-50" >
        <div className="py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">iPhone Parts</h1>
          <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
            We supply new genuine service parts as well as reclaimed genuine parts.
          </p>
          <p className="mt-2 max-w-3xl mx-auto text-base text-gray-500">Select a model of iPhone below to view our range of parts.</p>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">iPhone Parts</h2>

          <ul>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {models.map(models => {
                const { id, title, image1, alt, slug } = models;
                return (
                  <li key={id}>
                    <Link href={`/iphone-models/${id}`}>
                      <a className="group">
                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                          <img
                            src={image1}
                            alt={alt}
                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                          />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
                      </a>
                    </Link>
                  </li>
                )
              })}
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}
