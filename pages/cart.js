import Head from 'next/head'
import Link from 'next/link';

import { useCart } from '../hooks/use-cart.js';

import products from "../products/all-parts.json";
import promoproducts from "../products/promo-parts.json";

export default function Cart() {
    const { cartItems, checkout, subtotal, updateItem } = useCart();

    const data = cartItems.map(({ id, quantity, pricePerUnit }) => {
        const product = products.find(({ id: pid }) => pid === id);
        const { title, image1, partnumber, type, alt, price } = product || {};
        const Quantity = () => {
            function handleOnSubmit (e) {
                e.preventDefault();

                const { currentTarget } = e;
                const inputs = Array.from(currentTarget.elements)
                const quantity = inputs.find(input => input.name === 'quantity')?.value
                
                updateItem({
                    id: id,
                    quantity: quantity &&  parseInt(quantity)
                })

                console.log('Submit', quantity)
            }
            return (
                <form onSubmit={handleOnSubmit}>
                <select id="quantity" name="quantity" type="number" min={0} defaultValue={quantity} className={'form-select w-16 max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-themeColorHover focus:border-themeColorHover sm:text-sm'}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                </select>
                <button className="text-sm text-indigo-600 pl-4">Update</button>
                </form>
            )
        }
        return {
            id,
            title,
            image1,
            alt,
            partnumber,
            type,
            price,
            quantity: <Quantity />,
            pricePerUnit,
            total: (quantity * pricePerUnit).toFixed(2)
        }
    });

    const CartItems = ({ data });


    return (
        <div>
            <Head>
                <title>Cart - MacBits</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-white theme-cart-page">
                <main className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">
                            <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>
                            <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                                {data.map(cartItems => {
                                    const { id, title, image1, alt, price, partnumber, type, quantity } = cartItems;
                                    return (
                                        <li className="flex py-6 sm:py-10">
                                            <div className="flex-shrink-0">
                                                <img src={image1} alt={alt} className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48" />
                                            </div>
                                            <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                    <div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-sm">
                                                                <a href="#" className="font-medium text-gray-700 hover:text-gray-800">
                                                                    {title}
                                                                </a>
                                                            </h3>
                                                        </div>
                                                        <div className="mt-1 flex text-sm">
                                                            <p className="text-gray-500">
                                                                {partnumber}
                                                            </p>
                                                            <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">
                                                                {type}
                                                            </p>
                                                        </div>
                                                        <p className="mt-1 text-sm font-medium text-gray-900">£{price}</p>
                                                    </div>
                                                    <div className="mt-4 sm:mt-0 sm:pr-9">
                                                        <label htmlFor="quantity-0" className="sr-only">Quantity, Basic Tee</label>
                                                        {quantity}
                                                        <div className="absolute top-0 right-0">
                                                            <button type="button" className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                                                                <span className="sr-only">Remove</span>
                                                                {/* Heroicon name: solid/x */}
                                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                                                    {/* Heroicon name: solid/check */}
                                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span>In stock</span>
                                                </p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                        {/* Order summary */}
                        <section aria-labelledby="summary-heading" className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
                            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">Order summary</h2>
                            <dl className="mt-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-600">
                                        Subtotal
                      </dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        £{subtotal}
                                    </dd>
                                </div>
                                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                    <dt className="flex items-center text-sm text-gray-600">
                                        <span>Shipping estimate</span>
                                        <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Learn more about how shipping is calculated</span>
                                            {/* Heroicon name: solid/question-mark-circle */}
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        £5.00
                      </dd>
                                </div>
                                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                    <dt className="text-base font-medium text-gray-900">
                                        Order total
                      </dt>
                                    <dd className="text-base font-medium text-gray-900">
                                        £{subtotal + 5}
                                    </dd>
                                </div>
                            </dl>
                            <div className="mt-6">
                                <button className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-themeColorHover" onClick={checkout}>Checkout</button>
                            </div>
                        </section>
                    </div>
                    {/* Related products */}
                    <section aria-labelledby="related-heading" className="mt-24">
                        <h2 id="related-heading" className="text-lg font-medium text-gray-900">You may also like…</h2>
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {promoproducts.map(product => {
                                const { id, title, image1, alt, price } = product;
                                return (
                                    <Link href={`/iphone-parts/${id}`}>
                                        <a className="group relative">
                                            <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                                <img src={image1} alt={alt} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                    <h3 className="text-sm text-gray-700">
                                                        <a href="#">
                                                            <span aria-hidden="true" className="absolute inset-0" />
                                                            {title}
                                                        </a>
                                                    </h3>
                                                </div>
                                                <p className="text-sm font-medium text-gray-900">£{price}</p>
                                            </div>
                                        </a>
                                    </Link>
                                )
                            })}
                            {/* More products... */}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
