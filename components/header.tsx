import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
  <header className="bg-white sm:h-20 py-5 border-b sm:sticky top-0">
    <div className="max-w-5xl mx-auto px-6">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <div className="sm:ml-8 flex space-x-5 text-center">
            <Link href="/">
              <a className="text-gray-500 hover:text-sky-600 text-xl">Jacob Liberty</a>
            </Link>
            <Link href="/about-us">
              <a className="text-gray-500 hover:text-sky-600">About us</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-500 hover:text-sky-600">Blog</a>
            </Link>
          </div>
        </div>
        <Link href="/admin" prefetch={false}>
          <a className="py-2 px-5 rounded text-white font-medium bg-sky-500 hover:bg-sky-600 hover:shadow-lg transition duration-200">
            Edit content
          </a>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
