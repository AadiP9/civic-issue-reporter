import React from 'react';
import { View, StyleSheet } from 'react-native';
import ReportForm from '../components/ReportForm';

const NewReportScreen = ({ navigation }) => {
  const handleReportSubmit = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ReportForm onReportSubmit={handleReportSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default NewReportScreen;