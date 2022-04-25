import Link from 'next/link';
import React from 'react';

type Props = {
  text: string;
  href: string;
};

const MenuLink = ({ text, href }: Props) => {
  return (
    <li className="px-3 hover:underline">
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default MenuLink;
