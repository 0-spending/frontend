import styled from "styled-components";
import { useState } from 'react';

import WriteForm from "../components/write/write-form";
import CategoryBar from "../components/write/category-bar";

const Wrapper = styled.div`
    margin: 50px 150px;
`;

export default function WritePost() {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <Wrapper>
        <CategoryBar setSelectedCategory={setSelectedCategory} />
        <WriteForm selectedCategory={selectedCategory} />
    </Wrapper>
  );
}