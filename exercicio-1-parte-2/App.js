import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Olá, Mundo!</Text>

      <Text style={styles.subtitulo}>Meu primeiro app Android</Text>

      <View style={styles.botaoContainer}>
        <Button
          title="Clique aqui!"
          onPress={() => alert('Botão pressionado!')}
          color="#4A90E2"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  subtitulo: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 40,
  },
  botaoContainer: {
    width: 200,
  },
});