// Importação para o menu lateral funcionar
import 'react-native-gesture-handler';

// importar o container da navegação
// ele controla todas as telas do app
import { NavigationContainer } from '@react-navigation/native';

// importar o menu lateral (DRAWER)
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importar as telas
import Jogador1 from './components/Jogador1';
import Jogador2 from './components/Jogador2';
import Jogador3 from './components/Jogador3';
import Jogador4 from './components/Jogador4';



// Cria o Drawer
const Drawer = createDrawerNavigator();

// componente principal do APP
export default function App() {
  // o que esra dentro do return aparece na tela
  return (
    // container Principal da navegação
    <NavigationContainer>

      {/* menu lateral*/}

      <Drawer.Navigator>

        {/* Tela do Jogador1 */}

        <Drawer.Screen
          // nome que aparece no menu
          name="1 Jogador"
          // compomente que será aberto 
          component={Jogador1} />
      
      <Drawer.Screen
          // nome que aparece no menu
          name="2 Jogador"
          // compomente que será aberto 
          component={Jogador2} />

      <Drawer.Screen
          // nome que aparece no menu
          name="3 Jogador"
          // compomente que será aberto 
          component={Jogador3} />
          <Drawer.Screen
          // nome que aparece no menu
          name="4 Jogador"
          // compomente que será aberto 
          component={Jogador4} />

          
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


