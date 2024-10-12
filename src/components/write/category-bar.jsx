import React from 'react'
import styled from 'styled-components'
import CategoryButton from './category-button'

import MapIcon from '../../assets/icons/map-icon.svg'

const CategoryBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.grayscale[800]};
  font-size: ${(props) => props.theme.fontSizes.regular};
  font-weight: 800;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function CategoryBar({ setSelectedCategory }) {
  return (
    <CategoryBarWrap>
      <Title>카테고리 선택</Title>
      <RowContainer>
          <CategoryButton setSelectedCategory={setSelectedCategory} />
          <img src={MapIcon} alt="Icon" width="61" height="61" />
      </RowContainer>
    </CategoryBarWrap>
  )
}
