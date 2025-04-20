import {View, Text, FlatList, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import Cards from './Cards';

const Network = () => {
  return (
    <SafeAreaView>
      <View className="h-full bg-white">
        <Text className="text-center mt-4 text-[18px]">Leaderboard</Text>
        <View className="flex-row justify-between p-3 mt-4">
          <Text>#1 </Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2583/2583344.png',
            }}
            height={20}
            width={20}
          />
          <Text>James Bond</Text>

          <Text>$9,000, 000</Text>
        </View>

        <View className="flex-row justify-between p-3">
          <Text>#2</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2583/2583319.png',
            }}
            height={20}
            width={20}
          />
          <Text>Tom Hanks</Text>

          <Text>$8,000,000</Text>
        </View>

        <View className="flex-row justify-between p-3 ">
          <Text>#3 </Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2583/2583434.png',
            }}
            height={20}
            width={20}
          />
          <Text>Tony Stark</Text>

          <Text>$7,000, 000</Text>
        </View>

        <View className=' h-full w-full'>
            <View className='p-5 flex-column justify-center items-center'>
            <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1211534036/vector/mudra-hand-greeting-posture-of-namaste-linear-illustration.jpg?s=612x612&w=0&k=20&c=njbzedS3GboT2EKE5q25_4iPGYQFb_GBPv5pUl_sQCQ=',
            }}
            height={150}
            width={150}
          />
            <Text className='text-center text-[18px] mt-5'>Donate US</Text>

            <Image
            className='mt-20 scale-[2]' 
              source={{
                uri: 'https://media.discordapp.net/attachments/858344427788959815/1363127421364207838/image.png?ex=6804e6d6&is=68039556&hm=ed0125e688aabc24c45b76dbb804d452200225aeacceeebb48e1a2540c741924&=&format=webp&quality=lossless&width=560&height=283',
              }}
              style={{ width: 200, height: 100 }} // Example container dimensions
              resizeMode="contain"
            />
            </View>
            

      </View>
      </View>

      
    </SafeAreaView>
  );
};

export default Network;
