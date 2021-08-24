import Head from 'next/head'

import { useCart } from '../../hooks/use-cart.js';

import products from '../../products/iphone-parts.json';

export default function Product({ product }) {

    const { id, title, description, image1, image2, alt, price, partnumber, type, model, highlight1, highlight2, highlight3, highlight4, details } = product;

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
            <div className="bg-white">
                <div className="pt-6">
                    {/* Image gallery */}
                    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                        <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                            <img
                                src={image1}
                                alt={alt}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                <img
                                    src={image2}
                                    alt={alt}
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                <img
                                    src={image1}
                                    alt={alt}
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                        </div>
                        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                            <img
                                src={image2}
                                alt={alt}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:mt-0 lg:row-span-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-gray-900">£{price}</p>

                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="sr-only">Part Number</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <p class="text-gray-500">{partnumber}</p>
                                    </div>
                                </div>
                            </div>

                            <form className="mt-10">
                                <button
                                    className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={() => {
                                        addToCart({
                                            id
                                        })
                                    }}
                                >
                                    Add to bag
              </button>
                            </form>
                        </div>

                        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">{highlight1}</span>
                                            <span className="text-gray-600">{highlight2}</span>
                                            <span className="text-gray-600">{highlight3}</span>
                                            <span className="text-gray-600">{highlight4}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps({ params = {} }) {
    const product = products.find(({ id }) => `${id}` === `${params.productId}`);
    return {
        props: {
            product
        },
    };
}

export async function getStaticPaths() {
    const paths = products.map((product) => {
        const { id } = product;
        return {
            params: {
                productId: id,
            },
        };
    });

    return {
        paths,
        fallback: false
    };
}