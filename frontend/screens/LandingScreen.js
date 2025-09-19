import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
// Corrected import path from './Styled' to './components/Styled'
import { StyledScrollView, StyledView, StyledText, StyledTouchableOpacity, StyledTextInput } from '../components/Styled';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import AppModal from '../components/AppModal';

// Modal Content Components
const LoginModalContent = () => (
  <StyledView>
    <StyledText className="text-2xl font-bold text-center text-gray-800">Welcome!</StyledText>
    <StyledText className="text-center text-gray-500 mt-2">Enter your details to login or sign up.</StyledText>
    <StyledView className="mt-8 space-y-6">
      <StyledTextInput className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Phone Number or Gmail" keyboardType="email-address" />
      <StyledTouchableOpacity className="w-full bg-teal-600 py-3 rounded-lg shadow-sm active:bg-teal-700">
        <StyledText className="text-white text-center font-medium text-lg">Send OTP</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  </StyledView>
);

const ReportModalContent = () => (
  <StyledView>
    <StyledText className="text-2xl font-bold text-center text-gray-800">Report a Civic Issue</StyledText>
    <StyledView className="mt-8 space-y-6">
      <StyledTextInput className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Issue Category (e.g., Pothole)" />
      <StyledTextInput multiline numberOfLines={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Provide a brief description..." />
      <StyledTouchableOpacity className="w-full bg-teal-600 py-3 rounded-lg shadow-sm active:bg-teal-700">
        <StyledText className="text-white text-center font-bold text-lg">Submit Report</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  </StyledView>
);

const TrackModalContent = () => (
    <StyledView>
      <StyledText className="text-2xl font-bold text-center text-gray-800">Track Your Report</StyledText>
      <StyledText className="text-center text-gray-500 mt-2">Enter the tracking ID you received.</StyledText>
      <StyledView className="mt-8 space-y-4">
        <StyledTextInput className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="e.g., CIVIC-XYZ-123" />
        <StyledTouchableOpacity className="w-full bg-teal-600 py-3 rounded-lg shadow-sm active:bg-teal-700">
          <StyledText className="text-white text-center font-medium text-lg">Track Status</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledView>
  );

const LandingScreen = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [reportModalVisible, setReportModalVisible] = useState(false);
  const [trackModalVisible, setTrackModalVisible] = useState(false);

  return (
    <StyledView style={styles.container}>
      <Header 
        onLoginPress={() => setLoginModalVisible(true)}
        onTrackPress={() => setTrackModalVisible(true)}
      />
      <StyledScrollView>
        <Hero onReportPress={() => setReportModalVisible(true)} />
        <Features />
        {/* The LiveReports component can be added here once created */}
        <Footer />
      </StyledScrollView>

      <AppModal visible={loginModalVisible} onClose={() => setLoginModalVisible(false)}>
        <LoginModalContent />
      </AppModal>

      <AppModal visible={reportModalVisible} onClose={() => setReportModalVisible(false)}>
        <ReportModalContent />
      </AppModal>

      <AppModal visible={trackModalVisible} onClose={() => setTrackModalVisible(false)}>
        <TrackModalContent />
      </AppModal>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
});

export default LandingScreen;