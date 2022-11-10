import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import Title from '../components/Title';
import Cidade from '../components/Cidade';

import { useNavigation } from '@react-navigation/native';

export default function Attendance() {
  const navigation = useNavigation(); //hooks

  return (
    <View style={styles.container}>
      <View>
        <Title text="Atendimento" />
        <Text style={styles.subtitulo}>Onde a Druber está disponível?</Text>
        <Cidade
          text="Eleita a capital com o pior transito do pais, A DRUBER faz muito sucesso na região da barra da tijuca, recreio e copacabana."
          img="https://www.lincolninst.edu/sites/default/files/styles/issue_feature/public/sources/articles/drone-revolution-lla171004-highlight.jpg?itok=W9g__Om2"
          cidade="Rio de Janeiro"
        />
        <Cidade
          text="Cidade onde a nossa aplicação foi idealizada e colocada em pratica, oferecemos nosso serviço pela região da Faria Lima, Brooklin novo e Morumbi."
          img="https://www.capital.sp.gov.br/fotos-para-noticias/fotos-galeria/2017-04/20170424_coletiva-de-imprensa-drone-pol/20170424_dronepol_prefeitura_001_lr.jpg/@@images/91be9b46-0bc9-44a2-bac1-9e37c4637f6d.jpeg"
          cidade="São Paulo"
        />
        <Cidade
          text="E começamos a nossa expanção pelo sul do pais por esta capital que sofre muito com transito e os usuarios estão aderindo a nossa solução."
          img="https://reinaldobessa.com.br/wp-content/uploads/2021/06/00308017.jpg"
          cidade="Curitiba"
        />
      </View>
      <Text style={styles.subtitulo}>Benefícios</Text>
      <Text>
        Agilidade no envio e recebimentos de produtos. Desafogando o transito,
        retirando diversos veiculos das ruas. Cliente consegue acompanhar em
        tempo real todo o progresso/trajeto de sua entrega. Meio de transporte
        de entrega de encomendas, totalmente sustentavel, movido somente a
        eletricidade.
      </Text>
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
});
