import styled from 'styled-components';
import Header from '@/components/Header';
import Center from '@/components/Center';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import FeaturedGrid from '@/components/Products/FeaturedGrid';

const Title = styled.h1`
  font-size: 1.5em;
`;

export default function ProductsPage({ products }) {
  return (
    <>
      <Header />
      <Center>
        <Title>Featured products</Title>
        <FeaturedGrid products={products} />
      </Center>
    </>
  );
}

export async function getStaticProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
