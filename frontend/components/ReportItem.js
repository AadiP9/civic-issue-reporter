import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ReportItem = ({ report, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(report)}>
      <View style={styles.container}>
        <Text style={styles.title}>{report.title}</Text>
        <Text style={styles.status}>{report.status}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  status: {
    color: '#666',
    marginTop: 4,
  },
});

export default ReportItem;
