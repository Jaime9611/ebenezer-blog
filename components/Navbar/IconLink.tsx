import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const IconLink = (props: Props) => {
  return (
    <li className="navbar-icon cursor-pointer pl-4 hover:scale-105">
      {props.children}
    </li>
  );
};

export default IconLink;
