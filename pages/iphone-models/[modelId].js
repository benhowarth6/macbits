import Head from 'next/head'
import Link from 'next/link';

import { useCart } from '../../hooks/use-cart.js';

import models from '../../models/iphone-models.json';
import products from '../../products/iphone-parts.json';

export default function Model({ model }) {

  const { id, title, description, type, image1, alt } = model;

  const { addToCart } = useCart();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <Head>
        <title>{title} - MacBits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{title} Parts</h1>
              <p className="mt-4 max-w-xl text-sm text-gray-700">
                Replacement parts for the {title}. MacBits has you covered with genuine service parts, reclaimed genuine parts and quality third party options. All of our replacement parts are tested to rigorous standards and backed by our warranty.
              </p>
            </div>
          </div>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <ul>
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.filter(products => products.model == `${type}`).map(filteredProducts => {
                  const { id, title, price, image1, alt } = filteredProducts;
                  return (
                    <li key={id}>
                      <Link href={`/iphone-parts/${id}`}>
                        <a className="group">
                          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img
                              src={image1}
                              alt={alt}
                              className="w-full h-full object-center object-cover group-hover:opacity-75"
                            />
                          </div>
                          <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
                          <p className="mt-1 text-lg font-medium text-gray-900">£{price}</p>
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
        {/* Pagination */}
        <nav
          aria-label="Pagination"
          className="max-w-7xl mx-auto px-4 mt-6 flex justify-between text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
        >
          <div className="min-w-0 flex-1">
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              Previous
            </a>
          </div>
          <div className="hidden space-x-2 sm:flex">
            {/* Current: "border-indigo-600 ring-1 ring-indigo-600", Default: "border-gray-300" */}
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-indigo-600 ring-1 ring-indigo-600 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              1
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              2
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              3
            </a>
            <span className="inline-flex items-center text-gray-500 px-1.5 h-10">...</span>
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              8
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              9
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              10
            </a>
          </div>
          <div className="min-w-0 flex-1 flex justify-end">
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              Next
            </a>
          </div>
        </nav>
      </main>
    </>
  )
}

export async function getStaticProps({ params = {} }) {
  const model = models.find(({ id }) => `${id}` === `${params.modelId}`);
  return {
    props: {
      model
    },
  };
}

export async function getStaticPaths() {
  const paths = models.map((model) => {
    const { id } = model;
    return {
      params: {
        modelId: id,
      },
    };
  });

  return {
    paths,
    fallback: false
  };
}