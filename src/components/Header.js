import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import cn from 'classnames';
import Button from '@components/element/Button';
import LinkList from '@components/list/LinkList';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const linkList = [
    {
      title: 'The User App',
      link: '/',
    },
    {
      title: 'Services',
      link: '/',
    },
    {
      title: 'Dashboard & Digiboard',
      link: '/dashboard',
    },
    {
      title: 'User Features',
      link: '/',
    },
    {
      title: 'Download our App',
      link: '/',
    },
    {
      title: 'Contact Us',
      link: '/contact',
    },
    {
      title: 'FAQs',
      link: '/question',
    },
  ];

  return (
    <header
      className=" bg-black text-white h-16 py-12 md:px-24 px-8"
      role="navigation"
      aria-label="main navigation">
      <div className="container flex justify-between items-center h-full mx-auto">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/images/logo.png"
            width={84}
            height={24}
          />
        </Link>
        <div className="flex  w-auto font-bold space-x-10">
          <div className="cursor-pointer hover:opacity-90 transition-opacity duration-200 hidden sm:block">
            User features
          </div>
          <div className="text-purple cursor-pointer hover:opacity-90 transition-opacity duration-200">
            Login &gt;
          </div>
          <Button type="primary">Create an event</Button>
          <button
            type="button"
            className="transform rotate-90 text-2xl cursor-pointer select-none outline-none focus:outline-none focus:shadow-none"
            onClick={() => setShowMenu(!showMenu)}>
            |||
          </button>
          <div
            className={cn(
              'absolute mt-14 md:w-1/4 w-screen right-0 bg-page-black ring-1 ring-black ring-opacity-5 focus:outline-none z-50',
              showMenu ? 'block' : 'hidden',
            )}>
            <div className="pt-12 text-white  text-center md:py-48 py-36 space-y-9">
              <LinkList
                list={linkList}
                className="block px-4 py-2 hover:text-gray-300 cursor-pointer text-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
