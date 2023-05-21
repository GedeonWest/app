import styled from 'styled-components';
import FeaturedProductBox from '@/components/Products/FeaturedProductBox';

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function FeaturedGrid({ products }) {
  return (
    <StyledProductsGrid>
      {products?.length > 0 &&
        products.map((product) => (
          <FeaturedProductBox key={product?._id} {...product} />
        ))}
    </StyledProductsGrid>
  );
}
