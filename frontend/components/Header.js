import React from 'react';
import { Megaphone } from 'lucide-react-native';
import { StyledView, StyledText, StyledTouchableOpacity } from './Styled';

const Header = ({ onLoginPress, onTrackPress }) => {
  return (
    <StyledView className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-200/50">
      <StyledView className="mx-auto px-6 py-3 flex-row justify-between items-center w-full max-w-7xl">
        <StyledView className="flex-row items-center space-x-3">
          <StyledView className="bg-teal-600 p-2 rounded-lg shadow-md">
            <Megaphone color="white" size={20} />
          </StyledView>
          <StyledText className="text-2xl font-bold text-gray-800">CivicVoice</StyledText>
        </StyledView>
        
        <StyledView className="flex-row items-center space-x-4">
          <StyledTouchableOpacity onPress={onTrackPress}>
            <StyledText className="hidden sm:block text-sm font-semibold text-gray-600 hover:text-teal-600">Track Report</StyledText>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity onPress={onLoginPress} className="bg-teal-600 font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300">
            <StyledText className="text-white font-semibold">Login</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Header;