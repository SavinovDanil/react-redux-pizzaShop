import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f0eae6"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="135" cy="125" r="125" />
    <rect x="0" y="261" rx="10" ry="10" width="280" height="27" />
    <rect x="2" y="302" rx="10" ry="10" width="280" height="88" />
    <rect x="8" y="408" rx="10" ry="10" width="90" height="27" />
    <rect x="128" y="398" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
