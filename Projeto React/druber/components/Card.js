import { View, Image, Text, StyleSheet } from 'react-native'

export default function Card(props){
  const poster = {uri:props.img}
  return (
    <View style={styles.card}>
      <Image style={styles.poster} source={poster}/>
      <Text style={styles.vote}>⭐ {props.star}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 180,
    backgroundColor: '#212121',
    borderRadius: 5,
    margin: 8,
    alignItems: 'center',
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 5
  },
  vote: {
    color: '#FFF',
    opacity: 0.6,
  }
})