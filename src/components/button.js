import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = ({ children, onClick }) => (
  <StyledButton
    onClick={onClick}
    whileTap={{ scale: 0.95 }} // Scale down slightly on click
  >
    {children}
  </StyledButton>
);

// Styled component for the button
const StyledButton = styled(motion.button)`
  background-color: #4b79a1;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a5a7e;
  }

  &:active {
    background-color: #324b66;
  }
`;

export default Button;
