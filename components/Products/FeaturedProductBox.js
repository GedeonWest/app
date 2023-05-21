import styled from 'styled-components';
import Link from 'next/link';
import { useContext } from 'react';
import Image from 'next/image';
import Button from '@/components/Buttons/Button';
import CartIcon from '@/components/Icons/CartIcon';
import { CartContext } from '@/context/CartContext';
import TestImage from '@/public/bobik.jpg';

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
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

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  margin-top: 10px;
`;

const Price = styled.div`
  text-align: right;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export default function FeaturedProductBox({
  _id,
  title,
  description,
  price,
  images,
}) {
  const { addProductToCart } = useContext(CartContext);
  const url = `/featured/${_id}`;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <Image src={TestImage} width={640} height={360} alt="" />
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <p>{description}</p>
        <PriceRow>
          <Price>${price}</Price>
          <Button
            block
            primary
            outline
            onClick={() => {
              addProductToCart(_id);
            }}
          >
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
