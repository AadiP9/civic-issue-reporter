import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import api from '../services/api';

const HomeScreen = ({ navigation }) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const { data } = await api.get('/reports');
      setReports(data);
    };
    fetchReports();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../assets/logos/govt_of_india.png')} style={styles.logo} />
            <Text style={styles.headerTitle}>Civic Issue Reporter</Text>
        </View>
      <FlatList
        data={reports}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReportDetails', { id: item._id })}
          >
            <View style={styles.reportItem}>
              <Text style={styles.reportTitle}>{item.title}</Text>
              <Text>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('NewReport')}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.profileButtonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    reportItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    reportTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#03A9F4',
        borderRadius: 30,
        elevation: 8,
    },
    fabIcon: {
        fontSize: 24,
        color: 'white',
    },
    profileButton: {
        position: 'absolute',
        left: 20,
        bottom: 20,
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 20,
    },
    profileButtonText: {
        color: 'white',
    },
});

export default HomeScreen;