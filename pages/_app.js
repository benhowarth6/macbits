import 'tailwindcss/tailwind.css'
import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer.js';

import { CartContext, useCartState } from '../hooks/use-cart.js';

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return (
    <CartContext.Provider value={cart}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </CartContext.Provider>
  )
}

export default MyApp
