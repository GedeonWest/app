import styled from 'styled-components';
import Header from '@/components/Header';
import Center from '@/components/Center';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import ProductsGrid from '@/components/Products/ProductsGrid';

const WhiteBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

export default function ProductsPage({ products }) {

  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
