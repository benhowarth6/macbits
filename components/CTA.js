export default function CTA() {
  return (
    <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1588515603140-81bd9f7d1db0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3749&q=80"
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Long-term thinking</h2>
        <p className="mt-3 text-xl text-white">
          We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to
          focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of the
          universe.
        </p>
        <a
          href="#"
          className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
        >
          Read our story
        </a>
      </div>
    </div>
  )
}