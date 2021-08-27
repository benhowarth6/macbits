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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{title} Parts</h1>
        </div>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <ul>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.filter(products => products.model == `${type}` ).map(filteredProducts=> {
              const { id, title, price, image1, alt } = filteredProducts;
                return (
                  <li key={id}>
                <Link href={`../iphone-parts/${id}`}>
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