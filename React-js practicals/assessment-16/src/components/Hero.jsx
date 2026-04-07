import { memo } from 'react'

const Hero = memo(() => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to MyBrand
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          We build beautiful, responsive websites using Tailwind CSS and React.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  )
})

export default Hero