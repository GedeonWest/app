import styled from 'styled-components';
import { useContext } from 'react';
import Image from 'next/image';
import Center from '@/components/Center';
import Header from '@/components/Header';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import Button from '@/components/Buttons/Button';
import CartIcon from '@/components/Icons/CartIcon';
import { CartContext } from '@/context/CartContext';
import TestImage from '@/public/bobik.jpg';
import GoBackButton from '@/components/Buttons/GoBackButton';

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;
const WhiteBox = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

export default function FeaturePage({ product }) {
  const { addProductToCart } = useContext(CartContext);
  return (
    <>
      <Header />
      <Center>
        <GoBackButton />
        <ColWrapper>
          <WhiteBox>
            <Image src={TestImage} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <div>
                <Price>${product.price}</Price>
              </div>
              <div>
                <Button primary onClick={() => addProductToCart(product._id)}>
                  <CartIcon />
                  Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  await mongooseConnect();
  const { id } = context.params;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  const paths = products?.map((product) => {
    return {
      params: {
        id: [product?._id.toString()],
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
