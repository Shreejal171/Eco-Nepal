import {View, Text, Image} from 'react-native';
import React from 'react';

const Map = () => {
  return (
    <View className='h-full w-full flex justify-center items-center'> {/* Using flex row for centering */}
  <Image
    className='scale-[1.1] mt-[100px]'
    source={{
      uri: 'https://i.imgur.com/BeGWQ2g.png',
    }}
    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
  />
</View>
  );
};

export default Map;
