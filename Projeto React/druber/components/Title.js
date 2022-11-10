import { View, Text, StyleSheet } from 'react-native'

export default function Title(props){
  return(
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#063d1e',
    width: '100%',
    textAlign: 'center',
    alignSelf: 'center'
  },
  title: {
    fontSize: 20,
    color: '#FFF',    
  }
})