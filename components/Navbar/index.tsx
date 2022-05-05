import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MenuLink from './MenuLink';

import { Categories as CategoriesList } from '../../types';
import { getCategories } from '../../services';
import IconLink from './IconLink';

const Navbar: NextPage = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<CategoriesList>();
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <nav className="navbar sticky top-0 z-10 flex h-20 w-full items-center justify-between bg-white px-10 md:px-20">
      <Link href="/">
        <span className="navbar-logo cursor-pointer text-2xl font-bold hover:scale-105">
          EBENEZER
        </span>
      </Link>
      {!activeMenu ? (
        <button
          className="block text-center md:hidden"
          onClick={() => setActiveMenu(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      ) : (
        <button
          className="block text-center md:hidden"
          onClick={() => setActiveMenu(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      <div
        className={
          !activeMenu
            ? 'hidden w-full items-center justify-between md:flex'
            : 'active-menu'
        }
      >
        {router.pathname !== '/' ? (
          <ul className="flex-1 justify-center md:flex">
            <MenuLink text="INICIO" href="/blog" />
            {categories?.map((category) => (
              <MenuLink
                key={category.slug}
                text={category.name.toUpperCase()}
                href={`/category/${category.slug}`}
              />
            ))}
          </ul>
        ) : (
          <ul className="flex-1 justify-center md:flex">
            <MenuLink text="BLOG" href="/blog" />
            <MenuLink text="SOBRE MI" href="#sobremi" />
            <MenuLink text="ESCRIBEME" href="#escribeme" />
          </ul>
        )}

        <ul className={activeMenu ? 'active-menu__icons' : 'md:flex'}>
          <IconLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="34"
              height="34"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            </svg>
          </IconLink>
          <IconLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="34"
              height="34"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
            </svg>
          </IconLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
