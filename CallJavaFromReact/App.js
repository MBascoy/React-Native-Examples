
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  TextInput,
  NativeModules,
} from 'react-native';



const App = () => {

  let startActivity = NativeModules.ActivityStarter;

  const [text, setText] = useState('');

  const openFunction = () => {
    startActivity.open(text);
  }



  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de Actividad"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text}
      </Text>

      <Button 
        style = {styles.button} 
        title = "Abrir actividad Java"
        onPress={() => {openFunction();console.log(text)}}
        disabled={!(text.length > 0)}
      />
        
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },

  button:{
    height:40,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});

export default App;
