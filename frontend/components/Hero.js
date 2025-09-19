import React from 'react';
import { PlusCircle } from 'lucide-react-native';
import { StyledView, StyledText, StyledTouchableOpacity } from './Styled';

const Hero = ({ onReportPress }) => {
  return (
    <StyledView className="bg-teal-50/50 pt-24 pb-20">
      <StyledView className="mx-auto px-6 items-center text-center w-full max-w-7xl">
        <StyledText className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
          Your Voice, <StyledText className="text-teal-600">Our City's Future.</StyledText>
        </StyledText>
        <StyledText className="mt-6 text-lg text-gray-600 max-w-xl">
          Report civic issues, track their resolution, and collaborate with your community to build a better neighborhood. It's civic engagement, simplified.
        </StyledText>
        <StyledTouchableOpacity onPress={onReportPress} className="mt-10 w-full max-w-sm bg-teal-600 py-3 px-8 rounded-lg shadow-lg hover:bg-teal-700 active:scale-95 transition-transform">
          <StyledView className="flex-row items-center justify-center space-x-2">
            <PlusCircle color="white" />
            <StyledText className="text-white text-center font-bold text-lg">Make a Report</StyledText>
          </StyledView>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledView>
  );
};

export default Hero;