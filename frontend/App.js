import React from 'react';
import LandingScreen from './screens/LandingScreen';
import { Platform, UIManager } from 'react-native';

// Optional: Enable LayoutAnimation for smooth transitions on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  return <LandingScreen />;
}