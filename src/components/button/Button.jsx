import { css } from '@emotion/css';
import styled from '@emotion/styled'

const Button = ({ children, variant = 'primary', ...rest }) => {
    return (
        <StyledButton variant={variant} {...rest}>
          {children}
        </StyledButton>
      );
}

const buttonStyles = {
    primary: css`
      background-color: #007bff;
      color: #ffffff;
      &:hover {
        background-color: #0056b3;
      }
      &:active {
        background-color: #004085;
      }
    `,
    secondary: css`
      background-color: #6c757d;
      color: #ffffff;
      &:hover {
        background-color: #5a6268;
      }
      &:active {
        background-color: #343a40;
      }
    `,
    danger: css`
      background-color: #dc3545;
      color: #ffffff;
      &:hover {
        background-color: #c82333;
      }
      &:active {
        background-color: #bd2130;
      }
    `,
  };
  const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${({ variant }) => buttonStyles[variant] || buttonStyles.primary};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

export default Button