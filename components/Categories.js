import Link from 'next/link';

const categories = [
  {
    name: 'iPhone Parts',
    href: '/iphone-parts',
    imageSrc: '/img/category/iphone-parts.jpg',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Replacement iPhone parts, including genuine service parts, reclaimed genuine parts and quality third party options.',
  },
  {
    name: 'MacBook Parts',
    href: '#',
    imageSrc: '/img/category/macbook-parts.jpg',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'Replacement MacBook parts, including genuine service parts, reclaimed genuine parts and quality third party options.',
  },
  {
    name: 'Accessories',
    href: '#',
    imageSrc: '/img/category/accessories.jpg',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Accessories for iPhones, MacBook\'s and Professional-grade repair tools for any job. ',
  },
]

export default function Categories() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Device</h2>
        <p className="mt-4 text-base text-gray-500">
          We offer replacement parts for a number of Apple devices, choose an option below to view our range.
        </p>

        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {categories.map((category) => (
            <Link href={category.href}>
            <a key={category.name} className="group block">
              <div
                aria-hidden="true"
                className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
              >
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{category.description}</p>
            </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}