import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='container mx-auto px-10 rounded-md bg-black bg-opacity-70'>
      <span className='flex items-center justify-center xs:max-sm:text-xs text-white p-4'>
        &copy; 2023 Copyright: 
        <Link href="/" className='ml-2'>BombshellSpaces.com</Link>
      </span>
    </div>
  )
}

export default Footer;
