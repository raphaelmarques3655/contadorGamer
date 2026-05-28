//Importa o React e o useState
//useState serve para valores que podem mudar na tela
import React, { useState } from "react";

import { experimental_LayoutConformance } from "react-native";
//Importa os componentes do React Native
import {
  View, // caixa / área da tela onde colocamos os outros componentes
  Text, // textos
  Button,// botão
  StyleSheet,// estilos
  TouchableOpacity// botão customizável
} from "react-native-web";

//componente principal do app
export default function Jogador2() {
  //cria uma estado (variavel php) chamada pontos
  //pontos = valor atual
  //setPontos = função para atualizar o valor de pontos
  //0 = valor inicial de pontos
  const [pontos, setPontos] = useState(0);
  //função para aumentar 1 ponto
  function aumentar() {
    //pega o valor atual e aumenta 1 ponto e atualiza o valor de pontos
    setPontos0(pontos + 1);
  }

  //função para diminuir 1 ponto

  function diminuir() {
    //pega o valor atual e diminui 1 ponto e atualiza o valor de pontos
    setPontos0(pontos - 1);
    if (pontos <= 0) {
      setPontos0(0);
    }
  }
  //função para resetar os pontos

  function resetar() {
    //atualiza o valor de pontos para 0
    setPontos(0);
  }
  

  const [numeros, setNumeros] = useState(0);
  //função para aumentar 1 ponto
  function aumentar() {
    //pega o valor atual e aumenta 1 ponto e atualiza o valor de pontos
    setNumeros(numeros + 1);
  }
  //função para diminuir 1 ponto

  function diminuir() {
    //pega o valor atual e diminui 1 ponto e atualiza o valor de pontos
    setNumeros(numeros - 1);
    if (numeros <= 0) {
      setNumeros(0);
    }
  }
  //função para resetar os pontos

  function resetar() {
    //atualiza o valor de pontos para 0
    setNumeros(0);
  }
  // tudo que esta no RETURN aparece na tela do app
  return (
    // View principal do APP, igual a uma div no HTML, serve para organizar os outros componentes
    <View style={styles.container}>
      {/* // Título do app */}
      <Text style={styles.titulo}>
        🎮 Jogador 1
      </Text>
      {/* Mostra o valor atual de pontos */}
      <Text style={styles.pontos}>{pontos}
        {/* área dos botões +1 e -1 */}
      </Text>
      <View style={styles.areaBotoes}>
        <TouchableOpacity onPress={aumentar} style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={diminuir} style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>


      </View>
      <View style={styles.areaBotoes}>
        <TouchableOpacity onPress={resetar} style={styles.botaoReset}>
          <Text style={styles.textoBotao}>Resetar</Text>
        </TouchableOpacity>
      </View>
  
      <view style={{marginTop: 1}}>
       <Text style={styles.titulo}>
        🎮 Jogador 2
      </Text>
      {/* Mostra o valor atual de pontos */}
      <Text style={styles.numeros}>{numeros}
        {/* área dos botões +1 e -1 */}
      </Text>
      <View style={styles.areaBotoes2}>
        <TouchableOpacity onPress={aumentar} style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={diminuir} style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>


      </View>
      <View style={styles.areaBotoes}>
        <TouchableOpacity onPress={resetar} style={styles.botaoReset}>
          <Text style={styles.textoBotao}>Resetar</Text>
        </TouchableOpacity>
      </View>
      </view>

    </View>
  );
}

  




