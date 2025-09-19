import React from 'react';
import { StyledView, StyledText } from './Styled';

const Footer = () => {
  return (
    <StyledView className="bg-gray-900">
      <StyledView className="container mx-auto px-6 py-8">
        <StyledView className="border-t border-gray-700 mt-8 pt-8 text-center">
          <StyledText className="text-gray-400 text-sm">&copy; 2025 CivicVoice. Made with ❤ in India.</StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Footer;