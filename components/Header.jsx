import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '@/services';


const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);

  return (
    <div className='container mx-auto px-10 mb-8 rounded-md bg-black bg-opacity-70'>
      <div className='border-b w-full inline-block border-blue-400 py-6'>
        <div className='md:float-left block'>
            <Link href="/">
                <span className='cursor-pointer font-tangerine xs:flex xs:items-center xs:justify-center text-6xl md:text-7xl lg:text-8xl text-white'>
                    Bombshell Spaces
                </span>
            </Link>
        </div>
        <div className='hidden lg:float-left lg:contents'>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className='md:float-right mt-16 align-middle text-white ml-4 cursor-pointer'>
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Header;
