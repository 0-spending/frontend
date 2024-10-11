import styled from 'styled-components';

const Button = styled.button`
  width: ${(props) => props.width || '261px'};
  height: ${(props) => props.height || '53px'};
  padding: 16px;
  background-color: ${(props) => props.theme.colors.primary[props.variant] || props.theme.colors.primary[400]};
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.borderColor || props.theme.colors.grayscale[1300]};
  opacity: ${(props) => props.opacity || 1};
`;

export default Button;
