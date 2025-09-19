import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ReportDetailsScreen = ({ route }) => {
  const { report } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{report.title}</Text>
      {report.image && <Image source={{ uri: report.image }} style={styles.image} />}
      <Text style={styles.description}>{report.description}</Text>
      <Text style={styles.status}>Status: {report.status}</Text>
      
      {report.location && (
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>
            Location Captured: ({report.location.latitude.toFixed(4)}, {report.location.longitude.toFixed(4)})
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  locationContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  locationText: {
    fontSize: 14,
  },
});

export default ReportDetailsScreen;