//area de estilos do app
const styles = StyleSheet.create({
  //estilo da View principal do app
  container: {
    // ocupa toda a tela
    flex: 1,
    // cor de fundo
    backgroundColor: '#c01616ff',
    //centraliza horizontalmente
    alignItems: 'center',
    //centraliza verticalmente
    justifyContent: 'center',
    //espaçamento interno da View
    padding: 20,
  },
//estilo do título do app
  titulo: {
    // tamanho da fonte
    fontSize: 32,
    // cor da fonte
    color: '#00ff88',
    // negrito
    fontWeight: 'bold',
    // espaçamento inferior
    marginBottom: 30,
  },
//estilo do texto que mostra os pontos
  pontos: {
    // tamanho da fonte
    fontSize: 80,
    // cor da fonte
    color: '#ffffff',
    // espaçamento inferior
    marginBottom: 40,
    // negrito
    fontWeight: 'bold',
  },
//estilo da área dos botões
  areaBotoes: {
    // organiza os botões em linha
    flexDirection: 'row',
  // espaçamento inferior  
    marginBottom: 20,
  },
//estilo dos botões +1 e -1
  button: {
    // cor de fundo
    backgroundColor: '#00ff88',
    // espaçamento interno vertical
    paddingVertical: 15,
    // espaçamento interno horizontal
    paddingHorizontal: 30,
    // bordas arredondadas
    borderRadius: 12,
    // espaçamento horizontal entre os botões
    marginHorizontal: 10,
  },
//estilo do botão resetar
  botao: {
    // cor de fundo
    backgroundColor: '#00ff88',
    // espaçamento interno vertical
    paddingVertical: 15,
    // espaçamento interno horizontal
    paddingHorizontal: 30,
    // bordas arredondadas
    borderRadius: 12,
    // espaçamento horizontal entre os botões
    marginHorizontal: 10,
  },
//estilo do botão resetar
  botaoReset: {
    // cor de fundo
    backgroundColor: '#ff3b30',
    // espaçamento interno vertical
    paddingVertical: 15,
    // espaçamento interno horizontal
    paddingHorizontal: 40,
    // bordas arredondadas
    borderRadius: 12,
  },
//estilo do texto dos botões
  textoBotao: {
    // tamanho da fonte
    fontSize: 15,
    // cor da fonte
    color: '#000',
    // negrito
    fontWeight: 'bold',
  },








    numeros: {
    // tamanho da fonte
    fontSize: 80,
    // cor da fonte
    color: '#ffffff',
    // espaçamento inferior
    marginBottom: 40,
    // negrito
    fontWeight: 'bold',
  },
  numeros: {
    // tamanho da fonte
    fontSize: 80,
    // cor da fonte
    color: '#ffffff',
    // espaçamento inferior
    marginBottom: 40,
    // negrito
    fontWeight: 'bold',
  },
//estilo da área dos botões
  areaBotoes2: {
    // organiza os botões em linha
    flexDirection: 'row',
  // espaçamento inferior  
    marginBottom: 20,
  },
//estilo dos botões +1 e -1
  button2: {
    // cor de fundo
    backgroundColor: '#00ff88',
    // espaçamento interno vertical
    paddingVertical: 15,
    // espaçamento interno horizontal
    paddingHorizontal: 30,
    // bordas arredondadas
    borderRadius: 12,
    // espaçamento horizontal entre os botões
    marginHorizontal: 10,
  },
//estilo do botão resetar
  botao2: {
    // cor de fundo
    backgroundColor: '#00ff88',
    // espaçamento interno vertical
    paddingVertical: 15,
    // espaçamento interno horizontal
    paddingHorizontal: 30,
    // bordas arredondadas
    borderRadius: 12,
    // espaçamento horizontal entre os botões
    marginHorizontal: 15,
  },
//estilo do botão resetar
  botaoReset2: {
    
    // cor de fundo
    backgroundColor: '#ff3b30',
    // espaçamento interno vertical
    paddingVertical: 15,
    // espaçamento interno horizontal
    paddingHorizontal: 40,
    // bordas arredondadas
    borderRadius: 12,
  },
//estilo do texto dos botões
  textoBotao2: {
    // tamanho da fonte
    fontSize: 15,
    // cor da fonte
    color: '#000',
    // negrito
    fontWeight: 'bold',
  },
  
});