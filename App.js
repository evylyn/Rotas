import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Evelyn({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O que eu quero que você faça??
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Vinicius"
          onPress={() => navigation.navigate('Vinicius')}
          color="#803000" // Personalize a cor conforme desejado
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Laura"
          onPress={() => navigation.navigate('Laura')}
          color="#308000" // Personalize a cor conforme desejado
        />
      </View>
    </View>
  );
}

function Vinicius() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ele é minha pessoa favorita no mundo inteiro 
      </Text>
      <h2>O que deve fazer:</h2>
      <Text style={styles.text}>
        Pular em um pé só 15 vezes
      </Text>
    </View>
  );
}

function Laura() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Laura é um amorzinho amo ela
      </Text>
      <h2>O que deve fazer:</h2>
      <Text style={styles.text}>
        ser uma abelha
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cor de fundo para a tela
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20, // Adiciona um espaçamento horizontal para melhor legibilidade
  },
  buttonContainer: {
    width: '50%',
    marginBottom: 10,
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Evelyn">
        <Stack.Screen name="Evelyn" component={Evelyn} />
        <Stack.Screen name="Vinicius" component={Vinicius} />
        <Stack.Screen name="Laura" component={Laura} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;