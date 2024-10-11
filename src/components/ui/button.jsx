import styled from 'styled-components';

const getColor = (theme, variant, fallbackColor) => {
  if (!variant) return fallbackColor;
  const [colorCategory, colorIndex] = variant.split('-');
  return theme.colors[colorCategory]?.[colorIndex] || fallbackColor;
};

const Button = styled.button`
  width: ${({ width = '261px' }) => width};
  height: ${({ height = '53px' }) => height};
  padding: 16px;
  background-color: ${({ theme, variant }) =>
    getColor(theme, variant, theme.colors.primary[400])};
  border-radius: 8px;
  border: 1px solid ${({ theme, borderColor }) =>
    getColor(theme, borderColor, theme.colors.grayscale[1300])};
  opacity: ${({ opacity = 1 }) => opacity};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Button;