import Head from 'next/head'

import Navigation from "../components/Navigation"
import Promo from "../components/Promo"
import Categories from "../components/Categories"
import Footer from "../components/Footer"

import products from "../products/promo-parts.json"

export default function Home() {
  return (
    <>
      <Navigation />

      <Head>
        <title>Mbits</title>
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

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.image1}
                      alt={product.description}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">£{product.price}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
