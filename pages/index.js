import React from 'react';
import Header from '@/components/Header';
import Featured from '@/components/Featured';
import { Product } from '@/models/Product';
import { mongooseConnect } from '@/lib/mongoose';

export default function Home({ featuredProduct, newProducts }) {
  console.log(newProducts);
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '645badb2e7b567236739a7bb';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
