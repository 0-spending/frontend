import styled from "styled-components";

import WriteForm from "../components/write-form";
import CategoryBar from "../components/category-bar";

const Wrapper = styled.div`
    margin: 50px 150px;
`;

export default function WritePost() {
  return (
    <Wrapper>
        <CategoryBar />
        <WriteForm />
    </Wrapper>
  );
}