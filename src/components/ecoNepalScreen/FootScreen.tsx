import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
// import {Dropdown} from 'react-native-element-dropdown';
import {
  ArrowDownCircleIcon,
  ArrowDownIcon,
  PaperAirplaneIcon,
} from 'react-native-heroicons/outline';
import {Button} from 'react-native-paper';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import CulturalCards from './CulturalCards';
import AccomodationCards from './AccomodationCards';

const data = [
  {
    id: '1',
    image:
      'https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2019/09/Electric-bus.jpg',
    name: 'Prefer EV to travel',
    description: 'Opt for electric vehicles like buses and scooters to reduce carbon emissions during your travels.',
  },
  {
    id: '2',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPjn2zIx9mQ3mpRl0dUaTpS8VDVbO3fouRg&s',
    name: 'Participate in Afforestation program',
    description: 'Contribute to local reforestation efforts by joining tree planting initiatives to enhance green cover.',
  },
  {
    id: '3',
    image:
      'https://www.yetiwebsoft.com.np/dev/lovegreen/wp-content/uploads/2017/06/110-1.jpg',
    name: 'Donation to NGO',
    description: ' Support local non-governmental organizations like Love Green Nepal that are actively working on environmental conservation.',
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    name: 'City Lights',
    description: 'A bustling city at night full of lights.',
  },
];

const FootScreen = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  // const renderLabel = () => {
  //   if (value || isFocus) {Dontae to Love Green Nepal
  //     return (
  //       <Text style={[styles.label, isFocus && {color: 'blue'}]}>
  //         Dropdown label
  //       </Text>
  //     );
  //   }
  //   return null;
  // };

  return (
    <SafeAreaView>
      <View className="h-full p-3">
        <View className="mt-3">
          <Text className="text-[#154b3f] font-bold tracking-tight text-[17px]">
            Carbon Footprint Calculator
          </Text>
        </View>

        <View className="bg-white rounded-md p-3 mt-5 ">
          <Text className="text-[#154b3f] font-light mb-3 mt-1 text-[15px] font-bold">Transportation</Text>
          <View className="flex-row justify-normal space-x-6">
            <View className="border flex-row items-center space-x-3 border-slate-400 p-2 rounded-sm">
              <Text>Flight</Text>
              <ArrowDownCircleIcon size={18} color="green" />
            </View>
            <View className="border border-slate-400 p-2 rounded-sm">
              <Text>200 KM</Text>
            </View>
          </View>
          <View className="mt-3" style={{width: widthPercentageToDP(40)}}>
            <Button className="text-white bg-[#154b3f] mb-1 mt-2">
              <Text className="text-white">Calculate</Text>
            </Button>
          </View>

          <View className="mt-3">
            <Text className="font-light text-xs">170.00 kg CO2</Text>
            <Text className="font-light text-xs">
              Transportation: 150.00 kg CO2
            </Text>
            <Text className="font-light text-xs">
              Accmodation: 20.00 kg CO2
            </Text>
          </View>
        </View>

        <View>
          <Text className="text-center text-[15px] font-bold mt-3 mb-1 text-[#154b3f]">Eco Friendly Options</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 50}}
          renderItem={({item}) => (
            <View>
              <AccomodationCards
                image={item.image}
                name={item.name}
                description={item.description}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default FootScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
