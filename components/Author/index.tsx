import Image from 'next/image';
import React from 'react';

import { Author } from '../../types';

type Props = {
  author: Author;
};

const Author = ({ author }: Props) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center">
      <div className="absolute left-0 right-0 -top-12">
        <Image
          src="/flower.png"
          unoptimized
          width="160px"
          height="100px"
          alt="logo"
          className="rounded-full align-middle"
        />
      </div>
      <h3 className="my-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-lg text-white">
        Contactame en cualquiera de mis medios
      </p>
      <p className="text-lg text-white">micorreo@gmail.com</p>
      <p className="text-lg text-white">misInstagram</p>
    </div>
  );
};

export default Author;
