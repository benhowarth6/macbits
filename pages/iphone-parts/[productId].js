import Head from 'next/head'

import { ShieldCheckIcon, CheckIcon } from '@heroicons/react/outline'

import { useCart } from '../../hooks/use-cart.js';

import products from '../../products/iphone-parts.json';

export default function Product({ product }) {

    const { id, title, description, image1, image2, alt, price, partnumber, type, model, highlight1, highlight2, highlight3, highlight4, details } = product;

    const { addToCart } = useCart();

    const policies = [
        {
            name: 'Free delivery all year long',
            description:
                'Name another place that offers year long free delivery? We’ll be waiting. Order now and you’ll get delivery absolutely free.',
            imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
        },
        {
            name: '24/7 Customer Support',
            description:
                'Or so we want you to believe. In reality our chat widget is powered by a naive series of if/else statements that churn out canned responses. Guaranteed to irritate.',
            imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
        },
        {
            name: 'Fast Shopping Cart',
            description:
                "Look at the cart in that icon, there's never been a faster cart. What does this mean for the actual checkout experience? I don't know.",
            imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
        },
        {
            name: 'Gift Cards',
            description:
                "We sell these hoping that you will buy them for your friends and they will never actually use it. Free money for us, it's great.",
            imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
        },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <Head>
                <title>{title} - MacBits</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-gray-50">
                <main>
                    {/* Product */}
                    <div className="bg-white">
                        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                            {/* Product details */}
                            <div className="lg:max-w-lg lg:self-end">
                                <div className="mt-4">
                                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
                                </div>

                                <section aria-labelledby="information-heading" className="mt-4">
                                    <h2 id="information-heading" className="sr-only">Product information</h2>

                                    <div className="flex items-center">
                                        <p className="text-lg text-gray-900 sm:text-xl">£{price}</p>

                                        <div className="ml-4 pl-4 border-l border-gray-300">
                                            <h2 className="sr-only">Part number</h2>
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="flex items-center">
                                                        <p>{partnumber}</p>
                                                    </div>
                                                    <p className="sr-only">{partnumber}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-6">
                                        <p className="text-base text-gray-500">{description}</p>
                                    </div>

                                    <div className="mt-10">
                                        <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                        <div className="mt-4">
                                            <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                                <li key={highlight1} className="text-gray-400">
                                                    <span className="text-gray-600">{highlight1}</span>
                                                </li>
                                                <li key={highlight2} className="text-gray-400">
                                                    <span className="text-gray-600">{highlight2}</span>
                                                </li>
                                                <li key={highlight3} className="text-gray-400">
                                                    <span className="text-gray-600">{highlight3}</span>
                                                </li>
                                                <li key={highlight4} className="text-gray-400">
                                                    <span className="text-gray-600">{highlight4}</span>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>




                                    <div className="mt-6 flex items-center">
                                        <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
                                        <p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
                                    </div>

                                </section>
                            </div>

                            {/* Product image*/}
                            <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                                    <img
                                        src={image1}
                                        alt={alt}
                                        className="w-full h-full object-center object-cover" />
                                </div>
                            </div>


                            <div class="mt-10 lg:mt-0 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
                                <section aria-labelledby="options-heading">

                                    <div class="mt-10">
                                        <button
                                            onClick={() => {
                                                addToCart({
                                                    id
                                                })
                                            }}
                                            class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Add to bag</button>
                                    </div>
                                    <div class="mt-6 text-center">
                                        <a href="#" class="group inline-flex text-base font-medium">
                                            <ShieldCheckIcon class="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                            <span class="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
                                        </a>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                        {/* Details section */}
                        <section aria-labelledby="details-heading">
                            <div className="flex flex-col items-center text-center">
                                <h2 id="details-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">The Fine Details</h2>
                                <p className="mt-3 max-w-3xl text-lg text-gray-600">Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during all-day adventures, long shifts at work, and tough travel schedules.</p>
                            </div>

                            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                                <div>
                                    <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." className="w-full h-full object-center object-cover" />
                                    </div>
                                    <p className="mt-8 text-base text-gray-500">The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1,220 standard gumballs, or any combination of on-the-go treats that your heart desires. Yes, we did the math.</p>
                                </div>
                                <div>
                                    <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg" alt="Front zipper pouch with included key ring." className="w-full h-full object-center object-cover" />
                                    </div>
                                    <p className="mt-8 text-base text-gray-500">Up your snack organization game with multiple comparment options. The quick-access stash pouch is ready for even the most unexpected snack attacks and sharing needs.</p>
                                </div>
                            </div>
                        </section>

                        {/* Policies section */}
                        <section aria-labelledby="policy-heading" className="mt-16 lg:mt-24">
                            <h2 id="policy-heading" className="sr-only">Our policies</h2>
                            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                                {policies.map((policy) => (
                                    <div key={policy.name}>
                                        <img src={policy.imageSrc} alt="" className="h-24 w-auto" />
                                        <h3 className="mt-6 text-base font-medium text-gray-900">
                                            {policy.name}
                                        </h3>
                                        <p className="mt-3 text-base text-gray-500">
                                            {policy.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>

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