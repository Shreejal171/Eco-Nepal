import {View, Text, FlatList, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Categories from './Categories';
import Cards from './Cards';
import CulturalCards from './CulturalCards';
import {ScrollView} from 'react-native-gesture-handler';

const data = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    name: 'Sunset View',
    description: 'A beautiful sunset over the hills.',
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=800&q=80',
    name: 'Mountain Peaks',
    description: 'Snow-covered mountains under the blue sky.',
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
    name: 'Calm Lake',
    description: 'Reflection of trees in a quiet lake.',
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    name: 'City Lights',
    description: 'A bustling city at night full of lights.',
  },
];

const hotelData = [
  {
    id: '1',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/97/41/dd/caption.jpg?w=300&h=300&s=1',
    name: 'Dusit Princess',
    description: 'Modern comfort, stylish rooms, excellent service in a convenient location.',
  },
  {
    id: '2',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/b4/ce/b8/caption.jpg?w=300&h=300&s=1',
    name: 'Baber Mahal Vilas',
    description: 'Luxurious boutique rooms in a beautifully restored historical palace.',
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
    name: 'The Dwarika\'s Hotel',
    description: 'Unique Newari architecture, cultural immersion, preserving Nepali heritage.',
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    name: 'City Lights',
    description: 'A bustling city at night full of lights.',
  },
];

const tipsData = [
  {
    id: '1',
    image:
      'https://c1.wallpaperflare.com/preview/275/891/786/buddha-nepal-hindu-buddhism.jpg',
    name: 'Swayambhunath Stupa',
    description: 'Respectful attire is advisable, especially at religious sites and in local communities.',
  },
  {
    id: '2',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4a/95/ac/pashupatinath-is-the.jpg?w=1000&h=-1&s=1',
    name: 'Pasupatinath Temple',
    description: 'Be mindful of customs and traditions when visiting the Tal Barahi Temple in Fewa Lake.',
  },
  {
    id: '3',
    image:
      'https://images.squarespace-cdn.com/content/v1/53ecd1bde4b0a6f9524254f8/1414752490093-6W1D5IV5FTQXW10IN20I/image-asset.jpeg?format=1000w',
    name: 'Kathmandu Durbar Square',
    description: 'Observe and respect the tradition of making offerings at temples and sacred places.',
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    name: 'City Lights',
    description: 'A bustling city at night full of lights.',
  },
];

const EcoScreen = () => {
  return (
    <SafeAreaView className="h-full">
      <Categories />

      <View>
        <FlatList
          data={hotelData}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10}}
          renderItem={({item}) => (
            <View className="mr-3 ">
              <Cards
                image={item.image}
                name={item.name}
                description={item.description}
              />
            </View>
          )}
        />
      </View>

      <View className="flex-row justify-between mx-5 mt-3 items-center">
        <Text>Cultural Tips</Text>

        <Text className="text-gray-600 font-light text-sm">
          {`show More >`}
        </Text>
      </View>

      <FlatList
        data={tipsData}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 50}}
        renderItem={({item}) => (
          <View>
            <CulturalCards
              image={item.image}
              name={item.name}
              description={item.description}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default EcoScreen;
