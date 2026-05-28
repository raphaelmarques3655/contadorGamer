//Importa o React e o useState
//useState serve para criar valores que podem mudar na tela
import React, { useEffect, useState } from "react";

//Importa os componentes do React Native
import {
    View, //Área de tela
    Text, //Texto
    Button, //Botão
    StyleSheet, //Estilos
    TouchableOpacity, //Botão customizável
    TextInput //Campo de texto
} from "react-native-web";

//Componente principal do app
export default function Jogador2() {
    //Cria a estado (variavel) pontos e a função setPontos para alterar o valor
    //0 é o valor inicial
    const [pontos1, setPontos1] = useState(0);
    const [pontos2, setPontos2] = useState(0);
    const [nome1, setNome1] = useState("Jogador 1");
    const [nome2, setNome2] = useState("Jogador 2");
    const [lider, setLider] = useState("Empate");

    //Executar alguma ação automaticamente
    //quando algo mudar
    //nesse caso:
        //toda vez que os pontos / nomes mudarem
        //o código dentro do useEffect é executado
    useEffect(() => {
        if(pontos1 > pontos2){
            setLider(nome1);
        }else if(pontos2 > pontos1){
            setLider(nome2);
        }else{
            setLider("Empate");
        }
    }, [pontos1, pontos2, nome1, nome2]);
    //dependências que disparam o useEffect quando mudam    

    //Função para aumentar 1 ponto
    function aumentar1() {
        //pega o valor atual e soma +1
        setPontos1(pontos1 + 1);
    }
    function aumentar2() {
        //pega o valor atual e soma +1
        setPontos2(pontos2 + 1);
    }
    //Função para diminuir 1 ponto
    function diminuir1() {
        //pega o valor atual e subtrai -1
        if(pontos1 > 0){
            setPontos1(pontos1 - 1);
        }
    }
    function diminuir2() {
        //pega o valor atual e subtrai -1
        if(pontos2 > 0){
            setPontos2(pontos2 - 1);
    }
    }
    //Função para resetar o contador
    function reset() {
        //volta o valor para 0
        setPontos1(0);
        setPontos2(0);
        setLider("Empate");
    }

    //Tudo que está no return é o que aparece na tela
    return (
        //View principal do app
        <View style={styles.container}>
            {/* Título do App */}
            <Text style={styles.titulo}>
                🎮 Contador Gamer - Modo 2 Jogadores
            </Text>
            
            <Text style={styles.lider}>
                🏆  Lider: {lider}  🏆
            </Text>

            {/* Area dos Jogadores */}
            <View style={styles.areaJogadores}>
                {/* Jogador 1 */}
                <View style={styles.areaJogador}>
                    <TextInput
                        style={styles.input} 
                        placeholder="Nome do Jogador 1"
                        placeholderTextColor="#999"
                        value={nome1}
                        onChangeText={setNome1}
                    />
                    <Text style={styles.nome}>{nome1}</Text>
                    {/* Mostra o valor atual dos pontos */}
                    <Text style={styles.pontos}>{pontos1}</Text>
                    {/* Área dos botões */}
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity onPress={aumentar1} style={styles.botao}>
                            <Text style={styles.textoBotao}>+1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={diminuir1} style={styles.botao}>
                            <Text style={styles.textoBotao}>-1</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Jogador 2 */}
                <View style={styles.areaJogador}>
                    <TextInput
                        style={styles.input} 
                        placeholder="Nome do Jogador 2"
                        placeholderTextColor="#999"
                        value={nome2}
                        onChangeText={setNome2}
                    />
                    <Text style={styles.nome}>{nome2}</Text>
                    {/* Mostra o valor atual dos pontos */}
                    <Text style={styles.pontos}>{pontos2}</Text>
                    {/* Área dos botões */}
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity onPress={aumentar2} style={styles.botao}>
                            <Text style={styles.textoBotao}>+1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={diminuir2} style={styles.botao}>
                            <Text style={styles.textoBotao}>-1</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* Botão reset */}
            <TouchableOpacity onPress={reset} style={styles.botaoReset}>
                <Text style={styles.textoBotao}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}
//Estilos do app
const styles = StyleSheet.create({
    //Estilo da tela principal
    container: {
        //Ocupar toda a tela
        flex: 1,
        //Cor de fundo
        backgroundColor: '#121212',
        //Centralizar horizontalmente
        alignItems: 'center',
        //Centralizar verticalmente
        justifyContent: 'center',
        //Espaçamento interno
        padding: 20
    },
    //Estilo do título
    titulo: {
        //Tamanho da fonte
        fontSize: 32,
        //Cor do texto
        color: '#00ff88',
        //Negrito
        fontWeight: 'bold',
        //Espaçamento abaixo
        marginBottom: 20,
    },
    //Estilo dos pontos
    pontos: {
        //Tamanho da fonte
        fontSize: 80,
        //Cor do texto  
        color: '#ffffff',
        //Espaçamento abaixo
        marginBottom: 40,
        //Negrito
        fontWeight: 'bold',
    },
    //Estilo da área dos botões
    areaBotoes: {
        //Organizar os botões em linha
        flexDirection: 'row',
        //Espaçamento abaixo
        marginBottom: 20,
    },
    //Estilo dos botões
    botao: {
        //Cor de fundo
        backgroundColor: '#00ff88',
        //Espaçamento interno vertical
        paddingVertical: 15,
        //Espaçamento interno horizontal
        paddingHorizontal: 30,
        //Bordas arredondadas
        borderRadius: 12,
        //Espaçamento horizontal entre os botões
        marginHorizontal: 10,
    },
    //Estilo do botão reset
    botaoReset: {
        //Cor de fundo
        backgroundColor: '#ff3b30',
        //Espaçamento interno vertical
        paddingVertical: 15,
        //Espaçamento interno horizontal
        paddingHorizontal: 40,
        //Bordas arredondadas
        borderRadius: 12,
    },
    //Estilo do texto dos botões
    textoBotao: {
        //Tamanho da fonte
        fontSize: 22,
        //Cor do texto
        color: '#000',
        //Negrito
        fontWeight: 'bold',
    },

    areaJogadores: {
        flexDirection: 'row',
        grap: 15
    },

    areaJogador: {
        backgroundColor: '#1f1f1f',
        width: 230,
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
    },

    input: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
    },

    nome: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },

    lider: {
        fontSize: 22,
        color: '#fff',
        marginBottom: 20,
        fontWeight: 'bold',
    }
});