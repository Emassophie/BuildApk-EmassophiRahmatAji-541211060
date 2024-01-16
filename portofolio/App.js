import React from 'react';
import {View, Text, Image, Button, Linking, TextInput, ScrollView } from 'react-native';

const colekAku = () => alert('Rawrrr...');

const Profilku = () => {
  const url = 'https://www.instagram.com/emassophie_';
  Linking.openURL(url);
}

const App = () => {
  return (
    <View style={{backgroundColor: '#ABCDEF', flex:1}}>
      <Text style={{fontWeight:'bold', textAlign:'center', color:'yellow'}}>Halo Dek, Aku Belajar React Native</Text>
      <View style={{alignItems:'center', backgroundColor:'white', padding:10}}>
        <Image style={{width:200, height:200}} source={require('./assets/avatar.png')} />
      </View>
      <View style={{alignItems:'center', padding:10}}>
        <Image style={{width:300, height:150}} source={{uri:'https://o-cdf.sirclocdn.com/unsafe/o-cdn-cas.sirclocdn.com/parenting/images/Kartun-Hero.width-800.format-webp.webp'}} />
      </View>
      <Button title='Colek Aku' color='red' onPress={colekAku} />
      <Button title='Profilku' color='blue' onPress={Profilku} />
      <TextInput placeholder='komen dong' style={{backgroundColor:'orange'}}/>
      
      </View>
  );
}
export default App;