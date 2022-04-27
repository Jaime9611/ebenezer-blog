import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MenuLink from './MenuLink';

import { Categories as CategoriesList } from '../../types';
import { getCategories } from '../../services';

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const [categories, setCategories] = useState<CategoriesList>();

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <nav className="sticky top-0 z-10 flex h-20 w-full items-center justify-around bg-orange-300">
      <Link href="/">Ebenezer</Link>
      {router.pathname === '/blog' ? (
        <ul className="hidden md:flex">
          {categories?.map((category) => (
            <MenuLink
              key={category.slug}
              text={category.name.toUpperCase()}
              href={`/category/${category.slug}`}
            />
          ))}
        </ul>
      ) : (
        <ul className="hidden md:flex">
          <MenuLink text="BLOG" href="/blog" />
          <MenuLink text="SOBRE MI" href="#sobremi" />
          <MenuLink text="ESCRIBEME" href="#escribeme" />
        </ul>
      )}

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
