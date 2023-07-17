import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {event_list, gender_list} from '../../../data';
import DatePicker from 'react-native-date-picker';
import DropdownComponent from '../../../components/Dropdown';
import {RegisterStyle} from './styles';
import REGISTER_LABELS from './register_labels';
import STRINGS from '../../../constants/strings/Strings';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile_number, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [interest, setInterest] = useState('');
  const [birth_date, setBirthDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <ScrollView>
      <View style={RegisterStyle.container}>
        <View style={RegisterStyle.form}>
          <Text style={RegisterStyle.title}>{REGISTER_LABELS.heading}</Text>
          <View style={RegisterStyle.input_container}>
            <Text style={RegisterStyle.label}>
              {REGISTER_LABELS.mobile_number_label}
            </Text>
            <TextInput
              editable={false}
              style={RegisterStyle.input}
              onChangeText={setMobileNumber}
              value={mobile_number}
              placeholder={REGISTER_LABELS.mobile_number_placeholder}
            />
          </View>
          <View style={RegisterStyle.input_container}>
            <Text style={RegisterStyle.label}>
              {REGISTER_LABELS.name_label}
            </Text>
            <TextInput
              style={RegisterStyle.input}
              onChangeText={setName}
              value={name}
              placeholder={REGISTER_LABELS.name_placeholder}
            />
          </View>
          <View style={RegisterStyle.input_container}>
            <Text style={RegisterStyle.label}>
              {REGISTER_LABELS.birth_date_label}
            </Text>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Text
                style={[
                  RegisterStyle.input,
                  {paddingVertical: 14},
                  birth_date && {color: '#000'},
                ]}>
                {birth_date
                  ? birth_date.toDateString()
                  : REGISTER_LABELS.birth_date_placeholder}
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
          <View style={RegisterStyle.input_container}>
            <Text style={RegisterStyle.label}>
              {REGISTER_LABELS.gender_label}
            </Text>
            <DropdownComponent
              options={gender_list}
              onChange={(item: {value: string}) => setGender(item.value)}
              placeholder={REGISTER_LABELS.gender_placeholder}
            />
          </View>
          <View style={RegisterStyle.input_container}>
            <Text style={RegisterStyle.label}>
              {REGISTER_LABELS.city_label}
            </Text>
            <TextInput
              style={RegisterStyle.input}
              onChangeText={setCity}
              value={city}
              placeholder={REGISTER_LABELS.city_placeholder}
            />
          </View>
          <View style={RegisterStyle.input_container}>
            <Text style={RegisterStyle.label}>
              {REGISTER_LABELS.interest_label}
            </Text>
            <DropdownComponent
              options={event_list}
              onChange={(item: {value: string}) => setInterest(item.value)}
              placeholder={REGISTER_LABELS.interest_placeholder}
            />
          </View>

          <View style={RegisterStyle.button_container}>
            <TouchableOpacity style={RegisterStyle.button}>
              <Text style={RegisterStyle.buttonText}>{STRINGS.proceed}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
