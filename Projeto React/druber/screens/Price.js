import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import Title from '../components/Title';
import Card from '../components/Card';

import { useNavigation } from '@react-navigation/native';

export default function Price() {
  const navigation = useNavigation(); //hooks

  return (
    <View style={styles.container}>
      <View>
        <Title text="Valores"/>
      </View>
      <Card img='https://www.picxfilmes.com.br/assets/images/palavras-chave/videos-com-drone-em-sp.jpg' star='9.7'/>
      <Card img='https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2020/05/GettyImages-1208531279-scaled.jpg' star='8.5'/>
      <Card img='https://farm6.staticflickr.com/5803/31285315936_51fcd3ec65_h.jpg' star='8.9'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#c5ebd6',
    padding: 8,
  },
});
