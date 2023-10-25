import {getBackgroundImg, getWeather} from '../services/api/getWeather';
import {Background, Coord} from '../types/weather';
import icons from '../assets/icons/weather/index';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DropIconSvg from '../assets/icons/DropIcon';
import WindIconSvg from '../assets/icons/WindIcon';
import CloudIconSvg from '../assets/icons/CloudIcon';
import {useQuery} from '@tanstack/react-query';
import {Image, StyleSheet, SafeAreaView, Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import SmallWeatherTile from '../components/SmallWeatherTile';

function HomeScreen() {
  const [coords, setCoords] = useState<Coord>();

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setCoords({lon: info.coords.longitude, lat: info.coords.latitude});
    });
  }, []);

  const {isPending, error, data} = useQuery({
    queryKey: ['weather', coords],
    queryFn: async () => await getWeather({lat: coords?.lat, lon: coords?.lon}),
  });

  if (isPending) {
    return (
      <View style={[styles.column, styles.container]}>
        <Text style={styles.details}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.column, styles.container]}>
        <Text style={styles.details}>
          An error has occurred: {error.message}
        </Text>
      </View>
    );
  }

  const colors = getBackgroundImg(data?.list[0]?.weather[0].main);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient style={styles.container} colors={colors}>
        <View style={{alignItems: 'center'}}>
          <Text>{data.list[0].dt_txt}</Text>
          <Text style={styles.city}>{data?.city.name}</Text>
          <Image
            source={icons[data?.list[0].weather[0].main as Background]}
            style={styles.image}
            alt={data?.list[0].weather[0].description}
          />
          <View>
            <Text style={styles.text}>
              {data?.list[0].main.temp.toString().split('.')[0]}°
            </Text>
          </View>
        </View>
        <View style={styles.details}>
          <View style={styles.column}>
            <DropIconSvg />
            <Text style={styles.city}>{data.list[0].main.humidity}%</Text>
            <Text style={styles.detailsText}>Humidity</Text>
          </View>
          <View>
            <WindIconSvg />
            <Text style={styles.city}>{data.list[0].wind.speed}</Text>
            <Text style={styles.detailsText}>Wind</Text>
          </View>
          <View style={styles.column}>
            <CloudIconSvg />
            <Text style={styles.city}>{data.list[0].clouds.all}%</Text>
            <Text style={styles.detailsText}>Cloudiness</Text>
          </View>
        </View>
        <View style={styles.details}>
          {data.list.map(
            (el, i) =>
              i > 0 && i < 5 && <SmallWeatherTile key={i} forecast={el} />,
          )}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default HomeScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#000',
  },

  column: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  detailsText: {color: 'white', fontWeight: '600', textAlign: 'center'},
  text: {textAlign: 'center', fontSize: 72, fontWeight: '700', color: 'white'},
  city: {fontSize: 24, fontWeight: '500', textAlign: 'center', color: 'white'},
  image: {
    width: 200,
    height: 200,
  },
});
