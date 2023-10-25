import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {List} from '../types/weather';
import icons from '../assets/icons/weather/index';
import {Background} from '../types/weather';
type Props = {
  forecast: List;
};

const SmallWeatherTile = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.forecast.dt_txt.split(' ')[1].slice(0, 5)}
      </Text>
      <Image
        source={icons[props.forecast.weather[0].main as Background]}
        style={styles.image}
        alt={props.forecast.weather[0].description}
      />
      <Text style={styles.text}>
        {props.forecast.main.temp.toString().split('.')[0]}°
      </Text>
    </View>
  );
};

export default SmallWeatherTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 1,
    backgroundColor: '#ffffff5c',
    padding: 20,
    borderRadius: 10,
    gap: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    color: '#000',
  },
});
