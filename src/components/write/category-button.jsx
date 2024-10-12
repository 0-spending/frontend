import React from 'react'
import Button from '../../components/ui/button';
import styled from 'styled-components';
import { useState } from 'react';

const CategoryData = ['# 오늘 소비', "# 절약 꿀팁", "# 가성비 맛집", "# 자취 꿀템"];

const ButtonContainer = styled.div`
  display: flex;
  gap: 23px;
`;

const Category = styled.div`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 1000;
  color: ${(props) => (props.active ? props.theme.colors.grayscale[1300] : props.theme.colors.grayscale[800])};
`;

export default function CategoryButton({ setSelectedCategory }) {
  const [buttonVariant, setButtonVariant] = useState(
    CategoryData.map(() => false)
  );

  const handleClick = (index) => {
    setButtonVariant((preVariants) => {
      return preVariants.map((_, i) => i === index);
    });
    setSelectedCategory(index);
  }

  return (
    <ButtonContainer>
        {CategoryData.map((category, index)=>{
            return (
                <Button 
                    key={index}
                    variant={buttonVariant[index] ? "primary-200" : "grayscale-100"}
                    opacity={0.6}
                    width={'198px'}
                    height={'56px'}
                    shadow={true}
                    onClick={() => handleClick(index)}
                >
                    <Category active={buttonVariant[index]}>{category}</Category>
                </Button>
            );
        })}
    </ButtonContainer>
  )
}
