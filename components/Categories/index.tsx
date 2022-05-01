import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../../services';

import { Categories as CategoriesList } from '../../types';

type Props = {};

const Categories = (props: Props) => {
  const [categories, setCategories] = useState<CategoriesList>();

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categorias</h3>
      {categories?.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="mb-3 block cursor-pointer pb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
