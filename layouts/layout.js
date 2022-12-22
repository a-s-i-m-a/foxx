import Link from 'next/link'
import { slugify } from '../utils/helpers'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { navItemLength } from '../ecommerce.config'

export default function Layout({ children, categories }) {
  if (categories.length > navItemLength) {
    categories = categories.slice(0, navItemLength)
  }
  return (
    <div>
      <nav>
        <div className="flex align-middle justify-center">
          <div className="
            mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0
            px-4  flex flex-col w-fw items-center
          ">
            <div className="ml-16 sm:mr-16 max-w-48 sm:max-w-none">
              <Link legacyBehavior href="/">
                <a aria-label="Home">
                  <img src="/logo.png" alt="logo" width="45" height="45" />
                </a>
              </Link>
            </div>
            <div className="flex flex-wrap mt-1">
              <Link legacyBehavior href="/">
                <a aria-label="Home">
                  <p className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-xl  mr-4
                  ">
                    Главное
                  </p>
                </a>
              </Link>
              <Link legacyBehavior href="/category/new-arrivals">
                <a aria-label="Home">
                  <p className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-xl  mr-4
                  ">
                    Новое поступление
                  </p>
                </a>
              </Link>
              <Link legacyBehavior href="/category/cross">
                <a aria-label="Home">
                  <p className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-xl  mr-4
                  ">
                    Кроссовки
                  </p>
                </a>
              </Link>
              <Link legacyBehavior href="/category/clothes">
                <a aria-label="Home">
                  <p className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-xl  mr-4
                  ">
                    Одежда
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="mobile:px-10 px-4 pb-10 flex justify-center">
        <main className="w-fw">{children}</main>
      </div>
      <footer className="flex justify-center">
        <div className="
        sm:flex-row sm:items-center
        flex-col
        flex w-fw px-12 py-8
        desktop:px-0
        border-solid
        border-t border-gray-300">
          <span className="block text-gray-700 text-xs">Copyright © 2021 JAMstack Ecommerce. All rights reserved.</span>
          <div className="
            sm:justify-end sm:m-0
            flex flex-1 mt-4
          ">
          </div>
        </div>
      </footer>
      <ToastContainer autoClose={3000} />
    </div>
  )
}