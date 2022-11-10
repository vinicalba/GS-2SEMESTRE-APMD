import { View, Text, Image, StyleSheet } from 'react-native';

export default function Cidade(props) {
  return (
    <View>
      <Image
        style={styles.imgcidade}
        source={props.img}
      />
      <Text style={styles.subtitulo}>{props.cidade}</Text>
      <Text style={styles.cidade}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitulo: {
    fontSize: 20,
    color: '#FFF',
  },
  cidade: {
    backgroundColor: '#FFF',
  },
  imgcidade: {
    width: 100,
    height: 60,
  },
});
