import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MyApp = () => {
  const [pw, SetPw] = useState('');
  return (
    <View>
      <Text>User Type:</Text>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Admin', value: 'Admin' },
          { label: 'Guest', value: 'Guest' },
        ]}
      />
      <Text>Password:</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={(text)=>SetPw(text)} />
      
      <Button title='LOG IN' onPress={()=>Alert.alert(pw)}></Button>
      <TouchableOpacity onPress={() => ToastAndroid.show("You pressed the text!", ToastAndroid.SHORT)}>
        <Text>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyApp;
