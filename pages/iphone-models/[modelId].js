import Head from 'next/head'

import { useCart } from '../../hooks/use-cart.js';

import models from '../../models/iphone-models.json';

export default function Model({ model }) {

  const { id, title, description, image1, alt } = model;

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <Head>
        <title>{title} - MacBits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">models</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a key={id} href={alt} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={image1}
                  alt={alt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{description}</p>
            </a>
          </div>
        </div>
      </div>
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