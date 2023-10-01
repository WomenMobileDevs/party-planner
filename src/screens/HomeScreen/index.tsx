import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {HomeScreenStyles} from './styles';
import LocationSearch from '../LocationSearch/LocationSearch';
const HomeScreen: React.FC = () => {
  const [name, setName] = useState('organiser');
  // const [mobile_number, setMobileNumber] = useState('');
  // const [gender, setGender] = useState('');
  // const [city, setCity] = useState('');
  // const [interest, setInterest] = useState('');
  // const [birth_date, setBirthDate] = useState<Date | null>(null);
  // const [open, setOpen] = useState(false);
  const DATA = [
    {
      id: '0',
      title: 'Birthday',
    },
    {
      id: '1',
      title: 'Dine out',
    },
    {
      id: '2',
      title: 'Trips',
    },
    {
      id: '4',
      title: 'Celebrations',
    },
  ];

  type ItemProps = {title: string};

  const Item = ({title}: ItemProps) => (
   
    <View style={HomeScreenStyles.item}>
      <Text style={HomeScreenStyles.title}>{title}</Text>
    </View>
   
  );
  return (
    <ScrollView  contentContainerStyle = {{justifyContent:'center',}}>
        <LocationSearch/>
      <View style={HomeScreenStyles.eventOrganisersp}>
        <Text style={{color:"#ffffff" ,textAlign:"center",fontSize:20}}>{name}</Text>
      </View>
      {/* selectedCategories */}
      <SafeAreaView style={HomeScreenStyles.container}>
      <Text style={HomeScreenStyles.text}>Selected Categories</Text>
      <View style={{alignItems:"center"}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
          numColumns={2}
          
        />
        </View>
      </SafeAreaView>
      {/* exlporedCategories */}
      <SafeAreaView style={HomeScreenStyles.container}>
      <Text style={HomeScreenStyles.text}>Exlpored Categories</Text>
      <View style={{alignItems:"center"}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
          numColumns={2}
          
        />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
