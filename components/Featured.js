import styled from 'styled-components';
import { useContext } from 'react';
import Center from '@/components/Center';
import Button from '@/components/Buttons/Button';
import ButtonLink from '@/components/Buttons/ButtonLink';
import CartIcon from './Icons/CartIcon';
import { CartContext } from '@/context/CartContext';
import NextImage from '@/public/nextjs.png'
import Image from 'next/image';

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({ product }) {
  const { addProductToCart } = useContext(CartContext);
  function addFeaturedToCart() {
    addProductToCart(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product?.title}</Title>
              <Desc>{product?.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink
                  href={`products/${product?._id}`}
                  outline={1}
                  white={1}
                >
                  Read more
                </ButtonLink>
                <Button
                  white
                  onClick={() => {
                    addFeaturedToCart();
                  }}
                >
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <Image
              src={NextImage}
              alt="Next"
              width={200}
              height={200}
            />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
