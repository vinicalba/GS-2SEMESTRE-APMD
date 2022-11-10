import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import Title from '../components/Title';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation(); //hooks

  return (
    <View style={styles.container}>
      <View>
        <Title text="Druber" />
        <Text style={styles.subtitulo}>Aplicação</Text>
        <Text>
          A DRUBER é um serviço criado para ser uma das soluções que ajudam a
          sanar o problema de locomoção em grandes centros urbanos. Com os
          avanços da tecnologia no dia a dia atual, é esperado que todos os
          setores da sociedade estejam em uma constante inovação no
          desenvolvimento de novas aplicações, inclusive o logístico. Durante a
          pandemia vimos que o serviço de entregas no mundo inteiro ficou
          sobrecaregado com uma demanda jamais vista, com isso a solução
          proposta pelo nosso grupo é a DRUBER, com a responsabilidade de
          oferecer um nova maneira de realizar entregas e as conclui-las no
          menor tempo possivel, suprindo a necessidade dos nossos usuarios mais
          anciosos, que não suportam ficar esperando por uma compra feita
          online. A nossa aplicação se resume em encomendas de pequeno a grande
          porte a serem entreges em até 3 Km de distancia em um tempo que nenhum
          outro meio de locomoção irá conseguir possibilitar.
        </Text>
        <Text style={styles.subtitulo}>Video</Text>
        <Image
          style={styles.poster}
          source={
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAclBMVEX/////AAD/Zmb/zMz/fX3/cXH/7Oz/8fH/+vr/Bwf/Ojr/Kyv/0ND/kJD/Dw//9vb/w8P/m5v/RUX/qqr/29v/e3v/mZn/Fxf/Jib/HR3/VVX/u7v/XV3/QUH/dXX/6Oj/MTH/iYn/S0v/oaH/srL/19dvatTfAAAB5klEQVR4nO2a2XKDMAxFUQLZE5ZsTZp9+f9frGmeMRZIVqdzzzMz9wxYWF6SBAAAAAAAAADAHyYvym026EmWlkXeJX28O09JiOm5HDPjR5eVVPqH1WXEyS+F42v2z/C3f5SPrzkGfofrTSefaH4NyR/NtfKdQcBAmMz08olmk1aBTDOfKGvLL3TziYoWAcUB8OHmz19r5xOtvQKqI/DDzJe/0c8n2ngE7jEElh6BRwyBh0dgH0Ng35w/jpFP1DwnRRmDvlG4iCOwaBQYxhEY9hSovowF0smyX8fWW8A1TQNjAfdoj1lDRMBNnAdjgSRPO65cpATcj6tb/y4nkCTfXTooSYGkS0mKCrh1BLuPFhbgl6S4ALckFQR4JakhwCpJHQFGSWoJBJekmkDyDGtqtQSCq1FH4HoKjFcqwzvjj6wg8LL9Eb0rTrzCZMTtS2Sn4x1/PfmPGhJG6WkIWDelxm258cKE3weKClgvTs2X571pFjDfojHfpDLfpouzUXlozrffqr3HEPBtVptv15sfWMQ4snl5BcwPreyP7bQPLi9t+fZHt+aH185A7R3cgo7v9S4wnMIvkgTuNLBgXOGoP8NW+hLLlnWJpf4OZSV3jad6cq/x/JIXZWp3kQkAAAAAAAAAQCx+AE/EKSER6U0UAAAAAElFTkSuQmCC'
          }
        />
        <Text style={styles.subtitulo}>Quer saber mais?</Text>
        <Text>
          Acesse outras abas do nosso site para descobrir valores, locais
          atendidos e beneficios!
        </Text>
      </View>
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
  subtitulo: {
    color: '#063d1e',
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  poster: {
    width: 190,
    height: 120,
    borderRadius: 5,
  },
});
