import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import api from '../services/api';

const ReportForm = ({ onReportSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      // Request location permission
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }
        // Request media library permission as well
        const { status: mediaStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (mediaStatus !== 'granted') {
          console.error('Permission to access media library was denied');
        }
      } catch (err) {
        console.error('Permission request failed', err);
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      // Newer versions return 'canceled' instead of 'cancelled'
      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri);
      } else if (!result.cancelled && result.uri) {
        // Fallback for older result shape
        setImage(result.uri);
      }
    } catch (err) {
      console.error('Image picking failed', err);
      Alert.alert('Error', 'Could not pick the image.');
    }
  };

  const handleSubmit = async () => {
    try {
      let locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);

      // You would typically upload the image to a service like Cloudinary or S3
      // and get a URL. For now, we'll just use the local URI.
      const newReport = {
        title,
        description,
        image,
        location: {
          type: 'Point',
          coordinates: [locationData.coords.longitude, locationData.coords.latitude],
        },
      };

      // You need to implement a way to get the user's token
      const token = 'your_jwt_token';
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await api.post('/reports', newReport, config);
      onReportSubmit();
    } catch (err) {
      console.error('Failed to submit report', err);
      Alert.alert('Submit failed', 'Could not submit the report.');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Submit Report" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default ReportForm;