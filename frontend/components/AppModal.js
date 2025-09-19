import React from 'react';
import { Modal } from 'react-native';
import { StyledView, StyledTouchableOpacity } from './Styled';
import { X } from 'lucide-react-native';

const AppModal = ({ visible, onClose, children }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <StyledView className="flex-1 justify-center items-center bg-black/60 p-4">
      <StyledView className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl relative">
        <StyledTouchableOpacity onPress={onClose} className="absolute top-4 right-4 z-10 p-1">
          <X color="gray" size={24} />
        </StyledTouchableOpacity>
        {children}
      </StyledView>
    </StyledView>
  </Modal>
);

export default AppModal;