// import o react e o useState
// usestate serve para criar valores que podem mudar na tela

import React, {useState} from "react";

// importa componentes nativos do react native
import { View,

  Text, //caixa / área da tela
  Button, //textos
  StyleSheet, //botão
  TouchableOpacity,//estilos
     } from "react-native-web";

//Componente principal APP

export default function Jogador2(){

  // Cria uma estado (variavel php) chamado "pontos"
  // pontos = valor atual
  // set pontos = função para alterar o valor 
  // 0 = valor inicial

  const [pontos,setPontos] = useState(0);

// Função para aumentar 1 ponto

  function aumentar(){
    //pega o valor atua e soma +1
    setPontos(pontos+1);
  }

    // Função para diminuir 1 ponto
  function diminuir(){
    //pega o valor atual e subtrai -1
    setPontos(pontos-1);
  }

    //função para resetar o contador
  function resetar(){
    setPontos(0)
  }

  return(
    // view principal do APP
    <View style={styles.container}>
      {/* // titulo do APP */}
      <Text style={styles.titulo}>

        🎮Contador Gamer

      </Text>

      {/* // mostra o valor dos pontos */}

      <Text style={styles.pontos}>{pontos}</Text>
      {/* // área dos botões +1 e -1  */}
      <View style={styles.areabotoes}>

        <TouchableOpacity
        onPress={aumentar}
        style={styles.botao}>
          <Text style={styles.textobotao}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={diminuir}
        style={styles.botao}>
          <Text style={styles.textobotao}>-1</Text>
        </TouchableOpacity>

      </View>
      
        <TouchableOpacity
        onPress={resetar}
        style={styles.botaoreset}>
          <Text style={styles.textobotao}>resetar</Text>
        </TouchableOpacity>
      </View>

  );
}
// ÁREA DE ESTILOS DO APP
const styles = StyleSheet.create({
  // ESTILO DA TELA PRINCIPAL
  container: {
    // OCUPA A TELA TODA
    flex: 1,
    // COR DE FUNDO
    backgroundColor: '#2621c1ff',
    //CENTRALIZA HORIZONTALMENTE
    alignItems: 'center',
    // CENTRALIZA VERTICALMENTE
    justifyContent: 'center',
    // ESPAÇAMENTO INTERNO
    padding: 20,
  },
// ESTILO DO TITULO
  titulo: {
    // TAMANHO DA FONTE
    fontSize: 32,
    // COR DO TEXTO
    color: '#00ff88',
    // TEXTO EM NEGRITO
    fontWeight: 'bold',
    // ESPAÇAMENTO ABAIXO
    marginBottom: 30,
  },

// ESTILO DO PONTOS
pontos: {
  // TAMANHO DA FONTE
    fontSize: 80,
    // COR BRANCA
    color: '#ffffff',
    // ESPAÇAMENTO ABAIXO
    marginBottom: 40,
    // NEGRITO
    fontWeight: 'bold',
  },

  // ÁREA DOS BOTOES
  areabotoes: {
    // DEIXA UM BOTÃO DO LADO DO OUTRO
    flexDirection: 'row',
    // ESPAÇO ABAIXO
    marginBottom: 20,
  },
  // ESTILO DOS BOTOES +1 E -1
  botao: {
    // COR DO BOTÃO
    backgroundColor: '#00ff88',
    // ESPAÇAMENTO VERTICAL
    paddingVertical: 15,
    // ESPAÇAMENTO HORIZONTAL
    paddingHorizontal: 30,
    // ARREDONDAMENTO AS BORDAS
    borderRadius: 12,
    // ESPAÇO ENTRE OS BOTOES
    marginHorizontal: 10,
  },
  // ESTILO DO BOTÃO DE RESETAR
  botaoreset: {
    // COR VERMELHA
    backgroundColor: '#ff3b30',
    // ESPAÇAMENTO
    paddingVertical: 15,
    paddingHorizontal: 30,
    // BORDAS ARREDONDADAS
    borderRadius: 12,
  },
  // ESTILO DO TEXTO DENTRO DOS BOTOES
  textobotao: {
    // TAMANHO DA LETRA
    color: '#000',
    // COR DO TEXTO
    fontSize: 18,
    // NEGRITO
    fontWeight: 'bold',
  },

});