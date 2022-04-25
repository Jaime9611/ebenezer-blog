import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="sticky top-0 flex h-20 w-full items-center justify-around bg-orange-300">
      <a href="/">Ebenezer</a>
      <ul className="hidden md:flex">
        <li className="px-3 hover:underline">
          <a href="/">INICIO</a>
        </li>
        <li className="px-3 hover:underline">
          <a href="#">SOBRE MI</a>
        </li>
        <li className="px-3 hover:underline">
          <a href="/blog">BLOG</a>
        </li>
        <li className="px-3 hover:underline">
          <a href="#">ESCRIBEME</a>
        </li>
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
