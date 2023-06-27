import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {DropdownComponent} from '../components/Dropdown';
import {event_list, gender_list} from '../data';
import DatePicker from 'react-native-date-picker';

const EventOrganizerForm: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile_number, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [organizing, setOrganizing] = useState('');
  const [birth_date, setBirthDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>Organizer</Text>
          <View style={styles.input_container}>
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              editable={false}
              style={styles.input}
              onChangeText={setMobileNumber}
              value={mobile_number}
              placeholder="Enter your mobile number"
            />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder="Enter your name"
            />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label}>BirthDate</Text>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Text
                style={[
                  styles.input,
                  {paddingVertical: 14},
                  birth_date && {color: '#000'},
                ]}>
                {birth_date ? birth_date.toDateString() : 'Select Date'}
              </Text>
            </TouchableOpacity>

            <DatePicker
              modal
              open={open}
              date={birth_date || new Date()}
              maximumDate={new Date()}
              mode="date"
              onConfirm={date => {
                setOpen(false);
                setBirthDate(date || new Date());
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label}>Gender</Text>
            <DropdownComponent
              options={gender_list}
              onChange={(item: {value: string}) => console.log(item.value)}
              placeholder={'Select Gender'}
            />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label}>City</Text>
            <TextInput
              style={styles.input}
              onChangeText={setCity}
              value={city}
              placeholder="Enter your city"
            />
          </View>
          <View style={styles.input_container}>
            <Text style={styles.label}>Organizing</Text>
            <DropdownComponent
              options={event_list}
              onChange={(item: {value: string}) => console.log(item.value)}
              placeholder={'Select Event'}
            />
          </View>

          <View style={styles.button_container}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EventOrganizerForm;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
  label: {
    color: '#522446',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  input_container: {
    paddingVertical: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#522446',
  },
  form: {
    border: '2px solid black',
    padding: 10,
    borderRadius: 15,
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#522446',
    borderRadius: 4,
    padding: 20,
    paddingVertical: 10,
    fontSize: 15,
  },
  button: {
    borderWidth: 0,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#522446',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button_container: {
    paddingTop: 20,
  },
});
