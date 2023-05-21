import Image from 'next/image'
import styled from 'styled-components';
import React from 'react'
import BillyGif from '@/public/billy.gif'
import Center from '@/components/Center'
import Header from '@/components/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function NotFound() {
  return (
    <>
      <Header/>
      <Center>
        <Wrapper>
          <h2>Shiit, not found</h2>
          <p>But Billy is here</p>
          <Image src={BillyGif} width={400} height={400} quality={70} alt="Billy go back!"/>
        </Wrapper>
      </Center>
    </>
  )
}
