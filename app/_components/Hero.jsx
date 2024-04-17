"use client"
import Link from 'next/link'
import React from 'react'
const Hero = () => {
  const ScrollDown = () => {
    scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    })
  }
  return (
    <section className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-32 mx-auto pt-36 lg:flex lg:h-screen">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            All Your Digital Products <strong className="font-extrabold text-primary sm:block">Is One Click Away</strong>
          </h1>
          <p className="mt-4 sm:text-xl/relaxed">
            Start Exploring State of the Art  Assets Now!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => ScrollDown()}
              className="block w-full px-12 py-3 text-sm font-medium text-white transition-all bg-teal-600 hover:bg-teal-700 rounded shadow  sm:w-auto"
            >
              Get Started
            </button>
            <Link
              className="block w-full px-12 py-3 text-sm font-medium transition-all text-teal-600 rounded shadow hover:text-primary outline-none sm:w-auto"
              href="/about"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
