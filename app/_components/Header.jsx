"use client"
import React, { useEffect, useRef, useState } from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ProductsCart from './ProductsCart'
import { useDispatch, useSelector } from 'react-redux'
import { CartProductsCount } from '../_ReduxToolKit/CartProductsCountSlice'
import logo from '@/public/logo.svg'
const Header = () => {
  const CartProducts = useSelector(state => state.CartProductsCountSlice.CartProducts)
  const [CartMenuState, setCartMenuState] = useState(false)
  const [MenuState, setMenuState] = useState(false)
  if (window !== undefined) {
    window.addEventListener('resize', () => window.innerWidth > 768 && setMenuState(false))
  }
  const Menu = useRef()
  const CartMenu = useRef()
  const CloseAction = (e) => {
    CartMenu?.current && !CartMenu?.current.contains(e.target) && CartMenuState && setCartMenuState(false)
    Menu?.current && !Menu?.current.contains(e.target) && MenuState && setMenuState(false)
  }
  document.addEventListener('click', (e) => CloseAction(e))
  const { user } = useUser()
  const dispatch = useDispatch()
  useEffect(() => {
    user?.id && dispatch(CartProductsCount(user?.id))
  }, [dispatch, user])
  const Path = usePathname()
  return Path !== "/sign-in" && Path !== "/sign-up" && (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8
      shadow-md">
        <Link className="block" href="/">
          <Image
            alt='logo'
            src={logo.src}
            width={logo.width}
            height={logo.height}
            className="w-[50px] h-auto"
          />
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> home </Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" href="/all-courses">All courses</Link>
              </li>
              {/* <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" href="#"> latest courses </Link>
              </li> */}
              <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" href="/about"> about </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {!user ? (
                <>
                  <Link
                    className="block rounded-md bg-teal-500 hover:bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition "
                    href="/sign-in"
                  >
                    Login
                  </Link>
                  <Link
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                    href="/sign-up"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <div className='flex items-center gap-5'>
                  <div className='cursor-pointer flex gap-1' ref={CartMenu} onClick={() => setCartMenuState(!CartMenuState)} >
                    <ShoppingCart />
                    {CartMenuState && <ProductsCart products={CartProducts} openState={setCartMenuState} />}
                    <span className='text-sm'>({CartProducts.length})</span>
                  </div>
                  <UserButton afterSignOutUrl='/' />
                </div>
              )
              }
            </div>
            <div className="relative" ref={Menu}>
              <button
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                onClick={() => setMenuState(!MenuState)}
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div
                style={{ display: MenuState ? "block" : "none" }}
                className="absolute end-0 z-10 mt-4 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu"
              >
                <div className="p-2">
                  <Link
                    href="/"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    home
                  </Link>
                  <Link
                    href="/all-courses"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    All courses
                  </Link>
                  <Link
                    href="/about"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    about
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
