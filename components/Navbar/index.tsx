import Link from 'next/link';
import React from 'react';
import MenuLink from './MenuLink';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="sticky top-0 flex h-20 w-full items-center justify-around bg-orange-300">
      <Link href="/">Ebenezer</Link>
      <ul className="hidden md:flex">
        <MenuLink text="INICIO" href="/" />
        <MenuLink text="SOBRE MI" href="#sobremi" />
        <MenuLink text="BLOG" href="/blog" />
        <MenuLink text="ESCRIBEME" href="#escribeme" />
      </ul>
      <ul className="flex">
        <li className="px-2">
          <a href="#">Facebook</a>
        </li>
        <li className="px-2">
          <a href="#">Instagram</a>
        </li>
        <li className="px-2">
          <a href="#">Twitter</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
