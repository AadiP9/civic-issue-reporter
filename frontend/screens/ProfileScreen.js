import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../services/api';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      // You need to implement a way to get the user's token
      // For now, this is a placeholder
      const token = 'your_jwt_token';
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await api.get('/users/profile', config);
      setUser(data);
    };
    fetchUserProfile();
  }, []);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>State: {user.state}</Text>
      <Text style={styles.points}>Reward Points: {user.points}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  points: {
    fontSize: 20,
    color: 'green',
    marginTop: 20,
  },
});

export default ProfileScreen;