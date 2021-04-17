import React from 'react';
import { View, ImageBackground, Text, Pressable } from 'react-native';

import styles from './styles';

import bgImage from '../../../assets/images/wallpaper.jpg';

import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Pressable
        style={styles.searchButton}
        onPress={() => {
          console.warn('search button clikced');
        }}
      >
        <Fontisto name='search' size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground source={bgImage} style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => {
            console.warn('explore button clikced');
          }}
        >
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
