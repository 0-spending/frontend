import styled from "styled-components";

import WriteForm from "../components/write/write-form";
import CategoryBar from "../components/write/category-bar";

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