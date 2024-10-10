import styled from 'styled-components';

const Button = styled.button`
  width: 261px;
  height: 53px;
  padding: 16px;
  gap: 10px;
  background-color: ${(props) => props.color || props.theme.colors.primary[400]};
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.borderColor || props.theme.colors.grayscale[1300]};
`;

export default Button;
