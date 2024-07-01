import React from "react"; // Importa React
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"; // Importa componentes de layout e estilização do React Native

import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Importa ícones do FontAwesome
import Feather from 'react-native-vector-icons/Feather'; // Importa ícones do Feather

// Componente principal da aplicação
export default function App() {
  return (
    <View style={styles.container}>

      {/* Ícone de casa do FontAwesome */}
      <FontAwesome
        name="home" // Nome do ícone
        size={25} // Tamanho do ícone
        color="#11118c" // Cor do ícone
      />
      {/* Ícone de usuário do FontAwesome */}
      <FontAwesome
        name="user" // Nome do ícone
        size={25} // Tamanho do ícone
        color="#54a300" // Cor do ícone
      />
      {/* Ícone de presente do Feather */}
      <Feather
        name="gift" // Nome do ícone
        size={25} // Tamanho do ícone
        color="#000" // Cor do ícone
      />

      {/* Botão que acessa o canal do YouTube */}
      <TouchableOpacity style={styles.btnYoutube}>
        <FontAwesome 
          name="youtube" // Nome do ícone do YouTube
          size={25} // Tamanho do ícone
          color="#fff" // Cor do ícone
        />
        {/* Texto dentro do botão */}
        <Text style={styles.btnText}>Acessar canal</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    justifyContent: 'center', // Alinha os itens ao centro verticalmente
    alignItems: 'center' // Alinha os itens ao centro horizontalmente
  },
  btnYoutube: {
    flexDirection: 'row', // Alinha os itens na horizontal
    justifyContent: 'center', // Alinha os itens ao centro horizontalmente
    alignItems: 'center', // Alinha os itens ao centro verticalmente
    padding: 5, // Adiciona padding
    backgroundColor: '#ff0000', // Cor de fundo do botão
    borderRadius: 5, // Borda arredondada do botão
  },
  btnText: {
    paddingLeft: 10, // Adiciona padding à esquerda
    color: '#FFF' // Cor do texto do botão
  }
});
